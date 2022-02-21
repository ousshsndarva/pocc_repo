import { gql } from '@apollo/client';

export const getAllOrders = gql`
	query ($filters!: ListOrderInput) {
		orders(filters: $filters) {
			_id
			name
		}
	}
`;
