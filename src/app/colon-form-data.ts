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
  // fitxersColono = [];
  resultatColono: string;
  // Malaltia Crohn
  anyDiagnostic: string;
  centreDiagnostic: string;
  // Antecedents familiars
  antecedentsFamiliars: boolean;
  colonoRealitzada: boolean;
  antecedentsRisc: boolean;
  altresMotius: string;

  constructor(municipi: string, nom: string, cognoms: string, cip: string, nccr: string, email: string, phone: string, motiu: string, mediaRecieved: string, anyExploracio: string, seguimentProgramat: string, centre: string, motiuUltimaExploracio: string, resultatColono: string, anyDiagnostic: string, centreDiagnostic: string, antecedentsFamiliars: boolean, colonoRealitzada: boolean, antecedentsRisc: boolean, altresMotius: string) {
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
    this.resultatColono = resultatColono;
    this.anyDiagnostic = anyDiagnostic;
    this.centreDiagnostic = centreDiagnostic;
    this.antecedentsFamiliars = antecedentsFamiliars;
    this.colonoRealitzada = colonoRealitzada;
    this.antecedentsRisc = antecedentsRisc;
    this.altresMotius = altresMotius;
  }
}
