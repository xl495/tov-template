import { resolve } from 'path'
import { env } from './shared/env'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'
import Markdown from './plugins/markdown'
import Windicss from 'vite-plugin-windicss'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Rmovelog from 'vite-plugin-removelog'
import ViteRestart from 'vite-plugin-restart'
import I18n from '@intlify/vite-plugin-vue-i18n'
import { viteMockServe } from 'vite-plugin-mock'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-meta-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import viteCompression from 'vite-plugin-compression'
import { markdownWrapperClasses } from './plugins/markdown'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import autoprefixer from 'autoprefixer'

import {
	ArcoResolver,
	IduxResolver,
	VantResolver,
	DevUiResolver,
	QuasarResolver,
	ViewUiResolver,
	InklineResolver,
	TDesignResolver,
	NaiveUiResolver,
	Vuetify3Resolver,
	VarletUIResolver,
	LayuiVueResolver,
	PrimeVueResolver,
	HeadlessUiResolver,
	ElementPlusResolver,
	AntDesignVueResolver,
	VueUseComponentsResolver,
} from 'unplugin-vue-components/resolvers'
import Modules from 'vite-plugin-use-modules'
import { GenerateTitle } from './plugins/html'
import VueMarcos from 'unplugin-vue-macros/vite'
import { AutoImportResolvers, normalizeResolvers } from './shared/resolvers'

export default () => {
	return [
		// https://github.com/sxzz/unplugin-vue-macros/blob/main/README-zh-CN.md
		VueMarcos({
			hoistStatic: true,
			defineOptions: true,
		}),
		// https://github.com/posva/unplugin-vue-router
		VueRouter({
			routesFolder: 'src/pages',
			extensions: ['md', 'vue', 'tsx'],
			dts: 'presets/types/type-router.d.ts',
		}),
		// 模块自动加载
		Modules({
			auto: true,
		}),
		// 生成 title
		GenerateTitle(),
		// vue 官方插件，用来解析 sfc
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),
		// markdown 编译插件
		Markdown(),
		// 布局系统
		Layouts(),
		// 调试工具
		Inspect({
			enabled: env.VITE_APP_INSPECT,
		}),
		// windicss 插件
		Windicss({
			safelist: markdownWrapperClasses,
		}),
		// mock 服务
		viteMockServe({
			prodEnabled: env.VITE_APP_MOCK_IN_PRODUCTION,
		}),
		// https://icones.netlify.app/
		Icons({
			autoInstall: true,
		}),
		// 组件自动按需引入
		Components({
			extensions: ['md', 'vue', 'tsx'],
			dts: resolve(__dirname, './types/components.d.ts'),
			types: [
				{
					from: 'vue-router',
					names: ['RouterLink', 'RouterView'],
				},
			],
			resolvers: normalizeResolvers({
				onlyExist: [
					[VantResolver(), 'vant'],
					[QuasarResolver(), 'quasar'],
					[DevUiResolver(), 'vue-devui'],
					[NaiveUiResolver(), 'naive-ui'],
					[Vuetify3Resolver(), 'vuetify'],
					[PrimeVueResolver(), 'primevue'],
					[ViewUiResolver(), 'view-design'],
					[LayuiVueResolver(), 'layui-vue'],
					[VarletUIResolver(), '@varlet/ui'],
					[IduxResolver(), '@idux/components'],
					[TDesignResolver(), 'tdesign-vue-next'],
					[InklineResolver(), '@inkline/inkline'],
					[ElementPlusResolver(), 'element-plus'],
					[HeadlessUiResolver(), '@headlessui/vue'],
					[ArcoResolver(), '@arco-design/web-vue'],
					[AntDesignVueResolver(), 'ant-design-vue'],
					[VueUseComponentsResolver(), '@vueuse/components'],
				],
				include: [IconsResolver()],
			}),
		}),
		// api 自动按需引入
		env.VITE_APP_API_AUTO_IMPORT &&
			AutoImport({
				dirs: [
					env.VITE_APP_API_AUTO_IMPORT && 'src/stores/**/*.ts',
					env.VITE_APP_API_AUTO_IMPORT && 'src/composables/**/*.ts',
				],
				dts: './presets/types/auto-imports.d.ts',
				imports: [
					'vue',
					'pinia',
					'vue-i18n',
					'@vueuse/core',
					VueRouterAutoImports,
				],
				resolvers: AutoImportResolvers,
				eslintrc: {
					enabled: true,
					globalsPropValue: true,
					filepath: 'presets/eslint/.eslintrc-auto-import.json',
				},
			}),
		// i18n 国际化支持
		I18n({
			runtimeOnly: true,
			compositionOnly: true,
			include: [resolve(__dirname, '../locales/**')],
		}),
		// 预设热重启服务
		ViteRestart({
			restart: ['.env*', 'presets/tov.[jt]s', 'presets/shared/**/*'],
		}),
		// tsx 支持
		vueJsx(),
		// 生产环境资源压缩
		viteCompression({
			// @ts-ignore
			algorithm: env.VITE_APP_COMPRESSINON_ALGORITHM,
		}),
		// 生产环境下移除 console.log, console.warn, console.error
		Rmovelog(),
		autoprefixer,
		require('postcss-pxtorem')({
			rootValue: 19.2, //换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px
			// unitPrecision: 5, //允许REM单位增长到的十进制数字。
			//propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
			propBlackList: ['font-size', 'border'], //黑名单
			exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
			// selectorBlackList: [], //要忽略并保留为px的选择器
			// ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
			// replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
			mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
			minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
		}),
	]
}
