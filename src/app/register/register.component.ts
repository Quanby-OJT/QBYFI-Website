import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from '../supabase/supabase.service';
import { MenuService } from '../menu.service';
import * as bcrypt from 'bcryptjs'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  passwordFieldType: string = 'password';
  isMenuOpen = false;
  isModalVisible = false;
  modalMessage = '';

  constructor(
    private menuService: MenuService, 
    private supabaseService: SupabaseService, 
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      subnum: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  ngOnInit() {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  async onSubmit() {
    if (this.signupForm.valid) {
      try {
        const formData = {
          firstName: this.signupForm.get('firstName')?.value,
          middleName: this.signupForm.get('middleName')?.value,
          lastName: this.signupForm.get('lastName')?.value,
          subnum: this.signupForm.get('subnum')?.value,
          email: this.signupForm.get('email')?.value,
          password: this.signupForm.get('password')?.value,
          confirmPassword: this.signupForm.get('confirmPassword')?.value
        };
  
        if (formData.password !== formData.confirmPassword) {
          this.showModal('Passwords do not match');
          return;
        }
  
        const hashedPassword = await bcrypt.hash(formData.password, 10);
        formData.password = hashedPassword;
  
        delete formData.confirmPassword;
  
        await this.supabaseService.saveAccountData(formData);
        this.showModal('Registration successful!');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      } catch (error) {
        console.error('Error saving data:', error);
        this.showModal(`Error saving data: ${(error as Error).message}`);
      }
    } else {
      this.showModal('Please fill out the form correctly');
    }
  }

  showModal(message: string) {
    this.modalMessage = message;
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }
}