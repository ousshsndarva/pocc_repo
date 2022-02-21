import { HttpException } from '@nestjs/common';

export class OrderException extends HttpException {
	msName = 'Order';
	constructor(response: string | Record<string, any>, status: number) {
		super(response, status);
	}
}

export class StockException extends HttpException {
	msName = 'Stock';
	constructor(response: string | Record<string, any>, status: number) {
		super(response, status);
	}
}

export class FrontException extends HttpException {
	msName = 'Front';
	constructor(response: string | Record<string, any>, status: number) {
		super(response, status);
	}
}
