import type { INodeProperties } from 'n8n-workflow';
import { ticketGetDescription } from './get';

const showOnlyForTickets = {
	resource: ['ticket'],
};

export const ticketDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTickets,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a ticket',
				description: 'Get all data of a single ticket',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetTicket',
					},
				},
			},
		],
		default: 'get',
	},
	...ticketGetDescription,
];
