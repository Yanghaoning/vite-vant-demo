// router/index.js文件

import { createRouter, createWebHashHistory } from 'vue-router'

// !!!注意：.vue不能省略，否则会报错，项目不能运行，如下错误
/*
  index.js:3 GET http://localhost:3000/src/components/Home net::ERR_ABORTED 404 (Not Found)
  vue-router.js:3293 TypeError: Failed to fetch dynamically imported module: http://localhost:3000/src/components/Home
*/
// !!!注意：路由中名称和引入文件路径及文件名需要保证大小写一致，否则会导致热更新失效
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
