import type { INodeProperties } from 'n8n-workflow';
import { getManyDescription } from '../../shared/getMany';

const showOnlyForTicketTypeGetMany = {
	operation: ['getAll'],
	resource: ['ticketType'],
};

export const ticketTypeGetManyDescription: INodeProperties[] = [
	...getManyDescription('ticketType'),
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: showOnlyForTicketTypeGetMany },
		options: [
			{
				displayName: 'Ticket Type ID',
				name: 'ticketTypeId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'Only return the ticket type with this ID',
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
