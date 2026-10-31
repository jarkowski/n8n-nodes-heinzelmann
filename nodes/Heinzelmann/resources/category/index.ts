import type { INodeProperties } from 'n8n-workflow';
import { categoryGetManyDescription } from './getAll';

const showOnlyForCategories = {
	resource: ['category'],
};

export const categoryDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCategories,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many categories',
				description:
					'Get many categories, optionally filtered by category type, ticket type or parent',
				routing: {
					request: {
						method: 'GET',
						url: '/api/GetCategories',
					},
				},
			},
		],
		default: 'getAll',
	},
	...categoryGetManyDescription,
];
