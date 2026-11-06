import type { INodeProperties } from 'n8n-workflow';
import { getManyDescription } from '../../shared/getMany';

const showOnlyForSupporters = {
	resource: ['supporter'],
};

export const supporterDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSupporters,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many supporters',
				description: 'Get many supporters including their group assignment',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetSupporters',
					},
				},
			},
		],
		default: 'getAll',
	},
	...getManyDescription('supporter'),
];
