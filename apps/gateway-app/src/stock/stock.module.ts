import { Module } from '@nestjs/common';
import { TcpModule } from '../tcp';
import { StockException } from '../error/error-types';
import { StockResolver } from './stock.resolver';

@Module({
	imports: [
		TcpModule.register(
			{
				host: '0.0.0.0',
				port: 5000,
			},
			StockException
		),
	],
	providers: [StockResolver],
})
export class StockModule {}
