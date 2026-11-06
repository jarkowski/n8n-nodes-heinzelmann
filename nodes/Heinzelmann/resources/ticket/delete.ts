import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketDelete = {
	operation: ['delete'],
	resource: ['ticket'],
};

export const ticketDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketDelete },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the ticket to delete',
		routing: {
			send: {
				type: 'query',
				property: 'ticketid',
			},
		},
	},
];
