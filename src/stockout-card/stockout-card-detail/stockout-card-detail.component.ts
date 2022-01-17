import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stockout-card-detail',
  templateUrl: './stockout-card-detail.component.html',
  styleUrls: ['./stockout-card-detail.component.css']
})
export class StockoutCardDetailComponent {
  @Input() code: number;
  @Input() name: string;
  @Input() price: number;
}
