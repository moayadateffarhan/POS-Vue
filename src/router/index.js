import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/Hello'
import Hello2 from '@/components/hello2/Hello2'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/hello2',
      name: 'Hello2',
      component: Hello2,
    }
  ]
})
