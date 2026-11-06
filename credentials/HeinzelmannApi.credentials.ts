import type {
	IAuthenticate,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HeinzelmannApi implements ICredentialType {
	name = 'heinzelmannApi';

	displayName = 'Heinzelmann API';

	icon = {
		light: 'file:../nodes/Heinzelmann/heinzelmann.svg',
		dark: 'file:../nodes/Heinzelmann/heinzelmann.dark.svg',
	} as const;

	// Link to your community node's README
	documentationUrl = 'https://github.com/jarkowski/n8n-nodes-heinzelmann/blob/main/README.md#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			required: true,
			default: '',
			placeholder: 'http://heinzelmann.example.com/heinzelmann/public',
			description: 'Base URL of your Heinzelmann API, without a trailing slash. For a default installation, this should be http(s)://&lt;BASE URL&gt;/heinzelmann/public',
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
			url: '/api/GetGroups',
			method: 'GET',
			headers: { Accept: 'application/json' },
			json: true,
			// Do not follow a redirect to a login page, which would return 200 for an invalid token
			disableFollowRedirect: true,
		},
	};
}
