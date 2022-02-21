import { ClientsModule, Transport } from '@nestjs/microservices';
import { DynamicModule, HttpException, Module } from '@nestjs/common';
import { TcpProvider } from './tcp.provider';
@Module({})
export class TcpModule {
	static register(
		options,
		ExceptionClass: typeof HttpException
	): DynamicModule {
		return {
			module: TcpModule,
			imports: [
				ClientsModule.register([
					{
						name: 'TCP_CLIENT',
						transport: Transport.TCP,
						options,
					},
				]),
			],
			providers: [
				TcpProvider,
				{
					provide: 'Exception',
					useValue: ExceptionClass,
				},
			],
			exports: [TcpProvider],
		};
	}
}
