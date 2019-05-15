import { Component, OnInit, ViewChild } from '@angular/core';
import { IdentificativeDataComponent } from '../identificative-data/identificative-data.component';
import { MotivoComponent } from '../motivo/motivo.component';


@Component({
  selector: 'app-consultes',
  templateUrl: './consultes.component.html',
  styleUrls: ['./consultes.component.css']
})
export class ConsultesComponent implements OnInit {

  @ViewChild(IdentificativeDataComponent) formIdentificationData: IdentificativeDataComponent;
  @ViewChild(MotivoComponent) formMotivo: MotivoComponent;

  /* Form steps will be:
    0- Municipi
    1- Dades identificatives
    2- Motiu
    3- Missatge actualitzar dades
    4- Missatge edat + comprovar dades
    5- Com desitja rebre la carta (Motiu 3 i 4)
    6- Any exploracio
    7- Missatge vagi a la farmacia amb la carta
    8- Formulari dades colono
    9- Formulari Rebre resposta del programa
   */

  formStep: number;



  constructor() {
    this.formStep = 0;
  }

  goToStep2() {
    this.formStep = 2;
  }

  goToStep1(){
    this.formStep = 1;
  }

  ngOnInit() {
  }

}
