import http from '~/utils/request'
import { HttpResponse } from './types'

export const getNewsList = (params?: any): HttpResponse => {
	return http.get(`/News/GetPageContentList`, { params })
}
