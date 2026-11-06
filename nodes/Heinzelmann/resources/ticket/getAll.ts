import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketGetMany = {
	operation: ['getAll'],
	resource: ['ticket'],
};

export const ticketGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: showOnlyForTicketGetMany },
		options: [
			{
				displayName: 'Filter ID',
				name: 'filterId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The ID of a predefined ticket list filter to apply',
				routing: {
					send: {
						type: 'query',
						property: 'filterid',
					},
				},
			},
		],
	},
];
