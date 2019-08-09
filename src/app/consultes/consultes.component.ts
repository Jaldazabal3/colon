import { Component, OnInit, ViewChild } from '@angular/core';
import { IdentificativeDataComponent } from '../identificative-data/identificative-data.component';
import { MotivoComponent } from '../motivo/motivo.component';
import { MunicipiComponent } from '../municipi/municipi.component';
import { PerdudaComponent } from '../perduda/perduda.component';
import {UltimsAnysComponent} from '../ultims-anys/ultims-anys.component';


@Component({
  selector: 'app-consultes',
  templateUrl: './consultes.component.html',
  styleUrls: ['./consultes.component.css']
})
export class ConsultesComponent implements OnInit {


  // This allows us to access variables into subforms
  @ViewChild(MunicipiComponent) formMunicipi: MunicipiComponent;
  @ViewChild(IdentificativeDataComponent) formIdentificationData: IdentificativeDataComponent;
  @ViewChild(MotivoComponent) formMotivo: MotivoComponent;
  @ViewChild(PerdudaComponent) formPerduda: PerdudaComponent;
  @ViewChild(UltimsAnysComponent) formUltimsAnys: UltimsAnysComponent;

  userEmail = '';


  /* Form steps will be:
    0- Municipi
    1- Dades identificatives
    2- Motiu
    3- He rebut la carta a una altra adreça (requadre)
    4- No he rebut la carta (requadre)
    5- He perdut la carta || he perdut la carta del resultat
    6- Tinc realitzada una colonoscòpia als últims 5 anys || Diagnosticat amb pòlips o adenomes
    11- (LAST?) Missatge final que no permeti tornar enrere
   */

  formStep: number;

  constructor() {
    this.formStep = 6;
  }

  goToStep2() {
    this.formStep = 2;
  }

  goToStep1() {
    this.formStep = 1;
  }

  goToStep0() {
    this.formStep = 0;
  }

  goToStepMotivo() {
    this.formStep = this.formMotivo.motivoControl.get('motivos').value.step;
  }

  goFinalStep() {
    this.formStep = 11;
  }

  ngOnInit() {
  }

  /**
   * Function only for testing purposes. Checking how to access variables inside children components
   */
  logData() {
    // console.log(this.formIdentificationData.idDataControl.get('email').value);
    console.log(this.userEmail);
  }

  private setUserEmailFromID(email) {
    this.userEmail = email;
    if (this.formStep !== 5) {
      this.formPerduda.perdudaControl.get('email').setValue(email);
    }
  }

  private setUserEmailFromPerduda(email) {
    this.userEmail = email;
    if (this.formStep !== 1) {
      this.formIdentificationData.idDataControl.get('email').setValue(email);
    }
  }

  private validateData() {
    return true;
  }
}
