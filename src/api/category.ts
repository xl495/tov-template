import http from '~/utils/request'
import { HttpResponse } from './types'

export const getCategory = (params?: any): HttpResponse => {
	return http.get(`apis/category`, { params })
}
