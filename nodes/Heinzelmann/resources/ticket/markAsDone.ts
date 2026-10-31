import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketMarkAsDone = {
	operation: ['markAsDone'],
	resource: ['ticket'],
};

export const ticketMarkAsDoneDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketMarkAsDone },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the ticket to mark as done',
		routing: {
			send: {
				type: 'query',
				property: 'ticketid',
			},
		},
	},
];
