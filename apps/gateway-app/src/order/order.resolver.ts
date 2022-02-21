import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Order, OrderDocument, Stock } from '@pocc-workspace/schema-types';
import { TcpProvider } from './../tcp/tcp.provider';
import {
  CreateOrderInput,
  ListOrderInput,
  UpdateOrderInput
} from '@pocc-workspace/order-inputs';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private connection: TcpProvider) { }

  @Query(() => Order)
  async order(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.connection.send<Order, { _id: MongooseSchema.Types.ObjectId; }>(
      { cmd: 'getOrderById' },
      { _id }
    );
  }

  @Query(() => [Order])
  async orders(
    @Args('filters', { nullable: true }) filters?: ListOrderInput,
  ) {
    return this.connection.send<[Order], { filters: ListOrderInput }>(
      { cmd: 'getAllOrders' },
      { filters }
    );
  }

  @Mutation(() => Order)
  async createOrder(@Args('payload') payload: CreateOrderInput) {
    return this.connection.send<Order, { payload: CreateOrderInput }>(
      { cmd: "createOrder" },
      { payload }
    );
  }

  @Mutation(() => Order)
  async updateOrder(@Args('payload') payload: UpdateOrderInput) {
    return this.connection.send<Order, { payload: UpdateOrderInput }>(
      { cmd: "updateOrder" },
      { payload }
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
  @ResolveField()
  async stocks(
    @Parent() order: OrderDocument,
    @Args('populate') populate: boolean,
  ) {
    if (populate)
      await order
        .populate({ path: 'stocks', model: Stock.name });

    return order.stocks;
  }

}