import type { INodeProperties } from 'n8n-workflow';
import { getManyDescription } from '../../shared/getMany';
import { contactGetByPhoneNumberDescription } from './getByPhoneNumber';
import { contactGetRecentTicketsDescription } from './getRecentTickets';

const showOnlyForContacts = {
	resource: ['contact'],
};

export const contactDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForContacts,
		},
		options: [
			{
				name: 'Get by Phone Number',
				value: 'getByPhoneNumber',
				action: 'Get a contact by phone number',
				description: 'Get the contact that belongs to a phone number',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/ContactByPhoneNumber/{{encodeURIComponent($parameter.phoneNumber)}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many contacts',
				description: 'Get many contacts',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetContacts',
					},
				},
			},
			{
				name: 'Get Recent Tickets',
				value: 'getRecentTickets',
				action: 'Get the recent tickets of a contact',
				description: 'Get the last 5 tickets of a contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/Contact/{{$parameter.contactId}}/Tickets',
					},
				},
			},
		],
		default: 'getAll',
	},
	...contactGetByPhoneNumberDescription,
	...getManyDescription('contact'),
	...contactGetRecentTicketsDescription,
];
