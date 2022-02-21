import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { HttpException, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TcpProvider {
	constructor(
		@Inject('TCP_CLIENT') private connection: ClientProxy,
		@Inject('Exception') private exception: typeof HttpException
	) {}

	send<TResult = any, TInput = any>(
		pattern: any,
		data: TInput
	): Observable<TResult> {
		return this.connection.send(pattern, data).pipe(
			catchError(({ msg, status }) => {
				throw new this.exception(msg, status);
			})
		);
	}

	emit<TResult = any, TInput = any>(
		pattern: any,
		data: TInput
	): Observable<TResult> {
		return this.connection.emit(pattern, data).pipe(
			catchError(({ msg, status }) => {
				throw new this.exception(msg, status);
			})
		);
	}
}
