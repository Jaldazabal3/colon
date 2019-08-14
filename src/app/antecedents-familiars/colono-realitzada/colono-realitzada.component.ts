import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-colono-realitzada',
  templateUrl: './colono-realitzada.component.html',
  styleUrls: ['./colono-realitzada.component.css']
})
export class ColonoRealitzadaComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedColonoRealitzada = new EventEmitter();

  colonoRealitzadaControl = this.formBuilder.group({
    colonoRealitzada: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private colonoRealitzadaSubmit() {
    this.submittedColonoRealitzada.emit();
  }
}
