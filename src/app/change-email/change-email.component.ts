import { Component } from '@angular/core';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent {
  isPasswordVisible: boolean = false;
  isModalOpen: boolean = false;
  newEmail: string = '';

 
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

 
  openConfirmationModal(): void {
    this.isModalOpen = true;
  }


  closeConfirmationModal(): void {
    this.isModalOpen = false;
  }


  confirmChange(): void {

    console.log('Email change confirmed:', this.newEmail);
    this.closeConfirmationModal(); 
  }
}
