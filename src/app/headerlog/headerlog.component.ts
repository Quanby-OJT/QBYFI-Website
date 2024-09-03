import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-headerlog',
  templateUrl: './headerlog.component.html',
  styleUrl: './headerlog.component.css'
})
export class HeaderlogComponent {
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

  shouldShowRegister(): boolean {
    return this.router.url !== '/register';
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
    }, 500); 
  }
  onRegisterClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/register']); 
    }, 500); 
  }
  onResidentialClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/residential']); 
    }, 500); 
  }
  onProductsClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/products']); 
    }, 500); 
  }
  onContactUsClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/contact-us']); 
    }, 500); 
  }
  onSupportPageClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/support-page']); 
    }, 500); 
  }
  onLocationAvailabilityClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/location-availability']); 
    }, 500); 
  }
  onAboutUsClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/about-us']); 
    }, 500); 
  }
  onSubscribeClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/subscribe']); 
    }, 500); 
  }
  onCustomerServiceClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/customer-service']); 
    }, 500); 
  }
  onFeedbackClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/feedback']); 
    }, 500); 
  }
  onLandingPageClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/landing-page']); 
    }, 500); 
  }
}
