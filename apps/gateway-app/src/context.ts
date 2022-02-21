import { Http2ServerRequest, Http2ServerResponse } from 'http2';

export class CTX {
	req: Http2ServerRequest;
	res: Http2ServerResponse;
}
