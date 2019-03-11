import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-consultes',
  templateUrl: './consultes.component.html',
  styleUrls: ['./consultes.component.css']
})
export class ConsultesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  consultesControl = new FormGroup({
    age: new FormControl(''),
    town: new FormControl(''),
    cip: new FormControl(''),
    nccr: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl('')
  });

}