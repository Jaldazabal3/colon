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
    nombrePares: [0, Validators.required],
    agePares: [0, Validators.required],
    nombreGermans: [0, Validators.required],
    ageGermans: [0, Validators.required],
    nombreFills: [0, Validators.required],
    ageFills: [0, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private submitTipusAntecedents() {
    this.submittedTipusAntecedents.emit();
  }

}
