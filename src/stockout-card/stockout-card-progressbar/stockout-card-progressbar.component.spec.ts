import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockoutCardProgressbarComponent } from './stockout-card-progressbar.component';

describe('StockoutCardProgressbarComponent', () => {
  let component: StockoutCardProgressbarComponent;
  let fixture: ComponentFixture<StockoutCardProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockoutCardProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockoutCardProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
