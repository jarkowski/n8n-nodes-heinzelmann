import type {
	IAuthenticate,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HeinzelmannApi implements ICredentialType {
	name = 'heinzelmannApi';

	displayName = 'Heinzelmann API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-heinzelmann?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			required: true,
			default: '',
			placeholder: 'https://heinzelmann.example.com',
			description: 'Base URL of your Heinzelmann API, without a trailing slash',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticate = async (credentials, requestOptions) => {
		requestOptions.baseURL = String(credentials.baseUrl).replace(/\/+$/, '');
		requestOptions.headers = {
			...requestOptions.headers,
			Authorization: `Bearer ${credentials.accessToken as string}`,
		};
		return requestOptions;
	};

	test: ICredentialTestRequest = {
		request: {
			url: '/GetTickets', // TODO: replace with a real authenticated endpoint of the Heinzelmann API
		},
	};
}
