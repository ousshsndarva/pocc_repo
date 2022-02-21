import { gql } from '@apollo/client';

export const createOrder = gql`
	mutation ($payload!: CreateOrderInput) {
		createOrder(payload: $payload) {
			_id
			name
		}
	}
`;
