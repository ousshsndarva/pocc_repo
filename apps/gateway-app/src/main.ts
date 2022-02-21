import { Module, ValidationPipe, Logger } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AllExceptionsFilter } from './error/error-filter';
import { OrderModule } from './order/order.module';
import { StockModule } from './stock/stock.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: `api/graphql`,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      context: ({ req, res }) => ({ req, res }),
    }),
    OrderModule,
    StockModule

  ],
})
export class AppModule { }

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: '*' } });
  await app
    .use(cookieParser())
    .useGlobalPipes(new ValidationPipe())
    .useGlobalFilters(new AllExceptionsFilter())
    .listen(3340);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
