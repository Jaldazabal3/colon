import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-perduda',
  templateUrl: './perduda.component.html',
  styleUrls: ['./perduda.component.css']
})
export class PerdudaComponent implements OnInit {

  perdudaControl = this.formBuilder.group({
    mediaRecieved: ['', Validators.required],
    email: ['', Validators.email]
  },
  {
    validators: this.customValidation
  });


  @Output() gonePrevious = new EventEmitter();
  @Output() submittedPerduda = new EventEmitter();
  @Output() emailPerdChange = new EventEmitter();


  ngOnInit() {
  }

  constructor(private formBuilder: FormBuilder) {  }

  private finalSubmit() {
    console.log('Submit to email');
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  /**
   * Checks that the email is filled out if the user has chosen email in the previous field
   * @param formGroup Form to be validated
   * @return object with a true boolean attribute if the email is required and the user has not filled it out,
   * null otherwise.
   */
  private customValidation(formGroup): any {
    /* tslint:disable:no-string-literal */
    const mediaRecievedField = formGroup.controls['mediaRecieved'].value;
    const emailField = formGroup.controls['email'].value;
    if (mediaRecievedField === 'email') {
      return (emailField === '') ? { emailEmpty: true } : null;
    } else {
      return null;
    }
  }

  private changeEmail() {
    this.emailPerdChange.emit(this.perdudaControl.get('email').value);
  }
}
