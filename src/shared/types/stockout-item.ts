import { SizeStock } from "./size-stock";
import { StockoutItemModel } from "./stockout-item-model";

export class StockoutItem {
    code: number;
    name: string;
    price: number;
    sales_ranking: number;
    stockout_rate: number;
    wh_coverage: number;
    size_stock: SizeStock;

    static ToStockoutItemModel(item: StockoutItem): StockoutItemModel {
        return {
            code: item.code,
            name: item.name,
            price: item.price,
            salesRanking: item.sales_ranking,
            stockoutRate: item.stockout_rate,
            whCoverage: item.wh_coverage,
            sizeStock: {
                xs: item.size_stock.XS,
                s: item.size_stock.S,
                m: item.size_stock.M,
                l: item.size_stock.L,
                xl: item.size_stock.XL,
                xxl: item.size_stock.XXL
            }
        }
    }
}
