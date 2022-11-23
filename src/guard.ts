import { router } from '~/modules/router'

// 此处书写各种路由守卫
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token')
	if (!token && to.fullPath !== '/login') {
		return next('/login')
	}
	next()
})
