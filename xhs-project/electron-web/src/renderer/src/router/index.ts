import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  // {
  //   path: '/login',
  //   component: () => import(/* webpackChunkName: "login" */ '../views/newView/components/TabSetting.vue')
  // },
  {
    path: '/view',
    component: () => import(/* webpackChunkName: "index" */ '../views/newView/index.vue'),
    meta:{
      keepAlive: true, // 需要缓存保存当前数据,或者使用keep-alive
    },
    redirect: '/video',
    children:[
      {
        path: '/video',
        component: () => import(/* webpackChunkName: "video-collection" */ '../views/newView/components/video.vue'),
        meta:{
          keepAlive: true, // 需要缓存保存当前数据,或者使用keep-alive
        }
      },
      {
        path: '/comment',
        component: () => import(/* webpackChunkName: "comment-collection" */ '../views/newView/components/comment.vue')
      },
      {
        path: '/follower',
        component: () => import(/* webpackChunkName: "follower-following" */ '../views/newView/components/follower.vue')
      },
    ]
  },
]
// Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式HASh模式
  history: createWebHashHistory(),
  routes
})
export default router
