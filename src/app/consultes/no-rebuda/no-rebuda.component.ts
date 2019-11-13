import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-rebuda',
  templateUrl: './no-rebuda.component.html',
  styleUrls: ['./no-rebuda.component.css']
})
export class NoRebudaComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

}
