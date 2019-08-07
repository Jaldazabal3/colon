import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-different-address',
  templateUrl: './different-address.component.html',
  styleUrls: ['./different-address.component.css']
})
export class DifferentAddressComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }
  private finalSubmit() {
    // TODO
  }
}
