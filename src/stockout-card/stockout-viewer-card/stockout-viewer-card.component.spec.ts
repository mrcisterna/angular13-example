import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
