import type { INodeProperties } from 'n8n-workflow';

/**
 * "Return All" and "Limit" fields for the `getAll` operation of a resource.
 * The Heinzelmann API has no pagination, so the limit only trims the received results.
 */
export function getManyDescription(resource: string): INodeProperties[] {
	const showOnlyForGetMany = {
		operation: ['getAll'],
		resource: [resource],
	};

	return [
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			displayOptions: {
				show: showOnlyForGetMany,
			},
			default: false,
			description: 'Whether to return all results or only up to a given limit',
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			displayOptions: {
				show: {
					...showOnlyForGetMany,
					returnAll: [false],
				},
			},
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
			routing: {
				output: {
					maxResults: '={{$value}}',
				},
			},
		},
	];
}
