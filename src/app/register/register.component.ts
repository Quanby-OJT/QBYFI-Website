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
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
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
          console.log('Passwords do not match'); // Debugging log
          this.showModal('Passwords do not match', 'error');
          return;
        }
        
        // Check if the subscription number is valid
        const subscriptionExists = await this.supabaseService.getSubscriptionDetails(formData.subnum);
        if (!subscriptionExists || subscriptionExists.length === 0) {
          this.showModal('Invalid Subscription Number', 'blue');
          return;
        }
  
        // Check if the subscription number already exists in accounts
        const accountExists = await this.supabaseService.checkSubscriptionInAccounts(formData.subnum);
        if (accountExists) {
          this.showModal('Subscription Number already exists', 'blue');
          return;
        }
  
        const hashedPassword = await bcrypt.hash(formData.password, 10);
        formData.password = hashedPassword;
  
        delete formData.confirmPassword;
  
        await this.supabaseService.saveAccountData(formData);
        this.showModal('Registration successful!', 'success');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      } catch (error) {
        console.error('Error saving data:', error);
        this.showModal(`Error saving data: ${(error as Error).message}`, 'error');
      }
    } else {
      this.showModal('Please fill out the form correctly', 'error');
    }
  }
  
  showModal(message: string, type: 'success' | 'error' | 'blue' | 'red') {
    this.modalMessage = message;
    this.isModalVisible = true;

    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      this.showModal('Passwords do not match', 'error');
      return;
    }

    setTimeout(() => {
      const modalMessageElement = document.querySelector('.modal-message');
      if (modalMessageElement) {
        modalMessageElement.classList.remove('text-success', 'text-error', 'text-blue', 'text-red');
        if (type === 'success') {
          modalMessageElement.classList.add('text-success');
        } else if (type === 'error') {
          modalMessageElement.classList.add('text-error');
        } else if (type === 'blue') {
          modalMessageElement.classList.add('text-blue');
        } else if (type === 'red') {
          modalMessageElement.classList.add('text-red');
        }
      }
    }, 0);
  }
  
  
  hideModal() {
    this.isModalVisible = false;
  }

}