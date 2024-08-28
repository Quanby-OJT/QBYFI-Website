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
import { ProfileSComponent } from './profile/profile.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ModalPassComponent } from './modalpass/modalpass.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressManagementComponent } from './address-management/address-management.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

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
    ProfileSComponent,
    SuccessModalComponent,
    ChangeEmailComponent,
    ChangePasswordComponent,
    ModalPassComponent,
    AddressBookComponent,
    AddressManagementComponent,
    InboxComponent,
    ProfileSettingsComponent
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
