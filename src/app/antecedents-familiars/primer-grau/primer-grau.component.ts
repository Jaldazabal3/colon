import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-primer-grau',
  templateUrl: './primer-grau.component.html',
  styleUrls: ['./primer-grau.component.css']
})
export class PrimerGrauComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedPrimerGrau = new EventEmitter();

  primerGrauControl = this.formBuilder.group({
    primerGrau: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private primerGrauSubmit() {
    this.submittedPrimerGrau.emit();
  }
  private goPreviousStep() {
    this.gonePrevious.emit();
  }

}
