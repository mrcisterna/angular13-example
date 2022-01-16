import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStockoutsViewerComponent } from './top-stockouts-viewer/top-stockouts-viewer.component';
import { StockoutCardModule } from '../stockout-card/stockout-card.module';

@NgModule({
  declarations: [
    TopStockoutsViewerComponent
  ],
  imports: [
    CommonModule,
    StockoutCardModule
  ],
  exports: [
    TopStockoutsViewerComponent
  ],
})
export class TopStockoutsViewerModule { }
