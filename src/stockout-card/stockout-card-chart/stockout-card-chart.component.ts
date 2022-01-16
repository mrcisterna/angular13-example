import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';
import { SizeStockModel } from '../../shared/types/size-stock-model';

@Component({
  selector: 'app-stockout-card-chart',
  templateUrl: './stockout-card-chart.component.html',
  styleUrls: ['./stockout-card-chart.component.css']
})
export class StockoutCardChartComponent implements OnInit {

  @Input() data: SizeStockModel;

  chartData: ChartDataset[];
  chartLabels: any[];
  chartOptions = { responsive: true, scales: { y: { min: 0, max: 0 } }};
  chartLegend = false;
  chartPlugins = [];
  chartType: ChartType = 'bar';
  showChart: boolean;
  maxValueOffset = 1;


  ngOnInit(): void {
    if (!this.data) return;

    this.initializeChart();
    this.showChart = true;
  }

  private initializeChart() {
    this.fillChartData();
    const maxValue = this.getMaxValue(this.chartData[0].data as number[]);
    this.chartOptions.scales.y.max = maxValue + this.maxValueOffset;
  }

  private fillChartData(): void {
    this.chartData = [{ data: [], backgroundColor: '#000000' }];
    this.chartLabels = [];

    Object.entries(this.data).forEach(
      ([key, value]) => {
        if (value !== undefined) {
          this.chartData[0].data.push(value);
          this.chartLabels.push(key.toLocaleUpperCase());
        }
      });
  }

  private getMaxValue(values: number[]) {
    return Math.max.apply(null, values);
  }
}
