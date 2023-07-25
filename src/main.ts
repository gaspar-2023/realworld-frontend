import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'
import registerGlobalComponents from './plugins/global-components'
import setAuthorizationToken from './plugins/set-authorization-token'

const app = createApp(App)
registerGlobalComponents(app)
setAuthorizationToken()
app.use(createPinia())
app.use(router)

app.mount('#app')
