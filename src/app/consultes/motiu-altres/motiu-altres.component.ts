import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ContactTelEmailComponent} from '../shared/contact-tel-email/contact-tel-email.component';

@Component({
  selector: 'app-motiu-altres',
  templateUrl: './motiu-altres.component.html',
  styleUrls: ['./motiu-altres.component.css']
})
export class MotiuAltresComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedAltres = new EventEmitter();
  @Output() emailContactChange = new EventEmitter();
  @Output() phoneContactChange = new EventEmitter();

  @ViewChild(ContactTelEmailComponent) formContactTelEmail: ContactTelEmailComponent;

  altresControl = this.formBuilder.group({
    motiuText: ['', Validators.required]
  });

  altresStep: number;

  constructor(private formBuilder: FormBuilder) {
    this.altresStep = 0;
  }

  ngOnInit() {
  }

  private submitMotiuAltres() {
    this.altresStep = 1;
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private goStepTextarea() {
    this.altresStep = 0;
  }
}
