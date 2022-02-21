import {Stock} from '@pocc-workspace/schema-types';
import {UpdateStockInput} from '@pocc-workspace/stock-inputs'

export type updateStockType = {updateStock: Stock};
export type updateStockParametersType = {
	payload: UpdateStockInput;
};