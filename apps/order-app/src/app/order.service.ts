import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { Order , OrderDocument } from '@pocc-workspace/schema-types';
import {CreateOrderInput,
    ListOrderInput,
    UpdateOrderInput
} from '@pocc-workspace/order-inputs';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  create(payload: CreateOrderInput) {
    const createdOrder = new this.orderModel(payload);
    return createdOrder.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.orderModel.findById(_id).exec();
  }

  list(filters: ListOrderInput) {
    return this.orderModel.find({ ...filters }).exec();
  }

  update(payload: UpdateOrderInput) {
    return this.orderModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.orderModel.findByIdAndDelete(_id).exec();
  }
}