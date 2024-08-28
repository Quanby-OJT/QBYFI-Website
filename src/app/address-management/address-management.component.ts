import { Component } from '@angular/core';

@Component({
  selector: 'app-address-management',
  templateUrl: './address-management.component.html',
  styleUrls: ['./address-management.component.css']
})
export class AddressManagementComponent {
  showModal = false; 

  validateZipCode(event: any): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    input.value = value.replace(/[^0-9]/g, '');
  }

  saveAddress(): void {
    
  
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
