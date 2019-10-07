import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {FormResponse} from './form-response';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  targetUrl = `http://localhost:8080/consulta`;

  createFormObject() {
    // TODO: receive all data from forms to create the object
    return new FormData();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.log(error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.log(error.status);
    }
    // Return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later'
    );
  }

  sendForm() {
    // Returning Observable of FormResponse interface
    return this.http.post<FormResponse>(this.targetUrl, this.createFormObject(), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
