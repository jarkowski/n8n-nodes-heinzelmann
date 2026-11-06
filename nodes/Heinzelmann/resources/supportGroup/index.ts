import type { INodeProperties } from 'n8n-workflow';
import { getManyDescription } from '../../shared/getMany';

const showOnlyForSupportGroups = {
	resource: ['supportGroup'],
};

export const supportGroupDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSupportGroups,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many support groups',
				description: 'Get many support groups including their active supporters',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetGroups',
					},
				},
			},
		],
		default: 'getAll',
	},
	...getManyDescription('supportGroup'),
];
