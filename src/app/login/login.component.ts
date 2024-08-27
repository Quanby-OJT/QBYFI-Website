import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { SupabaseService } from '../supabase/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordFieldType: string = 'password';
  isMenuOpen = false;
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  
  constructor(private menuService: MenuService, private supabaseService: SupabaseService, private router: Router) {}

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  async onSubmit() {
    try {
      const { success, message } = await this.supabaseService.login(this.email, this.password);
      if (success) {
        localStorage.setItem('user', JSON.stringify({ email: this.email }));
        this.router.navigate(['/logged-in']);
      } else {
        this.errorMessage = message;
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error('Login failed:', errorMessage);
    }
  }
  
  closeError() {
    this.errorMessage = null;
  }

  ngOnInit() {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }
}