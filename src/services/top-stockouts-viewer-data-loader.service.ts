import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { StockoutItem } from '../shared/types/stockout-item';
import { StockoutItemModel } from '../shared/types/stockout-item-model';

@Injectable()
export class TopStockoutsViewerDataLoaderService {

  private dataSource = '../data/products.json';

  constructor(private http: HttpClient) { }

  getTopStockoutsData(): Observable<StockoutItemModel[]> {
    return this.http.get<StockoutItem[]>(this.dataSource)
      .pipe(
        map(this.mapDataType),
        catchError(this.handleError));
  }

  mapDataType(data: StockoutItem[]): StockoutItemModel[] {
    return data.map(item => StockoutItem.ToStockoutItemModel(item));
  }

  handleError(error: any): Observable<any[]> {
    let errorMessage = '';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);

    return of([]);
  }
}
