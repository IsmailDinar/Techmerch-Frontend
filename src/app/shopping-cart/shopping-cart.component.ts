import { Subscription } from 'rxjs';
import { ProductService } from './../services/product.service';
import { Product } from 'src/app/model/product';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public quantities: number [] = [];
  private subscription = new Subscription();
  public isEmpty = true;
  public total = 0;
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    if (this.cartService.getNumberOfItems() !== 0 ) {
      this.getItems();
      this.isEmpty = false;
      console.log(this.products);
    }
  }
  getItems() {
    const cartItems = this.cartService.getItems();
      for (let i = 0; i < cartItems.length; i++) {
        this.quantities[i] = cartItems[i].quantity;
        this.subscription.add(this.productService.getProductById(cartItems[i].productId).subscribe((product: Product) => {
          this.products.push(product);
        }));
      }
  }
  getAmount(price: number, quantity: number): number {
    this.total += (price * quantity);
    console.log(this.total);
    return price * quantity;
  }
  setQuantity(productId: number, s: string , i: number) {
    let q = 0;
    if (s === 'inc') {
      this.quantities[i]++;
      q = this.quantities[i];
      this.cartService.setQuantity(productId, q );
      this.cartService.updateNumberOfItems(this.cartService.getNumberOfItems());
    } else {
      if (this.quantities[i] > 1) {
        this.quantities[i]--;
        q = this.quantities[i];
        this.cartService.setQuantity(productId, q );
        this.cartService.updateNumberOfItems(this.cartService.getNumberOfItems());
      }
    }
  }
  removeItem(productId: number) {
    this.cartService.removeItem(productId);
    this.products = [];
    this.getItems();
    this.cartService.updateNumberOfItems(this.cartService.getNumberOfItems());
    if (this.cartService.getNumberOfItems() === 0)  {
      this.isEmpty = true;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
