import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacioComponent } from "./informacio/informacio.component";
import { ConsultesComponent } from "./consultes/consultes.component";

const routes: Routes = [
  // { path: '', redirectTo: '/informacio', pathMatch: 'full' },
  { path: '', redirectTo: '/informacio', pathMatch: 'full' },
  { path: 'informacio', component: InformacioComponent },
  { path: 'consultes', component: ConsultesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }