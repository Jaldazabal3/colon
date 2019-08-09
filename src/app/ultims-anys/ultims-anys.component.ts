import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AnyExploracioComponent } from './any-exploracio/any-exploracio.component';
import {MenorQueCincComponent} from './menor-que-cinc/menor-que-cinc.component';

@Component({
  selector: 'app-ultims-anys',
  templateUrl: './ultims-anys.component.html',
  styleUrls: ['./ultims-anys.component.css']
})
export class UltimsAnysComponent implements OnInit {


  @ViewChild(AnyExploracioComponent) formAnyExploracio: AnyExploracioComponent;
  @ViewChild(MenorQueCincComponent) formMenorQueCinc: MenorQueCincComponent;

  @Output() gonePrevious = new EventEmitter();
  @Output() submitUltimsAnys = new EventEmitter();

  tempsUltimaColono: number;
  // Seguiment programat: -1 no es mostra res, 0 no, 1 si
  seguimentProgramat: number;

  constructor() {
    this.tempsUltimaColono = 5;
    this.seguimentProgramat = 1;
  }

  ngOnInit() {
  }

  private goStepMotivo() {
    this.gonePrevious.emit();
  }

  private goChooseYear() {
    this.tempsUltimaColono = -1;
  }

  /**
   * Computes the time of the last colono and sets to the attribute, which will be used to show a template or another
   */
  private computeLastColono() {
    this.tempsUltimaColono =
      new Date().getFullYear() -
      this.formAnyExploracio.anyExploracioControl.get('anyExploracio').value;
  }

  private computeSeguimentProgramat() {
    console.log(this.formMenorQueCinc.menorQueCincControl.get('seguimentProgramat').value);
    if (this.formMenorQueCinc.menorQueCincControl.get('seguimentProgramat').value === 'true') {
      this.seguimentProgramat = 1;
    } else if (this.formMenorQueCinc.menorQueCincControl.get('seguimentProgramat').value === 'false') {
      this.seguimentProgramat = 0;
      this.submitUltimsAnys.emit();
    }
  }
}
