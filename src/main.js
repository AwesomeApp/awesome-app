// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import cordova from './mobile-index'
import App from './App'
import store from './store'
import router from './router'

cordova.onDeviceReady = () => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
}

cordova.initialize()
