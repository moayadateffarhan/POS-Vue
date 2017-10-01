// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import Vuex from 'vuex';
import english from './assets/i18n/en.json';
import arabic from './assets/i18n/ar.json';
import chinese from './assets/i18n/ch.json';



// load vuex i18n module
import vuexI18n from 'vuex-i18n';
/* eslint-disable no-new */
Vue.use(Vuex);
const store = new Vuex.Store();
Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', english);
Vue.i18n.add('ar', arabic);
Vue.i18n.add('ch',chinese);

// set the start locale to use
Vue.i18n.set('en');
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  
})
