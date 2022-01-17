import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stockout-card-footer',
  templateUrl: './stockout-card-footer.component.html',
  styleUrls: ['./stockout-card-footer.component.css']
})
export class StockoutCardFooterComponent {

  @Input() whCoverage: number;

  ratio: number = 100;
  veryLowLimit: number = 50;

  getWHCoverageStatus(): string {
    if (this.isBelowVeryLowLimit()) {
      return 'Very low';
    }

    return 'Good';
  }

  getWHCoverageValue(): number {
    return this.whCoverage * this.ratio;
  }

  isBelowVeryLowLimit():boolean{
    return this.getWHCoverageValue() < this.veryLowLimit;
  }
}
