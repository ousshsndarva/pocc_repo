import { gql } from '@apollo/client';

export const getStockById = gql`
	query ($_id!: String) {
		stock(_id: $_id) {
			name
		}
	}
`;
