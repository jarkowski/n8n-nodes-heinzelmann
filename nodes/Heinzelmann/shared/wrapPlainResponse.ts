import type { PostReceiveAction } from 'n8n-workflow';

/**
 * Some endpoints answer with a plain value (e.g. an ID or a boolean).
 * Output it as `{ "data": <value> }`, like the HTTP Request node does. Objects are kept as they are.
 */
export const wrapPlainResponse: PostReceiveAction = {
	type: 'set',
	properties: {
		value:
			'={{ $response.body !== null && typeof $response.body === "object" ? $response.body : { data: $response.body } }}',
	},
};
