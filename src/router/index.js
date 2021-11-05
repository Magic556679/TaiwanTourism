import { createRouter, createWebHashHistory } from 'vue-router';
// 早期 Vue CLI import xxx from '../views/xxx.vue'; 會需要寫在最上面
import Home from '../views/Home.vue';
// 下面是路由表
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/attractions',
    name: 'Attractions',
    component: () => import('../views/Attractions.vue'),
  },
  {
    path: '/products',
    name: 'routerdemo',
    component: () => import('@/views/RouterDemo.vue'),
  },
  {
    path: '/product/:id',
    name: 'id',
    component: () => import('@/views/RouterId.vue'),
  },
];
// router 設定檔案
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
