import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AvailabilityLayoutComponent } from './availability-layout/availability-layout.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { BroadbandaccessComponent } from './broadbandaccess/broadbandaccess.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { NetworkinfastructureComponent } from './networkinfastructure/networkinfastructure.component';
import { RegulatorycomplianceComponent } from './regulatorycompliance/regulatorycompliance.component';
import { TechnologicalinnovationComponent } from './technologicalinnovation/technologicalinnovation.component';
import { DatasecurityandprivacyComponent } from './datasecurityandprivacy/datasecurityandprivacy.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AvailabilityLayoutComponent,
    SupportPageComponent,
    BroadbandaccessComponent,
    CustomersupportComponent,
    NetworkinfastructureComponent,
    RegulatorycomplianceComponent,
    TechnologicalinnovationComponent,
    DatasecurityandprivacyComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
