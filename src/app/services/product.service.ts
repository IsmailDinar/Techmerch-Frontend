import { Injectable } from '@angular/core';
import {  throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api-product';
  private categoryId = new Subject<number>();
  currentCategoryId = this.categoryId.asObservable();
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

    return this._http.post(this.baseUrl + '/add', JSON.stringify(product))
    .pipe(catchError(this.errorHandler));
  }

  changeCategory(categoryId: number) {
    this.categoryId.next(categoryId);
    console.log(categoryId);
  }
  errorHandler(error: Response) {
    return throwError(error || 'Error');
  }

}
