import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Register } from './register';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private _url: string = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

  enroll(reg: Register) {
   return  this._http.post<any>(this._url, reg)
     .pipe(catchError(this.errorHandler));
  };
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
