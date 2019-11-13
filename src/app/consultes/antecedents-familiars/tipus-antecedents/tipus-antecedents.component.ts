import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-tipus-antecedents',
  templateUrl: './tipus-antecedents.component.html',
  styleUrls: ['./tipus-antecedents.component.css']
})
export class TipusAntecedentsComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedTipusAntecedents = new EventEmitter();

  tipusAntecedentsControl = this.formBuilder.group({
    nombrePares: [0, [Validators.required, Validators.min(0)]],
    agePares: [0, Validators.min(0)],
    nombreGermans: [0, [Validators.required, Validators.min(0)]],
    ageGermans: [0, Validators.min(0)],
    nombreFills: [0, [Validators.required, Validators.min(0)]],
    ageFills: [0, Validators.min(0)]
  }, {
    validators: this.customValidation
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  /**
   * Checks whether an age is filled if the user has filled out one of the first rows of the inputs inside the table.
   * @param formGroup Form to be validated
   * @return true if the form is filled incorrectly, null otherwise
   */
  private customValidation(formGroup): any {
    /* tslint:disable:no-string-literal */
    const nombreParesField = formGroup.controls['nombrePares'].value;
    const nombreGermansField = formGroup.controls['nombreGermans'].value;
    const nombreFillsField = formGroup.controls['nombreFills'].value;
    const ageParesField = formGroup.controls['agePares'].value;
    const ageGermansField = formGroup.controls['ageGermans'].value;
    const ageFillsField = formGroup.controls['ageFills'].value;
    if (nombreParesField > 0) {
      return (!(ageParesField > 0) ) ? { invalidAge: true } : null;
    } else if (nombreGermansField > 0) {
      return (!(ageGermansField > 0) ) ? { invalidAge: true } : null;
    } else if (nombreFillsField > 0) {
      return (!(ageFillsField > 0) ) ? { invalidAge: true } : null;
    } else {
      return null;
    }
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private submitTipusAntecedents() {
    this.submittedTipusAntecedents.emit();
  }

}
