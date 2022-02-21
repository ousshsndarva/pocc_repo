import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Stock } from '../stock/';

@ObjectType()
@Schema()
export class Order {
  @Field(() => String)
  _id!: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name!: string;

  @Field(() => [Stock])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Stock.name })
  stocks!: MongooseSchema.Types.ObjectId[] | Stock[];
}

export type OrderDocument = Order & Document;

export const OrderSchema = SchemaFactory.createForClass(Order);