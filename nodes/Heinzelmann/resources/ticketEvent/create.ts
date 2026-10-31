import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketEventCreate = {
	operation: ['create'],
	resource: ['ticketEvent'],
};

export const ticketEventCreateDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketEventCreate },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the ticket to create the event for',
		routing: {
			send: {
				type: 'query',
				property: 'ticketid',
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		displayOptions: { show: showOnlyForTicketEventCreate },
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		description: 'The content of the event',
		routing: {
			send: {
				type: 'query',
				property: 'longdescr',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showOnlyForTicketEventCreate },
		options: [
			{
				displayName: 'Effort',
				name: 'effort',
				type: 'number',
				typeOptions: {
					minValue: 0,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The effort of the event',
				routing: {
					send: {
						type: 'query',
						property: 'expense',
					},
				},
			},
			{
				displayName: 'Event Date',
				name: 'eventDate',
				type: 'dateTime',
				default: '',
				description: 'The changed date of the event',
				routing: {
					send: {
						type: 'query',
						property: 'eventdate',
					},
				},
			},
			{
				displayName: 'Internal Note',
				name: 'internalNote',
				type: 'boolean',
				default: false,
				description: 'Whether the event is an internal note',
				routing: {
					send: {
						type: 'query',
						property: 'notpublic',
						value: '={{ $value ? 1 : 0 }}',
					},
				},
			},
		],
	},
];
