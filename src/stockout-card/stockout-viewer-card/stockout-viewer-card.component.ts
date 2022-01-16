import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StockoutItemModel } from '../../shared/types/stockout-item-model';

@Component({
  selector: 'app-stockout-viewer-card',
  templateUrl: './stockout-viewer-card.component.html',
  styleUrls: ['./stockout-viewer-card.component.css']
})
export class StockoutViewerCardComponent {
  
  @Input() item: StockoutItemModel;
  @Input() index: number;
  @Output() markedComplete = new EventEmitter<number>();

  isHover: boolean;

  showModal: boolean;

  imageFileName(): string {
    return this.item.code.toString();
  }

  markComplete(): void {
    this.markedComplete.emit(this.index);
  }

  onMouseEnter(): void {
    this.isHover = true;
  }

  onMouseLeave(): void {
    this.isHover = false;
  }
}
