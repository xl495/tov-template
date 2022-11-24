import { router } from '~/modules/router'
import { useUserStore } from '~/stores/createUser'

// 此处书写各种路由守卫
router.beforeEach((to, from, next) => {
	const userStore = useUserStore()
	if (!userStore.token && to.fullPath !== '/login') {
		return next('/login')
	}
	next()
})
