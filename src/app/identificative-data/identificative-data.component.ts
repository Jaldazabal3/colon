import { Component, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-identificative-data',
  templateUrl: './identificative-data.component.html',
  styleUrls: ['./identificative-data.component.css']
})
export class IdentificativeDataComponent implements OnInit {

  @Output() submittedIdData = new EventEmitter();

  ngOnInit() {
  }

  idDataControl = this.formBuilder.group({
    town: ['',Validators.required],
    cip: ['', Validators.required],
    nccr: ['', Validators.required],
    name: ['',Validators.required],
    surname: ['',Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  private submitIdData() {
    this.submittedIdData.emit();
  }

}
