import { resolve } from 'path'
import Tov from './presets/tov'
import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	define: {
		__VUE_OPTIONS_API__: false, // 明确不使用 options api
	},
	css: {
		preprocessorOptions: {},
	},
	server: {
		open: true,
		// 设置代理
		proxy: {
			'/api': {
				target: 'http://153sb59665.51mypc.cn:30904',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [Tov()],
})
