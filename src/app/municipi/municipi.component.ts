import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, Validator } from '@angular/forms';
import { MUNICIPIS } from '../list-municipis';

@Component({
  selector: 'app-municipi',
  templateUrl: './municipi.component.html',
  styleUrls: ['./municipi.component.css']
})
export class MunicipiComponent implements OnInit {


  municipis = MUNICIPIS;

  municipiControl = this.formBuilder.group({
    municipi: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private validateMunicipi(){
    // return this.municipis.includes(this.municipiControl.get('municipi'));
  }

  private buttonClicked(){
    console.log('Municipi: ' + this.municipiControl.get('municipi'));
  }

}
