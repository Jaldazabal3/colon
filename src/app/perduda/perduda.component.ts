import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-perduda',
  templateUrl: './perduda.component.html',
  styleUrls: ['./perduda.component.css']
})
export class PerdudaComponent implements OnInit {

  perdudaControl = this.formBuilder.group({
    mediaRecieved: ['', Validators.required],
    email: ['', Validators.email]
  })


  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit() {
  }



}
