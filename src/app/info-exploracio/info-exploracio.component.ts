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

  filesToUpload: File[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private goPreviousStep(){
    this.gonePrevious.emit();
  }

  private submitInfoExplor() {
    this.submittedInfoExplor.emit();
  }

  /**
   * Adds file to file array to upload
   * @param event contains the change event with the file uploaded inside
   */
  handleFileInput(event) {
    this.filesToUpload.push(event.target.files[0]);
  }

  /**
   * Removes the file passed by parameter from the file array
   * @param singleFile file to remove
   */
  removeFile(singleFile) {
    // TODO: implement method to remove the file clicked
  }

}
