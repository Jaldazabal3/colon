import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-ulcerosa-crohn',
  templateUrl: './ulcerosa-crohn.component.html',
  styleUrls: ['./ulcerosa-crohn.component.css']
})
export class UlcerosaCrohnComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedUlcerosaCrohn = new EventEmitter();
  rangeYears = [];

  ulcerosaCrohnControl = this.formBuilder.group({
    diagnosiDate: ['', Validators.required],
    centreSanitari: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
    // We initialize the range of years from 1970 to current year
    this.rangeYears = this.range(1970, new Date().getFullYear());
  }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private goFinalStep() {
    this.submittedUlcerosaCrohn.emit();
  }

  private range(start, end) {
    const length = end - start + 1;
    return Array.from({length}, (_, i) => end - i);
  }
}
