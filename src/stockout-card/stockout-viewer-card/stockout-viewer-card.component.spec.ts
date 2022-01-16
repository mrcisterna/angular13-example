import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockoutItemModel } from '../../shared/types/stockout-item-model';

import { StockoutViewerCardComponent } from './stockout-viewer-card.component';

describe('StockoutViewerCardComponent', () => {
  let component: StockoutViewerCardComponent;
  let fixture: ComponentFixture<StockoutViewerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockoutViewerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockoutViewerCardComponent);
    component = fixture.componentInstance;
    component.item = new StockoutItemModel();
    component.item.code = 74566;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
