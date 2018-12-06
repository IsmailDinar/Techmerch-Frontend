import { CartService } from './../services/cart.service';
import { Product } from './../model/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../model/order';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();
  private _productId: number;
  public _product: Product;
  public quantity = 1;
  constructor(private productService: ProductService, private cartService: CartService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription$.add(this._activatedRoute.params.subscribe(params => {
      this._productId = params['productId'];
      this.initialiseState();
    }));

  }
  initialiseState() {
    this.subscription$.add(this.productService.getProductById(this._productId).subscribe((product: Product) => {
      this._product = product;
    }));
  }
  addToCart(productId: number, quantity: number) {
    this.cartService.addItem(productId, quantity);
    this.cartService.updateNumberOfItems(this.cartService.getNumberOfItems());
  }
  setDiscount(product: Product): number {
    return Math.round(product.productPrice * (1 - (product.productDiscount / 100)));
  }
  setQuantity(s: string) {
    if (s === 'inc') {
      this.quantity ++;
    } else {
      if (this.quantity > 1) {
        this.quantity --;
      }
    }
  }
  ngOnDestroy() {
      this.subscription$.unsubscribe();
  }
}
