import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockoutViewerCardComponent } from './stockout-viewer-card/stockout-viewer-card.component';
import { StockoutCardImageComponent } from './stockout-card-image/stockout-card-image.component';
import { StockoutCardDetailComponent } from './stockout-card-detail/stockout-card-detail.component';

@NgModule({
  declarations: [
    StockoutViewerCardComponent,
    StockoutCardImageComponent,
    StockoutCardDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StockoutViewerCardComponent
  ]
})
export class StockoutCardModule { }
