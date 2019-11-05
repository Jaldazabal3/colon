import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-info-exploracio',
  templateUrl: './info-exploracio.component.html',
  styleUrls: ['./info-exploracio.component.css']
})
export class InfoExploracioComponent implements OnInit {

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedInfoExplor = new EventEmitter();

  infoExploracioControl = this.formBuilder.group({
    centreSanitari: ['', Validators.required],
    motiu: ['', Validators.required],
    fileColono: [null],
    resultatColono: ['', Validators.required]
  });

  fileToUpload: File = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private goPreviousStep(){
    this.gonePrevious.emit();
  }

  private submitInfoExplor() {
    this.submittedInfoExplor.emit();
  }

  handleFileInput(files: FileList) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < files.length ;  i++) {
      this.fileToUpload = files.item(i);
    }
  }

}
