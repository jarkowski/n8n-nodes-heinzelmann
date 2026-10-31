import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTicketAddDocument = {
	operation: ['addDocument'],
	resource: ['ticket'],
};

export const ticketAddDocumentDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: showOnlyForTicketAddDocument },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the ticket to attach the file to',
		routing: {
			send: {
				type: 'query',
				property: 'tid',
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: { show: showOnlyForTicketAddDocument },
		default: '',
		required: true,
		description: 'The name of the file to attach',
		routing: {
			send: {
				type: 'query',
				property: 'FileName',
			},
		},
	},
	{
		displayName: 'File Extension',
		name: 'fileExtension',
		type: 'string',
		displayOptions: { show: showOnlyForTicketAddDocument },
		default: '',
		required: true,
		description: 'The file extension of the file to attach',
		routing: {
			send: {
				type: 'query',
				property: 'FileExtension',
			},
		},
	},
	{
		displayName: 'File Content',
		name: 'fileContent',
		type: 'string',
		displayOptions: { show: showOnlyForTicketAddDocument },
		default: '',
		required: true,
		description:
			'The content of the file as a Base64 string. The API expects it as a URL query parameter, so the maximum file size is limited by the URL length limit of the server.',
		routing: {
			send: {
				type: 'query',
				property: 'UploadFile',
			},
		},
	},
];
