import { createRouter, createWebHashHistory } from 'vue-router';
// 早期 Vue CLI import xxx from '../views/xxx.vue'; 會需要寫在最上面
// import Home from '../views/Home.vue';
// 下面是路由表
const routes = [
  {
    // header and footer
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        // 首頁 熱門景點
        path: '',
        component: () => import('@/views/Index.vue'),
      },
    ],
  },
  {
    path: '/attractions',
    name: 'Attractions',
    component: () => import('../views/Attractions.vue'),
  },
  // {
  //   path: '/products',
  //   name: 'routerdemo',
  //   component: () => import('@/views/RouterDemo.vue'),
  // },
  // {
  //   path: '/product/:id',
  //   name: 'id',
  //   component: () => import('@/views/RouterId.vue'),
  // },
];
// router 設定檔案
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
