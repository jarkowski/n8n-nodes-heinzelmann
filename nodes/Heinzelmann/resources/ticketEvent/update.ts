import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketEventUpdate = {
	operation: ['update'],
	resource: ['ticketEvent'],
};

export const ticketEventUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketEventUpdate },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the event to update',
		routing: {
			send: {
				type: 'query',
				property: 'eventid',
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showOnlyForTicketEventUpdate },
		options: [
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'The content of the event',
				routing: {
					send: {
						type: 'query',
						property: 'longdescr',
					},
				},
			},
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
