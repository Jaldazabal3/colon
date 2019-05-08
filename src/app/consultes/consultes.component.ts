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

  formStep: number;

  

  constructor() { 
    this.formStep=1;
  }

  goToStep2() {
    this.formStep=2;
  }

  goToStep1(){
    this.formStep=1;
  }

  ngOnInit() {
  }

}