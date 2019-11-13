import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {Validators, FormBuilder, FormArray} from '@angular/forms';
import { MUNICIPIS } from './list-municipis';

@Component({
  selector: 'app-municipi',
  templateUrl: './municipi.component.html',
  styleUrls: ['./municipi.component.css']
})
export class MunicipiComponent implements OnInit {


  municipis = MUNICIPIS;

  // Formbuilder
  municipiControl = this.formBuilder.group({
    municipi: [ undefined, Validators.required]
  });

  @Output() submittedMunicipi = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }


  private submitMunicipi(){
    this.submittedMunicipi.emit();
  }


}
