import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stockout-card-progressbar',
  templateUrl: './stockout-card-progressbar.component.html',
  styleUrls: ['./stockout-card-progressbar.component.css']
})
export class StockoutCardProgressbarComponent {

  @Input() stockoutRate: number;

  private ratio: number = 100;

  calculateStockoutPercentaje(): string {
    return (this.stockoutRate * this.ratio).toFixed(1);
  }

}
