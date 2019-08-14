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

  ulcerosaCrohnControl = this.formBuilder.group({
    diagnosiDate: ['', Validators.required],
    centreSanitari: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private goFinalStep() {
    this.submittedUlcerosaCrohn.emit();
  }
}
