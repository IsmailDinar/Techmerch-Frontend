import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  public topRatedProducts: Product[] = [];
  public selectedProduct: Product;
  private _categoryId: number;
  private subuscription: Subscription;
  constructor(private productService: ProductService, private cookieService: CookieService, private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.subuscription = this._activatedRoute.params.subscribe(params => {
      this._categoryId = params['categoryId'];
      this.productService.getProductsByCategory(this._categoryId).subscribe((products: Product[]) => {
        this.products = products;
      },
        (error) => {
          console.log(error);
        },
        () => {
        this.topRatedProducts = this.products.sort((a, b) => {
          return b.productRate - a.productRate;
        });
        }
      );
    });
  }
  addToCart(product: Product, quantity: number) {
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
  ngOnDestroy() {
    if (this.subuscription !== undefined) {
      this.subuscription.unsubscribe();
    }
  }
}
