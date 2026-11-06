import type { INodeProperties } from 'n8n-workflow';
import { getManyDescription } from '../../shared/getMany';

const showOnlyForCategoryGetMany = {
	operation: ['getAll'],
	resource: ['category'],
};

export const categoryGetManyDescription: INodeProperties[] = [
	...getManyDescription('category'),
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: showOnlyForCategoryGetMany },
		options: [
			{
				displayName: 'Active Category ID',
				name: 'activeCategoryId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description:
					'The ID of the already selected category, which is marked as selected or active',
				routing: {
					send: {
						type: 'query',
						property: 'activecatid',
					},
				},
			},
			{
				displayName: 'Category Type',
				name: 'categoryType',
				type: 'options',
				options: [
					{
						name: 'Type 1',
						value: 1,
						description: 'Disables the determination of child categories',
					},
					{
						name: 'Type 2',
						value: 2,
					},
				],
				default: 1,
				description: 'The type of the categories to return',
				routing: {
					send: {
						type: 'query',
						property: 'cid',
					},
				},
			},
			{
				displayName: 'Context',
				name: 'context',
				type: 'options',
				options: [
					{
						name: 'Ticket',
						value: 'ticket',
					},
				],
				default: 'ticket',
				description: 'The context of the query. Currently, only the ticket context is relevant.',
				routing: {
					send: {
						type: 'query',
						property: 'type',
					},
				},
			},
			{
				displayName: 'Parent Category ID',
				name: 'parentCategoryId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'Only return the subcategories of the category with this ID',
				routing: {
					send: {
						type: 'query',
						property: 'id',
					},
				},
			},
			{
				displayName: 'Ticket Type ID',
				name: 'ticketTypeId',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberPrecision: 0,
				},
				default: 0,
				description: 'Only return the categories that are visible for the ticket type with this ID',
				routing: {
					send: {
						type: 'query',
						property: 'typeid',
					},
				},
			},
		],
	},
];
