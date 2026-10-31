import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketGet = {
	operation: ['get'],
	resource: ['ticket'],
};

export const ticketGetDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketGet },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 1,
		required: true,
		description: 'The ID of the ticket to retrieve',
		routing: {
			send: {
				type: 'query',
				property: 'TicketID',
			},
		},
	},
];
