import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';
import { MenuService } from '../menu.service';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  isMenuOpen = false;
  isSupportSectionVisible = true;
  isSubscriptionTrackingVisible = false;
  isFadingOut = false;
  suggestions: string[] = [];
  plans: any[] = [];
  subscriptionDetails: any;
  isSubmitting = false;
  isLoading = false;
  isSupportClicked: boolean = false;
  activeButton: string = '';
  showFeedback = false;

  constructor(
    private menuService: MenuService,
    private supabaseService: SupabaseService,
    private router: Router
  ) {}
// open burger menu
  ngOnInit() {
    this.fetchPlans();
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }

  toggleSections() {
    this.isSupportSectionVisible = !this.isSupportSectionVisible;
  }

  toggleAndScrollToFeedback(button: string) {
    this.activeButton = button;
    this.isSupportClicked = true;
    this.toggleSections();
    //this.scrollToFeedback();
  }
  
  //fetching full address
  async onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input?.value ?? ''; 

    if (query.length > 1) {
      const data = await this.supabaseService.getSearchAreaData();
      this.suggestions = data
        .filter((item: { full_address: string }) => item.full_address.toLowerCase().includes(query.toLowerCase()))
        .map((item: { full_address: string }) => item.full_address);
    } else {
      this.suggestions = [];
    }
  }

  onSuggestionClick(suggestion: string) {
    const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = suggestion;
      this.suggestions = [];
    }
  }

  //show subscription tracking
  toggleSubscriptionTracking() {
    this.isSubscriptionTrackingVisible = !this.isSubscriptionTrackingVisible;
  }

  //fetch subscription
  async onSubmit(subscriptionNumber: string) {
    if (this.isSubmitting) return;
  
    this.isSubmitting = true;
  
    try {
      const data = await this.supabaseService.getSubscriptionDetails(subscriptionNumber);
      if (!data || data.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Not Found',
          text: 'Subscription number does not exist.',
        });
        this.isSubscriptionTrackingVisible = false;
      } else {
        this.subscriptionDetails = data[0];
        this.isSubscriptionTrackingVisible = true;
        console.log('Fetched Subscription Details:', this.subscriptionDetails);
      }
    } finally {
      this.isSubmitting = false;
    }
  }

  hideSubscriptionTracking() {
    this.isFadingOut = true;
    setTimeout(() => {
      this.isSubscriptionTrackingVisible = false;
      this.isFadingOut = false; 
    }, 1000); 
  }

  //click animation button
  animateClick(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('animate-click');
    setTimeout(() => target.classList.remove('animate-click'), 200); 
  }

  animateClick1(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('animate-click');
    this.isLoading = true; 

    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/availability-step1']); 
    }, 500); 
  }

  //fetch plans
  fetchPlans() {
    this.supabaseService.getPlans().then(plans => {
      this.plans = plans || []; 
    }).catch(error => {
      console.error('Error fetching plans:', error);
    });
  }
  
  //show feedback
  toggleFeedback(): void {
    this.showFeedback = !this.showFeedback;
  }
}
