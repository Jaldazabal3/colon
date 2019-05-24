import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-identificative-data',
  templateUrl: './identificative-data.component.html',
  styleUrls: ['./identificative-data.component.css'],
})
export class IdentificativeDataComponent implements OnInit {

  // TODO: Only nccr or cip variable required, not both
  idDataControl = this.formBuilder.group({
    cip: [''],
    nccr: [''],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', Validators.pattern('^\\d{9}$')]
  },
    {
      validators: this.customValidation
    });

  cipImageLink = 'assets/image/tarjeta_sanitaria.jpg';
  nccrImageLink = 'For now we have a dummy text. Lorem ipsum dolor sit amet.';

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedIdData = new EventEmitter();

  ngOnInit() {
  }

  constructor(private formBuilder: FormBuilder) { }

  private submitIdData() {
    this.submittedIdData.emit();
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private customValidation(formGroup): any {
    /* tslint:disable:no-string-literal */
    const nccrField = formGroup.controls['nccr'].value;
    const cipField = formGroup.controls['cip'].value;
    return (nccrField === '' && cipField === '') ? { bothEmpty: true } : null;
  }
}
