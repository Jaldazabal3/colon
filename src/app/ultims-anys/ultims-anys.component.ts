import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AnyExploracioComponent } from './any-exploracio/any-exploracio.component';

@Component({
  selector: 'app-ultims-anys',
  templateUrl: './ultims-anys.component.html',
  styleUrls: ['./ultims-anys.component.css']
})
export class UltimsAnysComponent implements OnInit {


  @ViewChild(AnyExploracioComponent) formAnyExploracio: AnyExploracioComponent;

  @Output() gonePrevious = new EventEmitter();

  tempsUltimaColono = -1;
  // Seguiment programat: -1 no es mostra res, 0 si, 1 no
  seguimentProgramat = -1;

  constructor() { }

  ngOnInit() {
  }

  private goPreviousStep() {
    this.gonePrevious.emit();
  }

  private computeLastColono() {
    this.tempsUltimaColono =
      new Date().getFullYear() -
      this.formAnyExploracio.anyExploracioControl.get('anyExploracio').value;
    console.log(this.tempsUltimaColono);
  }
}
