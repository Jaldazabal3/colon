import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { InformacioComponent } from './informacio/informacio.component';
import { ConsultesComponent } from './consultes/consultes.component';

import { AppRoutingModule } from './app-routing.module';
import { IdentificativeDataComponent } from './identificative-data/identificative-data.component';
import { MotivoComponent } from './motivo/motivo.component';
import { DifferentAddressComponent } from './different-address/different-address.component';
import {MunicipiComponent} from './municipi/municipi.component';
import { PerdudaComponent } from './perduda/perduda.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    InformacioComponent,
    ConsultesComponent,
    IdentificativeDataComponent,
    MotivoComponent,
    MunicipiComponent,
    DifferentAddressComponent,
    PerdudaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
