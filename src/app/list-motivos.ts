import { Motivo } from './motivo';

export const MOTIVOS: Motivo[] = [
  { id: 1, text: 'He rebut la carta a una altra adreça', step: 3},
  { id: 2, text: 'No he rebut la carta', step: 4 },
  { id: 3, text: 'He perdut la carta', step: 5 },
  { id: 4, text: 'He perdut la carta del resultat', step: 5 },
  { id: 5, text: 'Tinc realitzada una colonòscopia els últims 5 anys', step: 6 },
  { id: 6, text: 'Estic diagnosticat de pòlips o adenomes', step: 6 },
  { id: 7, text: 'Estic diagosticat de colitis ulcerosa o malaltia de Crohn', step: 7 },
  { id: 8, text: 'Estic diagnosticat de càncer de còlon i/o recte', step: 7 },
  { id: 9, text: 'Tinc antecedents familiars de càncer de còlon i/o recte', step: 8 },
  { id: 10, text: 'Estic diagnosticat de Poliposi', step: 7 },
  { id: 11, text: 'Altres', step: 9 }
];
