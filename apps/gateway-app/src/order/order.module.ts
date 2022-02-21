import { Module } from '@nestjs/common';
import { TcpModule } from '../tcp';
import { OrderException } from '../error/error-types';
import { OrderResolver } from './order.resolver';

@Module({
	imports: [
		TcpModule.register(
			{
				host: '0.0.0.0',
				port: 4000,
			},
			OrderException
		),
	],
	providers: [OrderResolver],
})
export class OrderModule {}
