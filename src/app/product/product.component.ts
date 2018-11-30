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
  private subuscription$ = new Subscription();
  private productSubuscription$: Subscription;
  private _productId: number;
  public _product: Product;
  constructor(private productService: ProductService, private cartService: CartService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subuscription$.add(this._activatedRoute.params.subscribe(params => {
      this._productId = params['productId'];
    }));
    this.subuscription$.add(this.productService.getProductById(this._productId).subscribe((product: Product) => {
      this._product = product;
    }));
  }
  addToCart(productId: number, quantity: number) {
    this.cartService.addItem(productId, quantity);
    this.cartService.updateNumberOfItems(this.cartService.getNumberOfItems());
  }
  ngOnDestroy() {
      this.subuscription$.unsubscribe();
  }
}
