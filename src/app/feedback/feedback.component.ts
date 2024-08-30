import { Component } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  selectedRating = 0;
  progressWidth = 0;
  isLoading = false;
  isFormVisible = true; // Variable to control form visibility

  feedbackData = {
    name: '',
    contact: '',
    email: '',
    experience: '',
    feedback: ''
  };

  constructor(private supabaseService: SupabaseService) {}

  selectRating(rating: number): void {
    this.selectedRating = rating;

    switch (rating) {
      case 1:
        this.progressWidth = 20;
        break;
      case 2:
        this.progressWidth = 40;
        break;
      case 3:
        this.progressWidth = 60;
        break;
      case 4:
        this.progressWidth = 80;
        break;
      case 5:
        this.progressWidth = 100;
        break;
    }
  }

  async onSubmit(): Promise<void> {
    this.feedbackData.experience = this.selectedRating === 1 ? 'Worst' : 
                                   this.selectedRating === 2 ? 'Not Good' :
                                   this.selectedRating === 3 ? 'Fine' :
                                   this.selectedRating === 4 ? 'Look Good' : 
                                   'Very Good';

    const response = await this.supabaseService.submitFeedback({
      name: this.feedbackData.name,
      contact: this.feedbackData.contact,
      email: this.feedbackData.email,
      experience: this.feedbackData.experience,
      rating: this.selectedRating,
      feedback: this.feedbackData.feedback
    });

    if (response.success) {
      Swal.fire({
        icon: 'success',
        title: 'Feedback Submitted',
        text: 'Thank you for your feedback!',
        confirmButtonText: 'OK'
      }).then(() => {
        this.closeForm(); // Close the form after successful submission
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: `Error submitting feedback: ${response.message}`,
        confirmButtonText: 'OK'
      });
    }
  }

  reloadPage() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      window.location.reload();
    }, 3000); 
  }

  closeForm(): void {
    this.isFormVisible = false; // Hide the form
  }

  onBackgroundClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-background')) {
      this.closeForm();
    }
  }
}
