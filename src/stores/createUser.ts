import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state() {
		return {
			token: null,
			userInfo: {
				WebToken: '',
				ApiToken: '',
				UserName: null,
			},
		}
	},
	persist: true,
})
