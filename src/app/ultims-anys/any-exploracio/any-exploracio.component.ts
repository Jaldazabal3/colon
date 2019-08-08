import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-any-exploracio',
  templateUrl: './any-exploracio.component.html',
  styleUrls: ['./any-exploracio.component.css']
})
export class AnyExploracioComponent implements OnInit {

  @Output() submittedAnyExploracio = new EventEmitter();
  @Output() gonePrevious = new EventEmitter();
  anyExploracioControl = this.formBuilder.group({
    anyExploracio: ['', Validators.required]
  });
  rangeYears = [];

  constructor(private formBuilder: FormBuilder) {
    // We initialize the range of years from 1990 to 2019
    this.rangeYears = this.range(1990, 2019);
  }

  ngOnInit() {
  }

  /**
   * Generates an array of numbers from start to end
   * @param start fist number of the array
   * @param end last number of the array
   */
  private range(start, end) {
    const length = end - start + 1;
    return Array.from({length}, (_, i) => start + i);
  }

  private submitAnyExploracio() {
    this.submittedAnyExploracio.emit();
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }
}
