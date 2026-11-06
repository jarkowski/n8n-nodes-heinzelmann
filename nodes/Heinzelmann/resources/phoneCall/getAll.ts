import type { INodeProperties } from 'n8n-workflow';
import { getManyDescription } from '../../shared/getMany';
import { callStateOptions } from './callState';

const showOnlyForPhoneCallGetMany = {
	operation: ['getAll'],
	resource: ['phoneCall'],
};

export const phoneCallGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Call State',
		name: 'callState',
		type: 'options',
		displayOptions: { show: showOnlyForPhoneCallGetMany },
		options: callStateOptions,
		default: '1',
		required: true,
		description: 'The type of the calls to return',
	},
	...getManyDescription('phoneCall'),
];
