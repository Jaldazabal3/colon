import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {FormResponse} from './form-response';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { ColonFormData } from './colon-form-data';

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

  private createFormObject(formMunicipi, formIdentificationData, formMotivo, formPerduda, formUltimsAnys, formAntecedents) {
    return new ColonFormData(
      formMunicipi.municipiControl.get('municipi').value,
      formIdentificationData.idDataControl.get('name').value,
      formIdentificationData.idDataControl.get('surname').value,
      formIdentificationData.idDataControl.get('cip').value,
      formIdentificationData.idDataControl.get('nccr').value,
      formIdentificationData.idDataControl.get('email').value,
      formIdentificationData.idDataControl.get('phone').value,
      formMotivo.motivoControl.get('motivos').value.text,
      formPerduda.perdudaControl.get('mediaRecieved').value,
      formPerduda.perdudaControl.get('email').value,
      formUltimsAnys.formAnyExploracio.anyExploracioControl.get('anyExploracio').value,
      formUltimsAnys.formMenorQueCinc.menorQueCincControl.get('seguimentProgramat').value,

    );
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

  sendForm(formMunicipi, formIdentificationData, formMotivo, formPerduda, formUltimsAnys, formAntecedents) {
    // Returning Observable of FormResponse interface
    return this.http.post<FormResponse>(
      this.targetUrl,
      this.createFormObject(formMunicipi, formIdentificationData, formMotivo, formPerduda, formUltimsAnys, formAntecedents),
      httpOptions
    )
      .pipe(
        catchError(this.handleError)
      );
  }
}
