import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockoutCardChartComponent } from './stockout-card-chart.component';

describe('StockoutCardChartComponent', () => {
  let component: StockoutCardChartComponent;
  let fixture: ComponentFixture<StockoutCardChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockoutCardChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockoutCardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
