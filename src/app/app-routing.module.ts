import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { NetworkinfastructureComponent } from './networkinfastructure/networkinfastructure.component';
import { DatasecurityandprivacyComponent } from './datasecurityandprivacy/datasecurityandprivacy.component';
import { TechnologicalinnovationComponent } from './technologicalinnovation/technologicalinnovation.component';
import { BroadbandaccessComponent } from './broadbandaccess/broadbandaccess.component';
import { RegulatorycomplianceComponent } from './regulatorycompliance/regulatorycompliance.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { LoadingComponent } from './loading/loading.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocationAvailabilityComponent } from './location-availability/location-availability.component';
import { ProfileSComponent } from './profile/profile.component';
import { ChangeEmailComponent } from './change-email/change-email.component'
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressManagementComponent } from './address-management/address-management.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'support-page', component: SupportPageComponent },
  { path: 'networkinfastructure', component: NetworkinfastructureComponent},
  { path: 'datasecurityandprivacy', component: DatasecurityandprivacyComponent},
  {path: 'technologicalinnovation', component: TechnologicalinnovationComponent},
  {path: 'broadbandaccess', component: BroadbandaccessComponent},
  {path: 'regulatorycompliance', component: RegulatorycomplianceComponent},
  {path: 'customersupport', component: CustomersupportComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'location-availability', component: LocationAvailabilityComponent},
  {path: 'profile', component: ProfileSComponent},
  {path: 'change-email', component: ChangeEmailComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'address-book', component: AddressBookComponent},
  {path: 'address-management', component: AddressManagementComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'profile-settings', component: ProfileSettingsComponent},
  // Define routes for other components 
  { path: '**', redirectTo: '/landing-page' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
