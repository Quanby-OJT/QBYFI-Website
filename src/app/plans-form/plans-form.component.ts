import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service'; // Adjust path if needed

@Component({
  selector: 'app-plans-form',
  templateUrl: './plans-form.component.html',
  styleUrls: ['./plans-form.component.css']
})

export class PlansFormComponent implements OnInit {
  data: any[] = [];
  plans: any[] = [];
  selectedPlan: string | null = null; // Add this line

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    try {
      this.data = await this.supabaseService.fetchData('bundle');
      console.log('Fetched data:', this.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  onSubmit(): void {
    if (this.selectedPlan) {
      console.log('Selected plan:', this.selectedPlan);
      // Logic to handle the selected plan submission
    } else {
      console.error('No plan selected.');
    }
  }

  
}