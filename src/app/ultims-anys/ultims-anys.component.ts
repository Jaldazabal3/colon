import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AnyExploracioComponent } from './any-exploracio/any-exploracio.component';
import {MenorQueCincComponent} from './menor-que-cinc/menor-que-cinc.component';
import {InfoExploracioComponent} from '../info-exploracio/info-exploracio.component';
import {ContactTelEmailComponent} from '../contact-tel-email/contact-tel-email.component';

@Component({
  selector: 'app-ultims-anys',
  templateUrl: './ultims-anys.component.html',
  styleUrls: ['./ultims-anys.component.css']
})
export class UltimsAnysComponent implements OnInit {

  @ViewChild(AnyExploracioComponent) formAnyExploracio: AnyExploracioComponent;
  @ViewChild(MenorQueCincComponent) formMenorQueCinc: MenorQueCincComponent;
  @ViewChild(InfoExploracioComponent) formInfoExplor: InfoExploracioComponent;
  @ViewChild(ContactTelEmailComponent) formContactTelEmail: ContactTelEmailComponent;

  @Output() gonePrevious = new EventEmitter();
  @Output() submitUltimsAnys = new EventEmitter();
  @Output() emailContactChange = new EventEmitter();
  @Output() phoneContactChange = new EventEmitter();

  tempsUltimaColono: number;
  seguimentProgramat: number;
  // Seguiment programat: -1 no es mostra res, 0 no, 1 pas info exploracio, 2 form tel/email

  constructor() {
    this.tempsUltimaColono = -1;
    this.seguimentProgramat = -1;
  }

  ngOnInit() {
  }

  private goStepMotivo() {
    this.gonePrevious.emit();
  }

  private goChooseYear() {
    this.tempsUltimaColono = -1;
  }

  private goSeguimentProgramat() {
    this.seguimentProgramat = -1;
  }

  /**
   * Computes the time of the last colono and sets to the attribute, which will be used to show a template or another
   */
  private computeLastColono() {
    this.tempsUltimaColono =
      new Date().getFullYear() -
      this.formAnyExploracio.anyExploracioControl.get('anyExploracio').value;
    if (this.tempsUltimaColono >= 5) {
      this.submitUltimsAnys.emit();
    }
  }

  private computeSeguimentProgramat() {
    if (this.formMenorQueCinc.menorQueCincControl.get('seguimentProgramat').value === 'true') {
      this.seguimentProgramat = 1;
    } else if (this.formMenorQueCinc.menorQueCincControl.get('seguimentProgramat').value === 'false') {
      this.seguimentProgramat = 0;
      this.submitUltimsAnys.emit();
    }
  }

  private goContactTelEmail() {
    this.seguimentProgramat = 2;
  }

  private goInfoExplor() {
    this.seguimentProgramat = 1;
  }
}
