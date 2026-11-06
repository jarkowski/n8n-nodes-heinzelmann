import type { INodeProperties } from 'n8n-workflow';
import { getManyDescription } from '../../shared/getMany';

const showOnlyForTicketFilters = {
	resource: ['ticketFilter'],
};

export const ticketFilterDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTicketFilters,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many ticket filters',
				description: 'Get many predefined ticket list filters of the user',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetFilters',
					},
				},
			},
		],
		default: 'getAll',
	},
	...getManyDescription('ticketFilter'),
];
