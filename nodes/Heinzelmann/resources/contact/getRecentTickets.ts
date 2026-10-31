import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactGetRecentTickets = {
	operation: ['getRecentTickets'],
	resource: ['contact'],
};

export const contactGetRecentTicketsDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		displayOptions: { show: showOnlyForContactGetRecentTickets },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the contact to get the recent tickets for',
	},
];
