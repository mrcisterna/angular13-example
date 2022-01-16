import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockoutCardDetailComponent } from './stockout-card-detail.component';

describe('StockoutCardDetailComponent', () => {
  let component: StockoutCardDetailComponent;
  let fixture: ComponentFixture<StockoutCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockoutCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockoutCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
