import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAuthenticationLogin = {
	operation: ['login'],
	resource: ['authentication'],
};

export const authenticationLoginDescription: INodeProperties[] = [
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		displayOptions: { show: showOnlyForAuthenticationLogin },
		default: '',
		required: true,
		description: 'The username of the Heinzelmann user',
		routing: {
			send: {
				type: 'query',
				property: 'username',
			},
		},
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: { show: showOnlyForAuthenticationLogin },
		default: '',
		required: true,
		description: 'The password of the Heinzelmann user',
		routing: {
			send: {
				type: 'query',
				property: 'password',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showOnlyForAuthenticationLogin },
		options: [
			{
				displayName: 'Remember Me',
				name: 'rememberMe',
				type: 'boolean',
				default: false,
				description: 'Whether to remember the user',
				routing: {
					send: {
						type: 'query',
						property: 'remember_me',
						value: '={{ $value ? 1 : 0 }}',
					},
				},
			},
		],
	},
];
