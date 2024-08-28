import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  isPasswordVisible = false;
  isNewPasswordVisible = false;
  isConfirmPasswordVisible = false;

  password: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  passwordsMatch: boolean | null = null;
  showModal = false;


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleNewPasswordVisibility() {
    this.isNewPasswordVisible = !this.isNewPasswordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  checkPasswords() {
    if (this.password && this.newPassword && this.confirmPassword) {
      this.passwordsMatch = this.newPassword === this.confirmPassword;
    } else {
      this.passwordsMatch = null;
    }
  }

  onSubmit() {
    if (this.passwordsMatch) {
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}

