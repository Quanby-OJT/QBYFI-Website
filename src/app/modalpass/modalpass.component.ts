import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-pass',
  templateUrl: './modalpass.component.html',
  styleUrls: ['./modalpass.component.css']
})
export class ModalPassComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  confirm(): void {
    this.close.emit();
  }
}
