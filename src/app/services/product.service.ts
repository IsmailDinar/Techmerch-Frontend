import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
import { Order } from '../model/order';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get(this.baseUrl + '/products', this.httpOptions).
    pipe(catchError(this.errorHandler));
  }
  getProductById(productId: number) {
    return this._http.get(this.baseUrl + '/product/' + productId, this.httpOptions);
  }
  getProductsByCategory(categoryId: number) {
    return this._http.get(this.baseUrl + '/products/' + categoryId, this.httpOptions).
    pipe(catchError(this.errorHandler));
  }
  addProduct(product: Product) {

    return this._http.post(this.baseUrl + '/addProduct', JSON.stringify(product), this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  updateProduct(product: Product) {

    return this._http.post(this.baseUrl + '/updateProduct/' + product.productId , JSON.stringify(product), this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  getProductsBySubCategory(subcategoryId: number) {
    return this._http.get(this.baseUrl + '/scproducts/' + subcategoryId, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: Response) {
    return throwError(error || 'Error');
  }

}
