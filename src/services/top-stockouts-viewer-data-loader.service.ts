import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { StockoutItem } from '../shared/types/stockout-item';
import { StockoutItemModel } from '../shared/types/stockout-item-model';

@Injectable()
export class TopStockoutsViewerDataLoaderService {

  private dataSource = '../data/products.json';

  constructor(private http: HttpClient) { }

  getTopStockoutsData(): Observable<StockoutItemModel[]> {
    return this.http.get<StockoutItem[]>(this.dataSource)
      .pipe(map(data => data.map(item => StockoutItem.ToStockoutItemModel(item))));
  }
}
