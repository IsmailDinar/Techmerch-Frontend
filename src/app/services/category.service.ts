import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) { }
  getCategoeies() {
    return this._http.get(this.baseUrl + '/categories').
    pipe(catchError(this.errorHandler));
  }
  getSubCategories() {
    return this._http.get(this.baseUrl + '/subcategories').
    pipe(catchError(this.errorHandler));
  }
  getSubCategoriesByCategory(categoryId: number) {
    return this._http.get(this.baseUrl + '/' + categoryId + '/subcategories').
    pipe(catchError(this.errorHandler));
  }
  errorHandler(error: Response) {
    return throwError(error || 'Error');
  }
}
