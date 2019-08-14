import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PrimerGrauComponent} from './primer-grau/primer-grau.component';
import {ColonoRealitzadaComponent} from './colono-realitzada/colono-realitzada.component';

@Component({
  selector: 'app-antecedents-familiars',
  templateUrl: './antecedents-familiars.component.html',
  styleUrls: ['./antecedents-familiars.component.css']
})
export class AntecedentsFamiliarsComponent implements OnInit {

  @ViewChild(PrimerGrauComponent) formPrimerGrau: PrimerGrauComponent;
  @ViewChild(ColonoRealitzadaComponent) formColonoRealitzada: ColonoRealitzadaComponent;

  @Output() gonePrevious = new EventEmitter();

  // Antecedents familiars --> -1 not initialized, 0 false, 1 true
  antecedentsFamiliars: number;
  // Colono realitzada --> -1 not initialized, 0 false, 1 true
  colonoRealitzada: number;
  // Tipus antecedents --> -1 not initialized, 1 un <60 o mes d'un familiar, 0 otherwise
  tipusAntecedents: number;

  constructor() {
    this.antecedentsFamiliars = -1;
    this.colonoRealitzada = -1;
    this.tipusAntecedents = -1;
  }

  ngOnInit() {
  }

  private goStepMotivo() {
    this.gonePrevious.emit();
  }

  private computePrimerGrau() {
    if (this.formPrimerGrau.primerGrauControl.get('primerGrau').value === 'true') {
      this.antecedentsFamiliars = 1;
    } else if (this.formPrimerGrau.primerGrauControl.get('primerGrau').value === 'false') {
      this.antecedentsFamiliars = 0;
    }
  }

  private goPrimerGrau() {
    this.antecedentsFamiliars = -1;
  }

  private computeColonoRealitzada() {
    if (this.formColonoRealitzada.colonoRealitzadaControl.get('colonoRealitzada').value === 'false') {

    }
  }
}
