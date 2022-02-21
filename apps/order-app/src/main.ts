import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {} from 'apollo-server-express'; // Keep to allow the build to add that node package to package.json
import { OrderModule } from './app/order.module';
import {AllRpcExceptionsFilter} from '@pocc-workspace/error-utils'

@Module({
	imports: [
		MongooseModule.forRoot('mongodb+srv://ousshsn:ousshsn@nestdb.oqvgs.mongodb.net/orderdb?retryWrites=true&w=majority'),
		OrderModule
	],
})
export class AppModule {}

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		{
			transport: Transport.TCP,
			options: {
				host: '0.0.0.0',
				port: 4000,
			},
		}
	);
	app
		.useGlobalPipes(new ValidationPipe())
		.useGlobalFilters(new AllRpcExceptionsFilter())
		.listen();
}

bootstrap();
