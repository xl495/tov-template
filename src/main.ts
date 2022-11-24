import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// 你自定义的 css
import './styles/main.css'
import './styles/index.scss'

import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

import { setGlobalOptions } from 'vue-request'

setGlobalOptions({
	manual: true,
})

import '~/guard'

import App from './App.vue'

const app = createApp(App)

app.mount('#app')
