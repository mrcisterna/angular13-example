import { TestBed } from '@angular/core/testing';

import { TopStockoutsViewerDataLoaderService } from './top-stockouts-viewer-data-loader.service';

describe('TopStockoutsViewerDataLoaderService', () => {
  let service: TopStockoutsViewerDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopStockoutsViewerDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should assert retrieved products count', () => {
    service.getTopStockoutsData().subscribe(data => {
      expect(data.length).toEqual(4);
    });
  });
});
