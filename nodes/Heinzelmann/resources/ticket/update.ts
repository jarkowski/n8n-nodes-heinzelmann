import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketUpdate = {
	operation: ['update'],
	resource: ['ticket'],
};

export const ticketUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketUpdate },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the ticket to update',
		routing: {
			send: {
				type: 'query',
				property: 'TicketID',
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showOnlyForTicketUpdate },
		options: [
			{
				displayName: 'Category 1 ID',
				name: 'category1Id',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The ID of the first category',
				routing: {
					send: {
						type: 'query',
						property: 'Category1ID',
					},
				},
			},
			{
				displayName: 'Category 2 ID',
				name: 'category2Id',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The ID of the second category',
				routing: {
					send: {
						type: 'query',
						property: 'Category2ID',
					},
				},
			},
			{
				displayName: 'Contact ID',
				name: 'contactId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The ID of the contact',
				routing: {
					send: {
						type: 'query',
						property: 'ContactID',
					},
				},
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'The content of the ticket',
				routing: {
					send: {
						type: 'query',
						property: 'EventText',
					},
				},
			},
			{
				displayName: 'Due Date',
				name: 'dueDate',
				type: 'dateTime',
				default: '',
				description: 'The due date of the ticket',
				routing: {
					send: {
						type: 'query',
						property: 'DueDate',
					},
				},
			},
			{
				displayName: 'Priority ID',
				name: 'priorityId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The ID of the priority',
				routing: {
					send: {
						type: 'query',
						property: 'PriorityID',
					},
				},
			},
			{
				displayName: 'Status ID',
				name: 'statusId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The ID of the status of the ticket',
				routing: {
					send: {
						type: 'query',
						property: 'StatusID',
					},
				},
			},
			{
				displayName: 'Ticket Type ID',
				name: 'ticketTypeId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The ID of the ticket type',
				routing: {
					send: {
						type: 'query',
						property: 'TicketTypeID',
					},
				},
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'The title of the ticket',
				routing: {
					send: {
						type: 'query',
						property: 'Title',
					},
				},
			},
		],
	},
];
