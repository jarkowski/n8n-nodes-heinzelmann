import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketReopen = {
	operation: ['reopen'],
	resource: ['ticket'],
};

export const ticketReopenDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketReopen },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the closed ticket to reopen',
		routing: {
			send: {
				type: 'query',
				property: 'ticketid',
			},
		},
	},
];
