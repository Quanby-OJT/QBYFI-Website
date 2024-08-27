import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  // Variables to control the visibility of the modals
  showCallModal: boolean = false;
  showLearnMoreModal: boolean = false;

  // Function to open the call modal
  openCallModal() {
    this.showCallModal = true;
  }

  // Function to close the call modal
  closeCallModal() {
    this.showCallModal = false;
  }

  // Function to open the learn more modal
  openLearnMoreModal() {
    this.showLearnMoreModal = true;
  }

  // Function to close the learn more modal
  closeLearnMoreModal() {
    this.showLearnMoreModal = false;
  }
}
