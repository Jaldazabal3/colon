import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-identificative-data',
  templateUrl: './identificative-data.component.html',
  styleUrls: ['./identificative-data.component.css']
})
export class IdentificativeDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  idDataControl = new FormGroup({
    age: new FormControl(''),
    town: new FormControl(''),
    cip: new FormControl(''),
    nccr: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl('')
  });

}
