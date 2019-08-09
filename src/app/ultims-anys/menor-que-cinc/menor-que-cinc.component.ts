import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menor-que-cinc',
  templateUrl: './menor-que-cinc.component.html',
  styleUrls: ['./menor-que-cinc.component.css']
})
export class MenorQueCincComponent implements OnInit {


  @Output() gonePrevious = new EventEmitter();
  @Output() submittedMenorCinc = new EventEmitter();

  menorQueCincControl = this.formBuilder.group({
    seguimentProgramat: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private seguimentSubmit() {
    this.submittedMenorCinc.emit();
  }
  private goPreviousStep() {
    this.gonePrevious.emit();
  }
}
