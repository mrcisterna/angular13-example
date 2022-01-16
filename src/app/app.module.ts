import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopStockoutsViewerModule } from '../top-stockouts-viewer/top-stockouts-viewer.module';

import { AppComponent } from './app.component';

import { TopStockoutsViewerDataLoaderService } from '../services/top-stockouts-viewer-data-loader.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TopStockoutsViewerModule
  ],
  providers: [
    TopStockoutsViewerDataLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
