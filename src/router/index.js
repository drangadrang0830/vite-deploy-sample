import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/aboutcopy',
      name: 'aboutcopy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutCopy.vue'),
    },
    {
      path: '/attribute',
      name: 'AttributeProperty',
      component: () => import('../views/AttributeProperty.vue'),
    },
    {
      path: '/ifandfor',
      name: 'IfAndFor',
      component: () => import('../views/IfAndFor.vue'),
    },
    {
      path: '/formcontrol',
      name: 'FormControl',
      component: () => import('../views/FormControl.vue'),
    },
    {
      path: '/shoppingstore', // 商店外框
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'cart', // 商店內容
          component: () => import('../views/CartView.vue'),
        },
      ],
    },
    {
      path: '/testpage',
      name: 'TestPage',
      component: () => import('../views/TestPage.vue'),
      children: [
        {
          path: 'easycomponents',
          component: () => import('../views/EasyComponents.vue'),
        },
        {
          path: 'gridview',
          component: () => import('../views/GridView.vue'),
        },
        {
          path: 'treeview',
          component: () => import('../views/TreeView.vue'),
        },
      ],
    },
    {
      path: '/piniastore',
      name: 'PiniaStore',
      component: () => import('../views/PiniaStore.vue'),
    },
  ],
})

export default router
