import type { INodeProperties } from 'n8n-workflow';
import { authenticationLoginDescription } from './login';

const showOnlyForAuthentication = {
	resource: ['authentication'],
};

export const authenticationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAuthentication,
		},
		options: [
			{
				name: 'Login',
				value: 'login',
				action: 'Log in with username and password',
				description:
					'Authenticate with username and password to receive an access token. Usually not needed, as the access token is stored in the credentials.',
				routing: {
					request: {
						method: 'POST',
						url: '/api/auth/login',
					},
				},
			},
		],
		default: 'login',
	},
	...authenticationLoginDescription,
];
