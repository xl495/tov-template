import http from '~/utils/request'
import { HttpResponse } from './types'

export const useLogin = (userName: string, password: string): HttpResponse => {
	return http.post(`/User/Login?userName=${userName}&password=${password}`)
}
