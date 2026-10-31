import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketAddDevice = {
	operation: ['addDevice'],
	resource: ['ticket'],
};

export const ticketAddDeviceDescription: INodeProperties[] = [
	{
		displayName: 'Device Name',
		name: 'deviceName',
		type: 'string',
		displayOptions: { show: showOnlyForTicketAddDevice },
		default: '',
		required: true,
		description: 'The name of the asset',
		routing: {
			send: {
				type: 'query',
				property: 'DeviceName',
			},
		},
	},
	{
		displayName: 'Hostname',
		name: 'hostname',
		type: 'string',
		displayOptions: { show: showOnlyForTicketAddDevice },
		default: '',
		required: true,
		description: 'The hostname of the asset',
		routing: {
			send: {
				type: 'query',
				property: 'Hostname',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showOnlyForTicketAddDevice },
		options: [
			{
				displayName: 'Device ID',
				name: 'deviceId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description:
					'The ID of the device, if the device name and hostname are not sufficient to identify the asset',
				routing: {
					send: {
						type: 'query',
						property: 'DeviceID',
					},
				},
			},
			{
				displayName: 'Ticket ID',
				name: 'ticketId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'The ID of the ticket the asset is assigned to',
				routing: {
					send: {
						type: 'query',
						property: 'TicketID',
					},
				},
			},
		],
	},
];
