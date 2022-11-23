import axios from 'axios'

// console.log('window.global_url', window.global_url.SERVICE_PATH)

const http = axios.create({
	baseURL: '/api',
})

http.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token')
		if (token && config.headers) {
			config.headers['token'] = token
		}
		return config
	},
	(error) => {
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

http.interceptors.response.use(
	(response) => {
		const res = response.data
		if (response.status === 500) {
			return Promise.reject(new Error(res.message || 'Error'))
		} else {
			return res
		}
	},
	(error) => {
		console.log('接口信息报错' + error)
		return Promise.reject(error)
	}
)

export default http
