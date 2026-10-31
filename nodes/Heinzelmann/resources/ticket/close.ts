import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketClose = {
	operation: ['close'],
	resource: ['ticket'],
};

export const ticketCloseDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketClose },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the ticket to close',
		routing: {
			send: {
				type: 'query',
				property: 'ticketid',
			},
		},
	},
];
