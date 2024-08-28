import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent {
  @Input() isVisible: boolean = false;

  close() {
    this.isVisible = false;
  }
}
