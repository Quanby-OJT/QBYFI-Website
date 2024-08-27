import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  attachedFiles: File[] = [];
  isModalOpen = false;

  constructor(private router: Router) {}

  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      this.attachedFiles.push(...files); 
    }
  }


  openModal() {
    this.isModalOpen = true;
  }


  closeModal() {
    this.isModalOpen = false;
  }


  viewFile(file: File) {
    const url = URL.createObjectURL(file);
    window.open(url);
  }

  navigateToHeaderContact() {
    this.router.navigate(['/headercontact']);
  }
}
