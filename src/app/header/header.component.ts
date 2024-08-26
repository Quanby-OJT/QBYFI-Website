import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isLoginPage = false;
  isLoading = false;


  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    this.menuService.isMenuOpen$.subscribe(isOpen => this.isMenuOpen = isOpen);
    this.router.events.subscribe(() => this.checkIfLoginPage());
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  shouldShowSignIn(): boolean {
    return this.router.url !== '/login';
  }

  shouldShowLandingPage(): boolean {
    return this.router.url !== '/landing-page';
  }

  private checkIfLoginPage() {
    this.isLoginPage = this.router.url === '/login';
  }

  onLoginClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/login']); 
    }, 2000); 
  }
  onRegisterClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/register']); 
    }, 2000); 
  }
  onResidentialClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/residential']); 
    }, 2000); 
  }
  onProductsClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/products']); 
    }, 2000); 
  }
  onContactUsClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/contact-us']); 
    }, 2000); 
  }
  onSupportPageClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/support-page']); 
    }, 2000); 
  }
  onLocationAvailabilityClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/location-availability']); 
    }, 2000); 
  }
  onAboutUsClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/about-us']); 
    }, 2000); 
  }
  onSubscribeClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/subscribe']); 
    }, 2000); 
  }
  onCustomerServiceClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/customer-service']); 
    }, 2000); 
  }
  onFeedbackClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/feedback']); 
    }, 2000); 
  }
  onLandingPageClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/landing-page']); 
    }, 2000); 
  }
}

