import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-confirmation-modal',
  templateUrl: './simple-confirmation-modal.component.html',
  styleUrls: ['./simple-confirmation-modal.component.css']
})
export class SimpleConfirmationModalComponent {

  @Input() title: string;
  @Input() message: string;
  @Output() accept = new EventEmitter();
  @Output() cancel = new EventEmitter();

  close(): void {
    this.cancel.emit();
  }

  ok(): void {
    this.accept.emit();
  }
}
