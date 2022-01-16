import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleConfirmationModalComponent } from './simple-confirmation-modal/simple-confirmation-modal.component';

@NgModule({
  declarations: [
    SimpleConfirmationModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleConfirmationModalComponent
  ]
})
export class ConfirmationModalModule { }
