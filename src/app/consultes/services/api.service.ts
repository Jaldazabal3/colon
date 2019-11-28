import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {FormResponse} from '../models/form-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: object = {}, options: object = {}): Observable<FormResponse> {
    return this.http.post<FormResponse>(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      options
    ).pipe(catchError(this.formatErrors));
  }
}
