import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'

Vue.use(Router)

const Home = { template: '<div>5</div>' }
const Home2 = { template: '<div>15</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'Layout',
          name: 'Layout',
          component: Home
        },
        {
          path: 'Container',
          name: 'Container',
          component: Home2
        }
      ]
    }
  ]
})
