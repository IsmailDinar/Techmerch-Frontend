import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, RequestOptions, Response, Http } from '@angular/http';
import {map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api';
  private headers = new Headers({'Content-type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  constructor(private _http: Http) { }
  getProducts() {
    return this._http.get(this.baseUrl + '/products', this.options)
    .pipe(map((response: Response) => response.json()))
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: Response) {
    return Observable.throw(error || 'Error');
  }

}
