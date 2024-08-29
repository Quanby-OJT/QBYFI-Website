import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  hours = [
    { value: 'mon', label: 'Mon 09:00 am – 05:00 pm' },
    { value: 'tue', label: 'Tue 09:00 am – 05:00 pm' },
    { value: 'wed', label: 'Wed 09:00 am – 05:00 pm' },
    { value: 'thu', label: 'Thu 09:00 am – 05:00 pm' },
    { value: 'fri', label: 'Fri 09:00 am – 05:00 pm' },
    { value: 'sat', label: 'Sat Closed' },
    { value: 'sun', label: 'Sun Closed' }
  ];

  currentDay: string = '';
  showCallModal: boolean = false;
  showLearnMoreModal: boolean = false;

  ngOnInit() {
    this.currentDay = this.getCurrentDay();
  }

  getCurrentDay(): string {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const today = new Date().getDay();
    return days[today];
  }

  onDropdownChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected Day:', selectedValue);
  }

  openCallModal() {
    this.showCallModal = true;
  }

  closeCallModal() {
    this.showCallModal = false;
  }

  openLearnMoreModal() {
    this.showLearnMoreModal = true;
  }

  closeLearnMoreModal() {
    this.showLearnMoreModal = false;
  }
}
