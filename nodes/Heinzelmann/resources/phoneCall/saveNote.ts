import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPhoneCallSaveNote = {
	operation: ['saveNote'],
	resource: ['phoneCall'],
};

export const phoneCallSaveNoteDescription: INodeProperties[] = [
	{
		displayName: 'Phone Call ID',
		name: 'phoneCallId',
		type: 'number',
		displayOptions: { show: showOnlyForPhoneCallSaveNote },
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 0,
		required: true,
		description: 'The ID of the call to save the note for',
		routing: {
			send: {
				type: 'query',
				property: 'TapiCallID',
			},
		},
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		displayOptions: { show: showOnlyForPhoneCallSaveNote },
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		description: 'The note to save for the call',
		routing: {
			send: {
				type: 'query',
				property: 'Notice',
			},
		},
	},
];
