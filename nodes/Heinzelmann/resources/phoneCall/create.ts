import type { INodeProperties } from 'n8n-workflow';
import { callStateOptions } from './callState';

const showOnlyForPhoneCallCreate = {
	operation: ['create'],
	resource: ['phoneCall'],
};

export const phoneCallCreateDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		displayOptions: { show: showOnlyForPhoneCallCreate },
		default: '',
		required: true,
		placeholder: '+49 123 4567890',
		description: 'The phone number of the call',
		routing: {
			send: {
				type: 'query',
				property: 'PhoneNumber',
			},
		},
	},
	{
		displayName: 'Call State',
		name: 'callState',
		type: 'options',
		displayOptions: { show: showOnlyForPhoneCallCreate },
		options: callStateOptions,
		default: '1',
		required: true,
		description: 'The type of the call',
		routing: {
			send: {
				type: 'query',
				property: 'CallState',
			},
		},
	},
	{
		displayName: 'Call Date',
		name: 'callDate',
		type: 'string',
		displayOptions: { show: showOnlyForPhoneCallCreate },
		default: '',
		required: true,
		placeholder: '31.10.2026 09:30',
		description: 'The date and time of the call in the format dd.MM.yyyy hh:mm',
		routing: {
			send: {
				type: 'query',
				property: 'CallDate',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showOnlyForPhoneCallCreate },
		options: [
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				typeOptions: {
					minValue: 0,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The duration of the call in seconds',
				routing: {
					send: {
						type: 'query',
						property: 'Duration',
					},
				},
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'A note for the call',
				routing: {
					send: {
						type: 'query',
						property: 'Notice',
					},
				},
			},
		],
	},
];
