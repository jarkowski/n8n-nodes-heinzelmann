import type { INodeProperties } from 'n8n-workflow';
import { ticketEventCreateDescription } from './create';
import { ticketEventUpdateDescription } from './update';

const showOnlyForTicketEvents = {
	resource: ['ticketEvent'],
};

export const ticketEventDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTicketEvents,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a ticket event',
				description: 'Create a new event for a ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/AddTicketEvent',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a ticket event',
				description: 'Update an existing ticket event',
				routing: {
					request: {
						method: 'POST',
						url: '/api/UpdateTicketEvent',
					},
				},
			},
		],
		default: 'create',
	},
	...ticketEventCreateDescription,
	...ticketEventUpdateDescription,
];
