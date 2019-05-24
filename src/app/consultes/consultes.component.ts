import { Component, OnInit, ViewChild } from '@angular/core';
import { IdentificativeDataComponent } from '../identificative-data/identificative-data.component';
import { MotivoComponent } from '../motivo/motivo.component';
import {MunicipiComponent} from '../municipi/municipi.component';


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


  /* Form steps will be:
    0- Municipi
    1- Dades identificatives
    2- Motiu
    3- He rebut la carta a una altra adreça (requadre)
    4- No he rebut la carta (requadre)
    5- He perdut la carta (com rebre el duplicat)
   */

  formStep: number;

  constructor() {
    this.formStep = 0;
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

  ngOnInit() {
  }

  /**
   * Function only for testing purposes. Checking how to access variables inside children components
   */
  logData() {
    console.log(this.formIdentificationData.idDataControl.get('nccr').value);
  }
}
