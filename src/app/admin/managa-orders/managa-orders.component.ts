import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-managa-orders',
  templateUrl: './managa-orders.component.html',
  styleUrls: ['./managa-orders.component.css']
})
export class ManagaOrdersComponent implements OnInit {
  public orders: Order[] = [];
  public subscription = new Subscription();
  public isSubmitted = false;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.subscription.add(this.orderService.getAllOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
      for (let i = 0; i < this.orders.length; i++) {
        this.orders[i].orderCreationDate = new Date(this.orders[i].orderCreationDate);
      }
    }));
  }
  formatDate(date: Date): string {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-Us', options);
  }
  onSubmit() { this.isSubmitted = true; }
}
