import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacioComponent } from './informacio/informacio.component';
import { ConsultesComponent } from './consultes/consultes.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: InformacioComponent },
  { path: 'consultes', component: ConsultesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
