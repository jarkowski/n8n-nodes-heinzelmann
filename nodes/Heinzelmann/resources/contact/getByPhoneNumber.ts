import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactGetByPhoneNumber = {
	operation: ['getByPhoneNumber'],
	resource: ['contact'],
};

export const contactGetByPhoneNumberDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		displayOptions: { show: showOnlyForContactGetByPhoneNumber },
		default: '',
		required: true,
		placeholder: '+49 123 4567890',
		description: 'The phone number to find the contact for',
	},
];
