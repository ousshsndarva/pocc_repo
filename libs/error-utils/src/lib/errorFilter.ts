import { PocError } from './errorType';
import { Catch, RpcExceptionFilter } from '@nestjs/common';
import { throwError, Observable } from 'rxjs';

@Catch()
export class AllRpcExceptionsFilter implements RpcExceptionFilter {
	catch(error: Error): Observable<unknown> {
		if (error instanceof PocError) {
			return throwError(error);
		}
		return throwError(new PocError(error.message, 500));
	}
}
