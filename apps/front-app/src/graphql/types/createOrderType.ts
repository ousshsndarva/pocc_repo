import {Order} from '@pocc-workspace/schema-types';
import {CreateOrderInput} from '@pocc-workspace/order-inputs'

export type createOrderType = {createOrder: Order};
export type createOrderParametersType = {
	payload: CreateOrderInput;
};