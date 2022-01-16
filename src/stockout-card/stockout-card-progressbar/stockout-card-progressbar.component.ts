import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockout-card-progressbar',
  templateUrl: './stockout-card-progressbar.component.html',
  styleUrls: ['./stockout-card-progressbar.component.css']
})
export class StockoutCardProgressbarComponent implements OnInit {

  @Input() stockoutRate: number;

  private ratio: number = 100;

  ngOnInit(): void {

  }

  calculateStockoutPercentaje(): string {
    return (this.stockoutRate * this.ratio).toFixed(1);
  }

}
