import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {

  @Field(()=> String)
  name: string;

  @Field(() => [String])
  stocks: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class ListOrderInput {

  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  stocks?: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class UpdateOrderInput {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  stocks?: MongooseSchema.Types.ObjectId[];
}