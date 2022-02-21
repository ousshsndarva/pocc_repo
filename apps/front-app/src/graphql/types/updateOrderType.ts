import {Order} from '@pocc-workspace/schema-types';
import {UpdateOrderInput} from '@pocc-workspace/order-inputs'

export type updateOrderType = {updateOrder: Order};
export type updateOrderParametersType = {
	payload: UpdateOrderInput;
};