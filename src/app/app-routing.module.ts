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
import { AvailabilityStep1Component } from './availability-step1/availability-step1.component';
import { AvailabilityStep2Component } from './availability-step2/availability-step2.component';
import { AvailabilityStep3Component } from './availability-step3/availability-step3.component';
import { AvailabilityStep4Component } from './availability-step4/availability-step4.component';
import { AvailabilityStep5Component } from './availability-step5/availability-step5.component';
import { AvailabilityStep1Page2Component } from './availability-step1-page2/availability-step1-page2.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'support-page', component: SupportPageComponent },
  { path: 'networkinfastructure', component: NetworkinfastructureComponent},
  { path: 'datasecurityandprivacy', component: DatasecurityandprivacyComponent},
  { path: 'technologicalinnovation', component: TechnologicalinnovationComponent},
  { path: 'broadbandaccess', component: BroadbandaccessComponent},
  { path: 'regulatorycompliance', component: RegulatorycomplianceComponent},
  { path: 'customersupport', component: CustomersupportComponent},
  { path: 'loading', component: LoadingComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'location-availability', component: LocationAvailabilityComponent},
  { path: 'availability-step1', component: AvailabilityStep1Component },
  { path: 'availability-step2', component: AvailabilityStep2Component},
  { path: 'availability-step3', component: AvailabilityStep3Component},
  { path: 'availability-step4', component: AvailabilityStep4Component},
  { path: 'availability-step5', component: AvailabilityStep5Component},
  { path: 'availability-step1-page2', component: AvailabilityStep1Page2Component},

  // Define routes for other components 
  { path: '**', redirectTo: '/landing-page' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
