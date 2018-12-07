import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from './../model/cart-item';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../model/user';
import { Order } from '../model/order';
import { OrderService } from '../services/order.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  public user: firebase.User;
  public userUid: string;
  public isEmpty = false;
  public products: Product[] = [];
  public quantities: number[] = [];
  public orders: Order[] = [];
  public subscription = new Subscription();
  constructor(private authService: AuthService, private orderService: OrderService, private productService: ProductService) { }

  ngOnInit() {
      this.userUid =  this.authService.userUid;
      this.getOrders();
  }
  getOrders() {
    this.subscription.add(this.orderService.getOrdersByClientId(this.userUid).subscribe((orders: Order[] ) => {
    this.orders = orders;
    if (orders.length === 0) {
      this.isEmpty = true;
    }
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].orderCreationDate = new Date(this.orders[i].orderCreationDate);
    }
   }));
  }
  formatDate(date: Date): string {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-Us', options);
  }
  getNumberOfItems(order: Order): number {
    const cartItems = JSON.parse(order.orderProducts);
    let n = 0;
    for (let i = 0; i < cartItems.length ; i++) {
      n += cartItems[i].quantity;
    }
    return n;
  }
  getProducts(order: Order) {
    this.products = [];
    const cartItems = JSON.parse(order.orderProducts);
    for (let i = 0; i < cartItems.length ; i++) {
      this.subscription.add(this.productService.getProductById(cartItems[i].productId).subscribe((product: Product) => {
        this.products.push(product);
        this.quantities[i] = cartItems[i].quantity;
        console.log(this.products);
            }));
    }
  }
  deleteOrder(orderId: number, index: number) {
    this.orderService.deleteOrder(orderId).subscribe();
    this.orders.splice(index, 1);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
