import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stockout-card-image',
  templateUrl: './stockout-card-image.component.html',
  styleUrls: ['./stockout-card-image.component.css']
})
export class StockoutCardImageComponent {
  @Input() fileName: string;
  @Input() title: string;
  @Input() index: number;
}
