import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockoutCardFooterComponent } from './stockout-card-footer.component';

describe('StockoutCardFooterComponent', () => {
  let component: StockoutCardFooterComponent;
  let fixture: ComponentFixture<StockoutCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockoutCardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockoutCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
