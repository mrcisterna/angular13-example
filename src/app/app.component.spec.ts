import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TopStockoutsViewerDataLoaderService } from '../services/top-stockouts-viewer-data-loader.service';
import { TopStockoutsViewerComponent } from '../top-stockouts-viewer/top-stockouts-viewer/top-stockouts-viewer.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        TopStockoutsViewerDataLoaderService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render app-top-stockouts-viewer', () => {
    const fixture = TestBed.createComponent(TopStockoutsViewerComponent);
    const stockoutsViewerComponent = fixture.componentInstance;
    expect(stockoutsViewerComponent).toBeTruthy();
  });
});
