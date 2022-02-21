import {Stock} from '@pocc-workspace/schema-types';
import {ListStockInput} from '@pocc-workspace/stock-inputs'

export type getAllStocksType = {getStocks: Stock[]};
export type getAllStocksParametersType = {
	filters: ListStockInput;
};