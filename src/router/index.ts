import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AppLayout from '../components/app/AppLayout.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/hello',
    name: 'hello',
    component: ()=> import('@/views/HelloWorld.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    component: AppLayout,
    children: [
      {
        path: '*',
        component: () => import(/* webpackChunkName: "tinymce" */ '@/views/FormRequest.vue'),
        name: 'RequestForm',
        meta: { title: 'request' }
      },
    ]
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
