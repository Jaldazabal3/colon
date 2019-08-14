import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-controls-colonoscopia',
  templateUrl: './controls-colonoscopia.component.html',
  styleUrls: ['./controls-colonoscopia.component.css']
})
export class ControlsColonoscopiaComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedControlColono = new EventEmitter();

  controlColonoControl = this.formBuilder.group({
    controlColono: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private controlColonoSubmit() {
    this.submittedControlColono.emit();
  }
}
