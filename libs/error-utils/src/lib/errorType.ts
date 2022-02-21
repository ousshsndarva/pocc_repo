import { RpcException } from '@nestjs/microservices';

export class PocError extends RpcException {
	status;
	msg;
	constructor(message, status) {
		super(message);
		this.msg = message;
		this.status = status;
	}
}
