import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MOTIVOS } from './list-motivos';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',
  styleUrls: ['./motivo.component.css']
})
export class MotivoComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedMotivo = new EventEmitter();

  motivos = MOTIVOS;

  motivoControl = this.formBuilder.group({
    motivos: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private submitMotivo() {
    this.submittedMotivo.emit();
  }
}
