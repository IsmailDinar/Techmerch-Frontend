import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080/api/orders';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private _http: HttpClient) { }

  getAllOrders() {
    return this._http.get(this.baseUrl , this.httpOptions);
  }
  getOrdersByClientId(clientId: string) {
    return this._http.get(this.baseUrl +  '/' + clientId, this.httpOptions );
  }
  addOrder(order: Order) {
    order.orderReference =  Math.random().toString(36).substr(2, 9);
    return this._http.post(this.baseUrl + '/add', JSON.stringify(order), this.httpOptions);
  }
  updateOrder(order: Order) {
    return this._http.put(this.baseUrl + '/update', JSON.stringify(order) , this.httpOptions);
  }
  deleteOrder(orderId: number) {
    return this._http.delete(this.baseUrl + '/delete/' + orderId,  this.httpOptions);
  }
}
