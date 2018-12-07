import { CartItem } from './../model/cart-item';
import { AuthService } from './../services/auth.service';
import { OrderService } from './../services/order.service';
import { Subscription } from 'rxjs';
import { ProductService } from './../services/product.service';
import { Product } from 'src/app/model/product';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Order } from '../model/order';
import { Router } from '@angular/router';

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
  public userUid = '';
  public shippingAddress: string;
  // tslint:disable-next-line:max-line-length
  constructor(private productService: ProductService, private cartService: CartService, private orderService: OrderService, private authService: AuthService,  private router: Router) { }

  ngOnInit() {
    if (this.cartService.getNumberOfItems() !== 0 ) {
      this.getItems();
      this.isEmpty = false;
    }
  }
  addOrder() {
    this.userUid = this.authService.userUid;
    if (this.userUid) {
    const order = new Order();
    order.orderCreationDate = new Date();
    order.orderEtaDate = new Date();
    order.orderUpdateDate = new Date();
    const productsIds = [];
    for (let i = 0; i < this.products.length; i++) {
      const cartItem = new CartItem(0, 0);
      cartItem.productId =  this.products[i].productId;
      cartItem.quantity = this.quantities[i];
      productsIds.push(cartItem);
      order.orderAmount += this.products[i].productPrice * this.quantities[i];
    }
    order.orderProducts = JSON.stringify(productsIds);
    order.orderClientId = this.authService.userUid;
    order.orderShippingAddress = this.shippingAddress;
    this.orderService.addOrder(order).subscribe();
  } else {
    this.router.navigateByUrl('/login');
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
