import { Product } from 'src/app/model/product';
import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public products: Product[] = [];
  public isEmpty = true;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.check('cart')) {
      const str = this.cookieService.get('cart');
      this.isEmpty = false;
      const cartItems =  str.split(';');
    for (let i = 0 ; i < cartItems.length ; i++) {
      this.products.push(JSON.parse(cartItems[i]));
    }
    }
  }
  removeItem(product: Product) {
    let str = this.cookieService.get('cart');
    str = str.replace(JSON.stringify(product), '');
    if (str.substr(str.length - 1) === ';') {
      str = str.substring(0, str.length - 1);
    }
    if (str.substr(0) === ';') {
      str = str.substring(1, str.length);
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

}
