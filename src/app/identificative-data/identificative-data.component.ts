import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-identificative-data',
  templateUrl: './identificative-data.component.html',
  styleUrls: ['./identificative-data.component.css']
})
export class IdentificativeDataComponent implements OnInit {

  idDataControl = this.formBuilder.group({
    cip: ['', Validators.required],
    nccr: ['', Validators.required],
    name: ['', Validators.required],
    surname: ['', Validators.required]
  });

  @Output() submittedIdData = new EventEmitter();

  ngOnInit() {
  }

  constructor(private formBuilder: FormBuilder) { }

  private submitIdData() {
    this.submittedIdData.emit();
  }
}
