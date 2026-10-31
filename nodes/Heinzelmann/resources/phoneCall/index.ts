import type { INodeProperties } from 'n8n-workflow';
import { wrapPlainResponse } from '../../shared/wrapPlainResponse';
import { phoneCallCreateDescription } from './create';
import { phoneCallGetManyDescription } from './getAll';
import { phoneCallSaveNoteDescription } from './saveNote';

const showOnlyForPhoneCalls = {
	resource: ['phoneCall'],
};

export const phoneCallDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPhoneCalls,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a phone call',
				description: 'Save a call in Heinzelmann',
				routing: {
					request: {
						method: 'POST',
						url: '/api/SaveTapiCall',
					},
					output: {
						postReceive: [wrapPlainResponse],
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many phone calls',
				description: 'Get many calls of the TAPI user',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/TapiCalls/{{$parameter.callState}}',
					},
				},
			},
			{
				name: 'Save Note',
				value: 'saveNote',
				action: 'Save a note for a phone call',
				description: 'Save a note for a call',
				routing: {
					request: {
						method: 'POST',
						url: '/api/SaveCallNotice',
					},
					output: {
						postReceive: [wrapPlainResponse],
					},
				},
			},
		],
		default: 'getAll',
	},
	...phoneCallCreateDescription,
	...phoneCallGetManyDescription,
	...phoneCallSaveNoteDescription,
];
