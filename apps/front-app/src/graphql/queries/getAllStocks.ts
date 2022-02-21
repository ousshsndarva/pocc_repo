import { gql } from '@apollo/client';

export const getAllStocks = gql`
	query ($filters!: ListStockInput) {
		stocks(filters: $filters) {
			_id
			name
		}
	}
`;
