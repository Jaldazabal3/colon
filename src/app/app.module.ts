import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import 'w3-css/w3.css';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { InformacioComponent } from './informacio/informacio.component';
import { ConsultesComponent } from './consultes/consultes.component';

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    InformacioComponent,
    ConsultesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
