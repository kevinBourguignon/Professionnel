import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// app.use(router)

// app.mount('#app')

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
