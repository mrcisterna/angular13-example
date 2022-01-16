import { Component, Input, OnInit } from '@angular/core';
import { StockoutItemModel } from '../../shared/types/stockout-item-model';

@Component({
  selector: 'app-top-stockouts-viewer',
  templateUrl: './top-stockouts-viewer.component.html',
  styleUrls: ['./top-stockouts-viewer.component.css']
})
export class TopStockoutsViewerComponent {

  @Input() data: StockoutItemModel[] = [];

  modalTitle: string = 'Please confirm';
  modalMessage: string = 'Are you sure you want to mark this product as complete?';
  showModal: boolean;
  markedStockItemIndex: number;

  sortBy(prop: string): StockoutItemModel[] {
    return this.data.sort((a: any, b: any) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  onMarkedComplete(markedStockItemIndex: number): void {
    this.markedStockItemIndex = markedStockItemIndex;
    this.showModal = true;
  }

  onCancel(): void {
    this.showModal = false;
  }

  onAccept(): void {
    this.showModal = false;
    this.removeStockoutItem();
  }

  private removeStockoutItem(): void {
    this.data.splice(this.markedStockItemIndex, 1);
  }
}
