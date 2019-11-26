import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  private handleError(e) {
    return throwError(e);
  }

  postFile(path: string, fileToUpload: File): Observable<any> {
    const endpoint = `${environment.api_url}${path}`;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post<any>(endpoint, formData, httpOptions)
      .pipe(catchError(this.handleError));
  }


}
