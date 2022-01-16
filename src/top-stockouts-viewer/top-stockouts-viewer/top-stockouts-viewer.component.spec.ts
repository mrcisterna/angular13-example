import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStockoutsViewerComponent } from './top-stockouts-viewer.component';

describe('TopStockoutsViewerComponent', () => {
  let component: TopStockoutsViewerComponent;
  let fixture: ComponentFixture<TopStockoutsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStockoutsViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStockoutsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
