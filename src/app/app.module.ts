// External dependencies
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
import { HttpClientModule } from '@angular/common/http';

// Own dependencies
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { InformacioComponent } from './informacio/informacio.component';
import { ConsultesComponent } from './consultes/consultes.component';
import { AppRoutingModule } from './app-routing.module';
import { IdentificativeDataComponent } from './consultes/identificative-data/identificative-data.component';
import { MotivoComponent } from './consultes/motivo/motivo.component';
import { DifferentAddressComponent } from './consultes/different-address/different-address.component';
import { MunicipiComponent } from './consultes/municipi/municipi.component';
import { PerdudaComponent } from './consultes/perduda/perduda.component';
import { NoRebudaComponent } from './consultes/no-rebuda/no-rebuda.component';
import { UltimsAnysComponent } from './consultes/ultims-anys/ultims-anys.component';
import { AnyExploracioComponent } from './consultes/ultims-anys/any-exploracio/any-exploracio.component';
import { MenorQueCincComponent } from './consultes/ultims-anys/menor-que-cinc/menor-que-cinc.component';
import { FinalMessageComponent } from './consultes/final-message/final-message.component';
import { InfoExploracioComponent } from './consultes/ultims-anys/info-exploracio/info-exploracio.component';
import { ContactTelEmailComponent } from './consultes/shared/contact-tel-email/contact-tel-email.component';
import { UlcerosaCrohnComponent } from './consultes/ulcerosa-crohn/ulcerosa-crohn.component';
import { AntecedentsFamiliarsComponent } from './consultes/antecedents-familiars/antecedents-familiars.component';
import { PrimerGrauComponent } from './consultes/antecedents-familiars/primer-grau/primer-grau.component';
import { ColonoRealitzadaComponent } from './consultes/antecedents-familiars/colono-realitzada/colono-realitzada.component';
import { TipusAntecedentsComponent } from './consultes/antecedents-familiars/tipus-antecedents/tipus-antecedents.component';
import { ControlsColonoscopiaComponent } from './consultes/antecedents-familiars/controls-colonoscopia/controls-colonoscopia.component';
import { MotiuAltresComponent } from './consultes/motiu-altres/motiu-altres.component';

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
    PerdudaComponent,
    NoRebudaComponent,
    UltimsAnysComponent,
    AnyExploracioComponent,
    MenorQueCincComponent,
    FinalMessageComponent,
    InfoExploracioComponent,
    ContactTelEmailComponent,
    UlcerosaCrohnComponent,
    AntecedentsFamiliarsComponent,
    PrimerGrauComponent,
    ColonoRealitzadaComponent,
    TipusAntecedentsComponent,
    ControlsColonoscopiaComponent,
    MotiuAltresComponent
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
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
