import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {FormResponse} from '../models/form-response';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { ColonFormData } from '../models/colon-form-data';
import {ApiService} from './api.service';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class FormPostService {

  constructor(private apiService: ApiService) { }

  /**
   * Creates form object to be passed inside a request
   * @param formMunicipi data from municipi form
   * @param formIdentificationData data from identificative data form
   * @param formMotivo data from reason form
   * @param formPerduda data from lost letter form
   * @param formUltimsAnys data from colono in last years form
   * @param formUlcerosaCrohn data from illness form
   * @param formAntecedents data from family past problems form
   * @param formAltresMotius data from other reasons form
   * @param userEmail email given by the user
   * @param userPhone phone given by the user
   */
  private createFormObject(formMunicipi,
                           formIdentificationData,
                           formMotivo,
                           formPerduda,
                           formUltimsAnys,
                           formUlcerosaCrohn,
                           formAntecedents,
                           formAltresMotius,
                           userEmail,
                           userPhone
  ) {
    const formObject = new ColonFormData();
    formObject.setForm(
      formMunicipi,
      formIdentificationData,
      formMotivo,
      formPerduda,
      formUltimsAnys,
      formUlcerosaCrohn,
      formAntecedents,
      formAltresMotius,
      userEmail,
      userPhone
    );
    return formObject;
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

  sendForm(formMunicipi,
           formIdentificationData,
           formMotivo,
           formPerduda,
           formUltimsAnys,
           formUlcerosaCrohn,
           formAntecedents,
           formAltresMotius,
           userEmail,
           userPhone): Observable<FormResponse> {
    // Returning Observable of FormResponse interface
    return this.apiService.post(
      `${environment.form_path}`,
      this.createFormObject(
        formMunicipi,
        formIdentificationData,
        formMotivo,
        formPerduda,
        formUltimsAnys,
        formUlcerosaCrohn,
        formAntecedents,
        formAltresMotius,
        userEmail,
        userPhone
      ),
      httpOptions
    )
      .pipe(map((data) => data));
  }
}
