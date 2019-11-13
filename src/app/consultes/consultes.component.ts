import { Component, OnInit, ViewChild } from '@angular/core';
import { IdentificativeDataComponent } from './identificative-data/identificative-data.component';
import { MotivoComponent } from './motivo/motivo.component';
import { MunicipiComponent } from './municipi/municipi.component';
import { PerdudaComponent } from './perduda/perduda.component';
import {UltimsAnysComponent} from './ultims-anys/ultims-anys.component';
import {AntecedentsFamiliarsComponent} from './antecedents-familiars/antecedents-familiars.component';
import {FormPostService} from '../form-post.service';
import {UlcerosaCrohnComponent} from './ulcerosa-crohn/ulcerosa-crohn.component';
import {MotiuAltresComponent} from './motiu-altres/motiu-altres.component';

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
  @ViewChild(UlcerosaCrohnComponent) formUlcerosaCrohn: UlcerosaCrohnComponent;
  @ViewChild(AntecedentsFamiliarsComponent) formAntecedents: AntecedentsFamiliarsComponent;
  @ViewChild(MotiuAltresComponent) formAltresMotius: MotiuAltresComponent;

  userEmail = '';
  userPhone = '';


  /** Form steps will be:
   * 0- Municipi
   * 1- Dades identificatives
   * 2- Motiu
   * 3- He rebut la carta a una altra adreça (requadre)
   * 4- No he rebut la carta (requadre)
   * 5- He perdut la carta || he perdut la carta del resultat
   * 6- Tinc realitzada una colonoscòpia als últims 5 anys || Diagnosticat amb pòlips o adenomes
   * 7- Diagnosticat de colitis ulcerosa o malaltia de Crohn | Diagnosticat de càncer de còlon i/o recte | Estic diagnosticat de Poliposi
   * 8- Tinc antecedents familiars de càncer de còlon i/o recte
   * 9- Altres
   * 10- (LAST?) Missatge final que no permeti tornar enrere
   */

  formStep: number;

  constructor(private sendFormService: FormPostService) {
    this.formStep = 0;
  }

  goToStep2() {
    this.formStep = 2;
  }

  goToStep1() {
    this.formIdentificationData.idDataControl.get('email').setValue(this.userEmail);
    this.formIdentificationData.idDataControl.get('phone').setValue(this.userPhone);
    this.formStep = 1;
  }

  goToStep0() {
    this.formStep = 0;
  }

  goToStep6() {
    this.formMotivo.motivoControl.get('motivos').setValue(this.formMotivo.motivos[4]);
    this.goToStepMotivo();
  }

  goToStepMotivo() {
    this.formStep = this.formMotivo.motivoControl.get('motivos').value.step;
    // console.log(this.formStep);
    if (this.formStep === 5) {
      this.formPerduda.perdudaControl.get('email').setValue(this.userEmail);
    } else if (this.formStep === 6) {
      this.formUltimsAnys.formContactTelEmail.contactTelEmailControl.get('email').setValue(this.userEmail);
      this.formUltimsAnys.formContactTelEmail.contactTelEmailControl.get('phone').setValue(this.userPhone);
    } else if (this.formStep === 8) {
      this.formAntecedents.initializeVariables();
    }
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
    // console.log(this.userEmail);
  }

  private setUserEmailFromID(email) {
    this.userEmail = email;
  }

  private setUserEmailFromPerduda(email) {
    this.userEmail = email;
  }

  private setUserEmailFromContact(email) {
    this.userEmail = email;
  }

  private setUserPhoneFromID(phone) {
    this.userPhone = phone;
  }

  private setUserPhoneFromContact(phone) {
    this.userPhone = phone;
  }

  private submitData() {
    // TODO: Upload possible attached files
    for (let informeColono of this.formUltimsAnys.formInfoExplor.filesToUpload) {

    }

    // Calling form service to send the form data entered by the user to the server.
    this.sendFormService.sendForm(
      this.formMunicipi,
      this.formIdentificationData,
      this.formMotivo,
      this.formPerduda,
      this.formUltimsAnys,
      this.formUlcerosaCrohn,
      this.formAntecedents,
      this.formAltresMotius,
      this.userEmail,
      this.userPhone
    );
    // TODO: handle response from server and perform the desired action
    return true;
  }
}
