import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Stock, StockSchema } from '@pocc-workspace/schema-types';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stock.name, schema: StockSchema }]),
  ],
  providers: [StockService],
  controllers: [StockController],
})
export class StockModule {}