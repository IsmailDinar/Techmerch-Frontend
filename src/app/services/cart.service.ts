import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private numberOfItems = new Subject<number>();
  numberOfItems$ = this.numberOfItems.asObservable();

  constructor(private cookieService: CookieService) { }
  addItem(product: Product, quantity: number) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 10);
    if (this.cookieService.check('cart')) {
      let value = this.cookieService.get('cart');
      if (value.includes(JSON.stringify(product))) {
        return;
      } else {
        value += ';' + JSON.stringify(product);
        this.cookieService.set('cart', value, expires);
      }
    } else {
      this.cookieService.set('cart', JSON.stringify(product), expires);
    }
  }
  removeItem(product: Product) {
    let str = this.cookieService.get('cart');
    str = str.replace(JSON.stringify(product), '');
    if (str.substr(str.length - 1) === ';') {
      str = str.substring(0, str.length - 1);
    }
    if (str.charAt(0) === ';') {
      str = str.substring(1);
    }
    if (str.includes(';;')) {
      str = str.replace(';;', ';');
    }
    if (str === '') {
      this.cookieService.delete('cart');
    } else {
      this.cookieService.set('cart', str);
    }
  }
  getNumberOfItems(): number {
    if (this.cookieService.check('cart')) {
      const str = this.cookieService.get('cart');
      return (str.split(';').length);
    } else { return 0; }
  }
  getItems(): Product[] {
    const products: Product[] = [];
    if (this.cookieService.check('cart')) {
        const str = this.cookieService.get('cart');
        const cartItems =  str.split(';');
      for (let i = 0 ; i < cartItems.length ; i++) {
        products.push(JSON.parse(cartItems[i]));
      }
      }
      return products;
  }
  updateNumberOfItems(n: number) {
    this.numberOfItems.next(n);
  }
}
