import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { AvailabilityStep1Component } from './availability-step1/availability-step1.component';
import { AvailabilityStep2Component } from './availability-step2/availability-step2.component';
import { AvailabilityStep3Component } from './availability-step3/availability-step3.component';
import { AvailabilityStep4Component } from './availability-step4/availability-step4.component';
import { AvailabilityStep5Component } from './availability-step5/availability-step5.component';
import { CookiesandprivacyComponent } from './cookiesandprivacy/cookiesandprivacy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PersonalinfoFormComponent } from './personalinfo-form/personalinfo-form.component';
import { BasicinfoFormComponent } from './basicinfo-form/basicinfo-form.component';
import { PlansFormComponent } from './plans-form/plans-form.component';
import { AvailabilityStep1Page2Component } from './availability-step1-page2/availability-step1-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
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
    LocationAvailabilityComponent,
    AvailabilityStep1Component,
    AvailabilityStep2Component,
    AvailabilityStep3Component,
    AvailabilityStep4Component,
    AvailabilityStep5Component,
    CookiesandprivacyComponent,
    TermsandconditionsComponent,
    PersonalinfoFormComponent,
    BasicinfoFormComponent,
    PlansFormComponent,
    AvailabilityStep1Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
