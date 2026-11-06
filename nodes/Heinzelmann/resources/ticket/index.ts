import type { INodeProperties } from 'n8n-workflow';
import { ticketAddDeviceDescription } from './addDevice';
import { ticketAddDocumentDescription } from './addDocument';
import { ticketCloseDescription } from './close';
import { ticketCreateDescription } from './create';
import { ticketDeleteDescription } from './delete';
import { ticketGetDescription } from './get';
import { ticketGetManyDescription } from './getAll';
import { ticketMarkAsDoneDescription } from './markAsDone';
import { ticketReopenDescription } from './reopen';
import { ticketUpdateDescription } from './update';

const showOnlyForTickets = {
	resource: ['ticket'],
};

export const ticketDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTickets,
		},
		options: [
			{
				name: 'Add Device',
				value: 'addDevice',
				action: 'Add a device to a ticket',
				description: 'Assign an asset to a ticket by device name and hostname',
				routing: {
					request: {
						method: 'POST',
						url: '/api/AddDeviceToTicket',
					},
				},
			},
			{
				name: 'Add Document',
				value: 'addDocument',
				action: 'Add a document to a ticket',
				description: 'Attach a file to a ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/AddDocumentToTicket',
					},
				},
			},
			{
				name: 'Close',
				value: 'close',
				action: 'Close a ticket',
				description: 'Close an existing ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/CloseTicket',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a ticket',
				description: 'Create a new ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/AddTicket',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a ticket',
				description: 'Delete a ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/DeleteTicket',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a ticket',
				description: 'Get all data of a single ticket',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetTicket',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many tickets',
				description: 'Get many tickets, optionally filtered by a ticket list filter',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetTickets',
					},
				},
			},
			{
				name: 'Mark as Done',
				value: 'markAsDone',
				action: 'Mark a ticket as done',
				description: 'Set the status of a ticket to done',
				routing: {
					request: {
						method: 'POST',
						url: '/api/SetTicketStatusDone',
					},
				},
			},
			{
				name: 'Reopen',
				value: 'reopen',
				action: 'Reopen a ticket',
				description: 'Reopen a closed ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/ReopenTicket',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a ticket',
				description: 'Update an existing ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/UpdateTicket',
					},
				},
			},
		],
		default: 'get',
	},
	...ticketAddDeviceDescription,
	...ticketAddDocumentDescription,
	...ticketCloseDescription,
	...ticketCreateDescription,
	...ticketDeleteDescription,
	...ticketGetDescription,
	...ticketGetManyDescription,
	...ticketMarkAsDoneDescription,
	...ticketReopenDescription,
	...ticketUpdateDescription,
];
