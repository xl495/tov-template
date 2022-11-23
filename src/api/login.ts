import http from '~/utils/request'

export const useLogin = (userName: string, password: string) => {
	return http.post('/User/Login', {
		userName,
		password,
	})
}
