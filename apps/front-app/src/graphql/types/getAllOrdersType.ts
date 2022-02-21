import {Order} from '@pocc-workspace/schema-types';
import {ListOrderInput} from '@pocc-workspace/order-inputs'

export type getAllOrdersType = {getOrders: Order[]};
export type getAllOrdersParametersType = {
	filters: ListOrderInput;
};