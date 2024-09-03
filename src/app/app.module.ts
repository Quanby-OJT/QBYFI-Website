import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AvailabilityLayoutComponent } from './availability-layout/availability-layout.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

import { SupportPageComponent } from './support-page/support-page.component';
import { BroadbandaccessComponent } from './broadbandaccess/broadbandaccess.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { NetworkinfastructureComponent } from './networkinfastructure/networkinfastructure.component';
import { RegulatorycomplianceComponent } from './regulatorycompliance/regulatorycompliance.component';
import { TechnologicalinnovationComponent } from './technologicalinnovation/technologicalinnovation.component';
import { DatasecurityandprivacyComponent } from './datasecurityandprivacy/datasecurityandprivacy.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderlogComponent } from './headerlog/headerlog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocationAvailabilityComponent } from './location-availability/location-availability.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,

    AvailabilityLayoutComponent,
    ContactPageComponent,
    ContactFormComponent,

    ModalComponent,
    SupportPageComponent,
    BroadbandaccessComponent,
    CustomersupportComponent,
    NetworkinfastructureComponent,
    RegulatorycomplianceComponent,
    TechnologicalinnovationComponent,
    DatasecurityandprivacyComponent,
    LoadingComponent,
    HeaderlogComponent,  
    FeedbackComponent,  
    LocationAvailabilityComponent  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule 

    FormsModule,
    ReactiveFormsModule  

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
