import { gql } from '@apollo/client';

export const createStock = gql`
	mutation ($payload!: CreateStockInput) {
		createStock(payload: $payload) {
			_id
			name
		}
	}
`;
