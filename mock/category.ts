import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: 'apis/category',
		method: 'get',
		response: () => {},
	},
] as MockMethod[]
