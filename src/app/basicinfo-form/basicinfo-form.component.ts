import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { SupabaseService } from '../supabase/supabase.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid'; // Import uuid function

@Component({
  selector: 'app-basicinfo-form',
  templateUrl: './basicinfo-form.component.html',
  styleUrls: ['./basicinfo-form.component.css']
})
export class BasicinfoFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private supabaseService: SupabaseService, private router: Router) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Ensure only numbers
      email: ['', [Validators.required, Validators.email]],
      consent: [false, Validators.requiredTrue],
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const { firstName, lastName, mobileNumber, email, consent } = this.form.value;
      const uniqueId = uuidv4(); // Generate a unique UUID
      
      const result = await this.supabaseService.submitBasicInfo({
        uuid: uniqueId, // Add UUID to the data
        firstName,
        lastName,
        mobileNumber,
        email,
        consent: consent ? 'yes' : 'no' // Convert boolean to 'yes' or 'no'
      });

      if (result.success) {
        // Navigate to another page with UUID
        this.router.navigate(['/availability-step1-page2'], { queryParams: { uuid: uniqueId } });
      } else {
        Swal.fire({
          title: 'Error!',
          text: result.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } else {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill in all required fields.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }
}
