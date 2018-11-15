import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api-category';

  constructor(private _http: HttpClient) { }
  getCategoeies() {
    return this._http.get(this.baseUrl + '/categories').
    pipe(catchError(this.errorHandler));
  }
  errorHandler(error: Response) {
    return throwError(error || 'Error');
  }
}
