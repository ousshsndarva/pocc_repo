import { Catch, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

const logger = new Logger();
@Catch()
export class AllExceptionsFilter implements GqlExceptionFilter {
	catch(exception: any) {
		const statusCode =
			exception instanceof HttpException
				? exception.getStatus()
				: HttpStatus.INTERNAL_SERVER_ERROR;

		const message = exception instanceof Error ? exception.message : '';

		const scope = exception.msName || 'Gateway';

		log(scope, message, statusCode >= 500 && statusCode < 600);

		return new HttpException(message, statusCode);
	}
}

const log = (scope: string, message: string, isError: boolean) => {
	if (isError) {
		logger.error(message, scope);
	} else {
		logger.warn(message, scope);
	}
};
