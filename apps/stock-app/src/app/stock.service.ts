import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { Stock, StockDocument} from '@pocc-workspace/schema-types';
import {
  CreateStockInput,
  ListStockInput,
  UpdateStockInput
} from '@pocc-workspace/stock-inputs'

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Stock.name) private stockModel: Model<StockDocument>,
  ) {}

  create(payload: CreateStockInput) {
    const createdStock = new this.stockModel(payload);
    return createdStock.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.stockModel.findById(_id).exec();
  }

  list(filters: ListStockInput) {
    return this.stockModel.find({ ...filters }).exec();
  }

  update(payload: UpdateStockInput) {
    return this.stockModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.stockModel.findByIdAndDelete(_id).exec();
  }
}