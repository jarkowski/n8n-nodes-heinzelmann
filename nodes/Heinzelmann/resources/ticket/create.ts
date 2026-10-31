import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketCreate = {
	operation: ['create'],
	resource: ['ticket'],
};

export const ticketCreateDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketCreate },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the contact the ticket is created for',
		routing: {
			send: {
				type: 'query',
				property: 'contact_id',
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		displayOptions: { show: showOnlyForTicketCreate },
		default: '',
		required: true,
		description: 'The title of the ticket',
		routing: {
			send: {
				type: 'query',
				property: 'ShortDescr',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showOnlyForTicketCreate },
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
						property: 'CategoryID1',
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
						property: 'CategoryID2',
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
						property: 'LongDescr',
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
						property: 'expires',
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
				description: 'The effort of the ticket',
				routing: {
					send: {
						type: 'query',
						property: 'expense',
					},
				},
			},
			{
				displayName: 'Expected Effort',
				name: 'expectedEffort',
				type: 'number',
				typeOptions: {
					minValue: 0,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The expected effort of the ticket',
				routing: {
					send: {
						type: 'query',
						property: 'expExpense',
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
						property: 'prio_id',
					},
				},
			},
			{
				displayName: 'Ticket Date',
				name: 'ticketDate',
				type: 'dateTime',
				default: '',
				description: 'The changed date of the ticket',
				routing: {
					send: {
						type: 'query',
						property: 'eventdate',
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
						property: 'typeid',
					},
				},
			},
		],
	},
];
