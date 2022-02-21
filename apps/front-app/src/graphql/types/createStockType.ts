import {Stock} from '@pocc-workspace/schema-types';
import {CreateStockInput} from '@pocc-workspace/stock-inputs'

export type createStockType = {createStock: Stock};
export type createStockParametersType = {
	payload: CreateStockInput;
};