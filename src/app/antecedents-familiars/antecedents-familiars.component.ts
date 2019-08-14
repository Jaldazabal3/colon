import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {PrimerGrauComponent} from './primer-grau/primer-grau.component';
import {ColonoRealitzadaComponent} from './colono-realitzada/colono-realitzada.component';
import {TipusAntecedentsComponent} from './tipus-antecedents/tipus-antecedents.component';
import {ControlsColonoscopiaComponent} from './controls-colonoscopia/controls-colonoscopia.component';

@Component({
  selector: 'app-antecedents-familiars',
  templateUrl: './antecedents-familiars.component.html',
  styleUrls: ['./antecedents-familiars.component.css']
})
export class AntecedentsFamiliarsComponent implements OnInit {

  @ViewChild(PrimerGrauComponent) formPrimerGrau: PrimerGrauComponent;
  @ViewChild(ColonoRealitzadaComponent) formColonoRealitzada: ColonoRealitzadaComponent;
  @ViewChild(TipusAntecedentsComponent) formTipusAntecedents: TipusAntecedentsComponent;
  @ViewChild(ControlsColonoscopiaComponent) formControlsColono: ControlsColonoscopiaComponent;

  @Output() gonePrevious = new EventEmitter();
  @Output() submittedAntecedentsFamiliars = new EventEmitter();
  @Output() chosenColonoRealitzada = new EventEmitter();

  // Antecedents familiars --> -1 not initialized, 0 false, 1 true
  antecedentsFamiliars: number;
  // Colono realitzada --> -1 not initialized, 0 false, 1 true
  colonoRealitzada: number;
  // Tipus antecedents --> -1 not initialized, 1 un <60 o mes d'un familiar, 0 otherwise
  tipusAntecedents: number;
  // Colono realitzada --> -1 not initialized, 0 false, 1 true
  controlsColono: number;

  constructor() {
    this.antecedentsFamiliars = -1;
    this.colonoRealitzada = -1;
    this.tipusAntecedents = -1;
    this.controlsColono = -1;
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
      this.colonoRealitzada = 0;
      this.submittedAntecedentsFamiliars.emit();
    } else if (this.formColonoRealitzada.colonoRealitzadaControl.get('colonoRealitzada').value === 'true') {
      this.colonoRealitzada = 1;
      this.chosenColonoRealitzada.emit();
    }
  }

  /**
   * Checks the number and ages of family members with colorectal cancer.
   */
  private computeTipusAntecedents() {
    const nombreFamiliars: number = this.formTipusAntecedents.tipusAntecedentsControl.get('nombrePares').value +
      this.formTipusAntecedents.tipusAntecedentsControl.get('nombreGermans').value +
      this.formTipusAntecedents.tipusAntecedentsControl.get('nombreFills').value;
    const ages: Array<number> = [
      this.formTipusAntecedents.tipusAntecedentsControl.get('agePares').value,
      this.formTipusAntecedents.tipusAntecedentsControl.get('ageGermans').value,
      this.formTipusAntecedents.tipusAntecedentsControl.get('ageFills').value
    ];
    const mesJove: number = ages.sort()[1];
    if (nombreFamiliars < 2 && mesJove >= 60) {
      this.tipusAntecedents = 0;
    } else {
      this.tipusAntecedents = 1;
    }
  }

  private goTipusAntecedents() {
    this.tipusAntecedents = -1;
  }

  private computeControlColono() {
    if (this.formControlsColono.controlColonoControl.get('controlColono').value === 'false') {
      this.colonoRealitzada = 0;
    } else if (this.formControlsColono.controlColonoControl.get('controlColono').value === 'true') {
      this.colonoRealitzada = 1;
    }
    this.submittedAntecedentsFamiliars.emit();
  }
}
