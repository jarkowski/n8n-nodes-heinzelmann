import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { categoryDescription } from './resources/category';
import { contactDescription } from './resources/contact';
import { phoneCallDescription } from './resources/phoneCall';
import { supportGroupDescription } from './resources/supportGroup';
import { supporterDescription } from './resources/supporter';
import { ticketDescription } from './resources/ticket';
import { ticketEventDescription } from './resources/ticketEvent';
import { ticketFilterDescription } from './resources/ticketFilter';
import { ticketTypeDescription } from './resources/ticketType';

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
						name: 'Category',
						value: 'category',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Phone Call',
						value: 'phoneCall',
					},
					{
						name: 'Support Group',
						value: 'supportGroup',
					},
					{
						name: 'Supporter',
						value: 'supporter',
					},
					{
						name: 'Ticket',
						value: 'ticket',
					},
					{
						name: 'Ticket Event',
						value: 'ticketEvent',
					},
					{
						name: 'Ticket Filter',
						value: 'ticketFilter',
					},
					{
						name: 'Ticket Type',
						value: 'ticketType',
					},
				],
				default: 'ticket',
			},
			...categoryDescription,
			...contactDescription,
			...phoneCallDescription,
			...supportGroupDescription,
			...supporterDescription,
			...ticketDescription,
			...ticketEventDescription,
			...ticketFilterDescription,
			...ticketTypeDescription,
		],
	};
}
