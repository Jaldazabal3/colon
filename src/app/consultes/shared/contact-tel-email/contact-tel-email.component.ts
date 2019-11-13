import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-tel-email',
  templateUrl: './contact-tel-email.component.html',
  styleUrls: ['./contact-tel-email.component.css']
})
export class ContactTelEmailComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedContactTelEmail = new EventEmitter();
  @Output() emailContactChange = new EventEmitter();
  @Output() phoneContactChange = new EventEmitter();

  contactTelEmailControl = this.formBuilder.group({
    methodRecieve: ['', Validators.required],
    phone: ['', Validators.pattern('^\\d{9}$')],
    email: ['', Validators.email]
  },
  {
      validators: this.customValidation
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  /**
   * Checks that the email or phone is filled out if the user has chosen email or phone in the previous field
   * @param formGroup Form to be validated
   * @return object with a true boolean attribute if the email or phone is required and the user has not filled it out,
   * null otherwise.
   */
  private customValidation(formGroup): any {
    /* tslint:disable:no-string-literal */
    const methodRecievedField = formGroup.controls['methodRecieve'].value;
    const phoneField = formGroup.controls['phone'].value;
    const emailField = formGroup.controls['email'].value;
    if (methodRecievedField === 'email') {
      return (emailField === '') ? { emailEmpty: true } : null;
    } else if (methodRecievedField === 'phone') {
      return (phoneField === '') ? { emailEmpty: true } : null;
    } else {
      return null;
    }
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private finalSubmit() {
    this.submittedContactTelEmail.emit();
  }

  private changeEmail() {
    this.emailContactChange.emit(this.contactTelEmailControl.get('email').value);
  }

  private changePhone() {
    this.phoneContactChange.emit(this.contactTelEmailControl.get('phone').value);
  }
}
