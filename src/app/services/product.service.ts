import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api-product';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get(this.baseUrl + '/products').
    pipe(catchError(this.errorHandler));
  }
  getProductsByCategory(categoryId: number) {
    return this._http.get(this.baseUrl + '/products/' + categoryId).
    pipe(catchError(this.errorHandler));
  }
  addProduct(product: Product) {

    return this._http.post(this.baseUrl + '/add', JSON.stringify(product), this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  updateProduct(product: Product) {

    return this._http.post(this.baseUrl + '/update/' + product.productId , JSON.stringify(product), this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: Response) {
    return throwError(error || 'Error');
  }

}
