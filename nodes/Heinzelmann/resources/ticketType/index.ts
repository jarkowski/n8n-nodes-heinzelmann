import type { INodeProperties } from 'n8n-workflow';
import { ticketTypeGetManyDescription } from './getAll';

const showOnlyForTicketTypes = {
	resource: ['ticketType'],
};

export const ticketTypeDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTicketTypes,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many ticket types',
				description: 'Get many ticket types and their data',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetTickettypes',
					},
				},
			},
		],
		default: 'getAll',
	},
	...ticketTypeGetManyDescription,
];
