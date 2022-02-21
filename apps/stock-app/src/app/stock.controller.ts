import { Controller } from '@nestjs/common';
import {
    CreateStockInput,
    UpdateStockInput,
    ListStockInput
 } from '@pocc-workspace/stock-inputs'
import { MessagePattern } from '@nestjs/microservices';
import { StockService } from './stock.service';
var mongoose = require('mongoose');

@Controller()
export class StockController {
    constructor (private service: StockService) {}

    @MessagePattern('createStock')
    async addStock(body: CreateStockInput) {
        return this.service.create(body);
    }

    @MessagePattern('getStockById')
    async getStockById(body: String ) {
        var id = mongoose.Types.ObjectId(body)
        return this.service.getById(id);
    }
    
    @MessagePattern('getAllStocks')
    async getAllStocks(body: ListStockInput) {
        return this.service.list(body);

    }
    @MessagePattern('updateStock')
    async updateStock(body: UpdateStockInput) {
        return this.service.update(body);
    }
 

}
