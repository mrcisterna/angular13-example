import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockout-card-footer',
  templateUrl: './stockout-card-footer.component.html',
  styleUrls: ['./stockout-card-footer.component.css']
})
export class StockoutCardFooterComponent implements OnInit {

  @Input() whCoverage: number;

  ratio: number = 100;
  veryLowLimit: number = 50;

  ngOnInit(): void {
  }

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
