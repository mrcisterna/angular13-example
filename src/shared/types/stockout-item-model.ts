import { SizeStockModel } from "./size-stock-model";

export class StockoutItemModel {
    code: number;
    name: string;
    price: number;
    salesRanking: number;    
    stockoutRate: number;
    whCoverage: number;
    sizeStock: SizeStockModel;
}
