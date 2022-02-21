import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Stock } from '@pocc-workspace/schema-types';
import { TcpProvider } from './../tcp/tcp.provider';
import {
  CreateStockInput,
  ListStockInput,
  UpdateStockInput
} from '@pocc-workspace/stock-inputs';

@Resolver(() => Stock)
export class StockResolver {
  constructor(private connection: TcpProvider) {}

  @Query(() => Stock)
  async stock(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.connection.send<Stock,{_id: MongooseSchema.Types.ObjectId;}>(
        {cmd: 'getStockById'},
        {_id}
    );
  }

  @Query(() => [Stock])
  async stocks(
    @Args('filters', { nullable: true }) filters?: ListStockInput,
  ) {
    return this.connection.send<[Stock],{filters: ListStockInput} >(
        {cmd: 'getAllStocks'},
        {filters}
    );
  }

  @Mutation(() => Stock)
  async createStock(@Args('payload') payload: CreateStockInput) {
    return this.connection.send<Stock, {payload: CreateStockInput}>(
        {cmd: "createStock"},
        {payload}
        );
  }

  @Mutation(() => Stock)
  async updateStock(@Args('payload') payload: UpdateStockInput) {
    return this.connection.send<Stock, {payload: UpdateStockInput}>(
        {cmd: "updateStock"},
        {payload}
        );
  }

//   @Mutation(() => Order)
//   async deleteOrder(
//     @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
//   ) {
//     return this.connection.send<Order,{_id: MongooseSchema.Types.ObjectId;}>(
//         {cmd: 'deleteOrder'},
//         {_id}
//     );
//   }
}