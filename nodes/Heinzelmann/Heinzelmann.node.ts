import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { ticketDescription } from './resources/ticket';

export class Heinzelmann implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Heinzelmann',
		name: 'heinzelmann',
		icon: { light: 'file:heinzelmann.svg', dark: 'file:heinzelmann.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Heinzelmann REST API',
		defaults: {
			name: 'Heinzelmann',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'heinzelmannApi', required: true }],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Ticket',
						value: 'ticket',
					},
				],
				default: 'ticket',
			},
			...ticketDescription,
		],
	};
}
