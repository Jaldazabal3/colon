import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {

};

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  private handleError(e) {
    return throwError(e);
  }

  postFile(path: string, objectFile: object): Observable<any> {
    const endpoint = `${environment.api_url}${path}`;
    const formData: FormData = new FormData();
    formData.append('fileColono', objectFile.informeColono, objectFile.informeColono.name);
    formData.append('directoryName', objectFile.customPath);
    return this.http
      .post<any>(endpoint, formData, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
