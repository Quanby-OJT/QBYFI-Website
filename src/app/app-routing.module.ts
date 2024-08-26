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
  { path: '**', redirectTo: '/landing-page' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
