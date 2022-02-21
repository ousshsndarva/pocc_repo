import { Controller } from '@nestjs/common';
import {
    CreateOrderInput,
ListOrderInput,
UpdateOrderInput 
} from '@pocc-workspace/order-inputs'
import { MessagePattern } from '@nestjs/microservices';
import { OrderService } from './order.service';
var mongoose = require('mongoose');


@Controller()
export class OrderController {
    constructor (private service: OrderService) {}

    @MessagePattern('createOrder')
    async addOrder(body: CreateOrderInput) {
        return this.service.create(body);
    }

    @MessagePattern('getOrderById')
    async getOrderById(body: String ) {
        var id = mongoose.Types.ObjectId(body)
        return this.service.getById(id);
    }
    
    @MessagePattern('getAllOrders')
    async getAllOrders(body: ListOrderInput) {
        return this.service.list(body);

    }
    @MessagePattern('updateOrder')
    async updateOrder(body: UpdateOrderInput) {
        return this.service.update(body);
    }
}