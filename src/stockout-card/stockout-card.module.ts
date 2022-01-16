import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockoutViewerCardComponent } from './stockout-viewer-card/stockout-viewer-card.component';
import { StockoutCardImageComponent } from './stockout-card-image/stockout-card-image.component';
import { StockoutCardDetailComponent } from './stockout-card-detail/stockout-card-detail.component';
import { StockoutCardChartComponent } from './stockout-card-chart/stockout-card-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    StockoutViewerCardComponent,
    StockoutCardImageComponent,
    StockoutCardDetailComponent,
    StockoutCardChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    StockoutViewerCardComponent
  ]
})
export class StockoutCardModule { }
