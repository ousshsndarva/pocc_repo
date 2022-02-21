import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';


@ObjectType()
@Schema()
export class Stock {
  @Field(() => String)
  _id!: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name!: string;
}

export type StockDocument = Stock & Document;

export const StockSchema = SchemaFactory.createForClass(Stock);
