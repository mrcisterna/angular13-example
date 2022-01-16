import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockoutViewerCardComponent } from './stockout-viewer-card/stockout-viewer-card.component';
import { StockoutCardImageComponent } from './stockout-card-image/stockout-card-image.component';

@NgModule({
  declarations: [
    StockoutViewerCardComponent,
    StockoutCardImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StockoutViewerCardComponent
  ]
})
export class StockoutCardModule { }
