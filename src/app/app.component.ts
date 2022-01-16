import { Component, OnInit } from '@angular/core';
import { TopStockoutsViewerDataLoaderService } from '../services/top-stockouts-viewer-data-loader.service';
import { StockoutItemModel } from '../shared/types/stockout-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'nextail-exercise-app';
  data: StockoutItemModel[] = [];
  showViewer: boolean;

  constructor(private dataLoaderService: TopStockoutsViewerDataLoaderService) { }

  ngOnInit(): void {
    this.dataLoaderService.getTopStockoutsData()
      .subscribe(data => {
        this.data = data;
        this.showViewer = true;
      });
  }
}
