import { gql } from '@apollo/client';

export const getOrderById = gql`
	query ($_id!: String) {
		order(_id: $_id) {
			name
		}
	}
`;
