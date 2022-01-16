import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockoutCardImageComponent } from './stockout-card-image.component';

describe('StockoutCardImageComponent', () => {
  let component: StockoutCardImageComponent;
  let fixture: ComponentFixture<StockoutCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockoutCardImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockoutCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
