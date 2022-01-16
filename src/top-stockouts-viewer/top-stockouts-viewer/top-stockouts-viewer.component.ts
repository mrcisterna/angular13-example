import { Component, Input, OnInit } from '@angular/core';
import { StockoutItemModel } from '../../shared/types/stockout-item-model';

@Component({
  selector: 'app-top-stockouts-viewer',
  templateUrl: './top-stockouts-viewer.component.html',
  styleUrls: ['./top-stockouts-viewer.component.css']
})
export class TopStockoutsViewerComponent {

  @Input() data: StockoutItemModel[] = [];
  
  sortBy(prop: string): StockoutItemModel[] {
    return this.data.sort((a: any, b: any) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}
