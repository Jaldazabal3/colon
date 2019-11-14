export class ColonFormData {
  municipi: string;
  nom: string;
  cognoms: string;
  cip: string;
  nccr: string;
  email: string;
  phone: string;
  motiu: string;
  // Carta perduda
  mediaRecieved: string;
  // Ultims 5 anys | Polips adenomes
  anyExploracio: string;
  seguimentProgramat: string;
  centre: string;
  motiuUltimaExploracio: string;
  fitxersColono = [];
  resultatColono: string;
  methodRecieve: string;
  // Malaltia Crohn
  anyDiagnostic: string;
  centreDiagnostic: string;
  // Antecedents familiars
  antecedentsFamiliars: string;
  colonoRealitzada: string;
  antecedentsRisc: string;
  controlsColono: string;
  altresMotius: string;

  constructor() { }

  setAll(municipi: string, nom: string, cognoms: string, cip: string, nccr: string, email: string, phone: string, motiu: string, mediaRecieved: string, anyExploracio: string, seguimentProgramat: string, centre: string, motiuUltimaExploracio: string, fitxersColono, resultatColono: string, methodRecieve:string, anyDiagnostic: string, centreDiagnostic: string, antecedentsFamiliars: string, colonoRealitzada: string, antecedentsRisc: string, controlsColono: string, altresMotius: string) {
    this.municipi = municipi;
    this.nom = nom;
    this.cognoms = cognoms;
    this.cip = cip;
    this.nccr = nccr;
    this.email = email;
    this.phone = phone;
    this.motiu = motiu;
    this.mediaRecieved = mediaRecieved;
    this.anyExploracio = anyExploracio;
    this.seguimentProgramat = seguimentProgramat;
    this.centre = centre;
    this.motiuUltimaExploracio = motiuUltimaExploracio;
    this.fitxersColono = fitxersColono;
    this.resultatColono = resultatColono;
    this.methodRecieve = methodRecieve;
    this.anyDiagnostic = anyDiagnostic;
    this.centreDiagnostic = centreDiagnostic;
    this.antecedentsFamiliars = antecedentsFamiliars;
    this.colonoRealitzada = colonoRealitzada;
    this.antecedentsRisc = antecedentsRisc;
    this.controlsColono = controlsColono;
    this.altresMotius = altresMotius;
  }

  setForm(formMunicipi, formIdentificationData, formMotivo, formPerduda, formUltimsAnys,formUlcerosaCrohn, formAntecedents,
          formAltresMotius, userEmail, userPhone) {
    this.municipi = formMunicipi.municipiControl.get('municipi').value;
    this.nom = formIdentificationData.idDataControl.get('name').value;
    this.cognoms = formIdentificationData.idDataControl.get('surname').value;
    this.cip = formIdentificationData.idDataControl.get('cip').value;
    this.nccr = formIdentificationData.idDataControl.get('nccr').value;
    this.email = userEmail;
    this.phone = userPhone;
    this.motiu = formMotivo.motivoControl.get('motivos').value.text;
    this.mediaRecieved = formPerduda.perdudaControl.get('mediaRecieved').value;
    this.anyExploracio = formUltimsAnys.formAnyExploracio.anyExploracioControl.get('anyExploracio').value;
    this.seguimentProgramat = formUltimsAnys.formMenorQueCinc.menorQueCincControl.get('seguimentProgramat').value;
    this.centre = formUltimsAnys.formInfoExplor.infoExploracioControl.get('centreSanitari').value;
    this.motiuUltimaExploracio = formUltimsAnys.formInfoExplor.infoExploracioControl.get('motiu').value;
    this.fitxersColono = formUltimsAnys.formInfoExplor.infoExploracioControl.get('filesColono').value;
    this.resultatColono = formUltimsAnys.formInfoExplor.infoExploracioControl.get('resultatColono').value;
    this.methodRecieve = formUltimsAnys.formContactTelEmail.contactTelEmailControl.get('methodRecieve').value;
    this.anyDiagnostic = formUlcerosaCrohn.ulcerosaCrohnControl.get('diagnosiDate').value;
    this.centreDiagnostic = formUlcerosaCrohn.ulcerosaCrohnControl.get('centreSanitari').value;
    this.antecedentsFamiliars = formAntecedents.antecedentsFamiliars;
    this.colonoRealitzada = formAntecedents.colonoRealitzada;
    this.antecedentsRisc = formAntecedents.tipusAntecedents;
    this.controlsColono = formAntecedents.controlsColono;
    this.altresMotius = formAltresMotius.altresControl.get('motiuText').value;
  }
}
