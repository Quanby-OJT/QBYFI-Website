import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase/supabase.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  attachedFiles: File[] = [];
  isModalOpen: boolean = false;
  isError: boolean = false; // Variable to track error modal visibility

  constructor(private router: Router, private supabaseService: SupabaseService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      this.attachedFiles.push(...files);
    }
  }

  viewFile(file: File) {
    const url = URL.createObjectURL(file);
    const newWindow = window.open(url);
    newWindow?.addEventListener('unload', () => URL.revokeObjectURL(url));
  }

  removeFile(index: number) {
    this.attachedFiles.splice(index, 1);
  }

  navigateToContactPage() {
    this.router.navigate(['/contact-page']);
  }

  async submitForm() {
    if (!this.name || !this.email || !this.message) {
      console.error('Please fill out all required fields.');
      return;
    }

    try {
      let imageUrl: string = ''; // Initialize imageUrl as an empty string
      if (this.attachedFiles.length > 0) {
        const file = this.attachedFiles[0]; // Assuming you want to upload only the first file
        const uploadedImageUrl = await this.supabaseService.uploadImage(file, 'qbyfi_file');
        if (uploadedImageUrl) {
          imageUrl = uploadedImageUrl; // Assign if not null
        } else {
          console.error('Image upload failed.');
          this.isError = true;
          return;
        }
      }

      const result = await this.supabaseService.insertContactUs(this.name, this.email, this.message, imageUrl);

      if (result) {
        this.isModalOpen = true; 
        this.isError = false;    
        this.resetForm();
      } else {
        this.isError = false;    
        this.isModalOpen = true; 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      this.isError = false;    
      this.isModalOpen = true; 
    }
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.attachedFiles = [];
  }

  closeModal() {
    this.isModalOpen = false;
  }

  closeErrorModal() {
    this.isError = false;
  }
}
