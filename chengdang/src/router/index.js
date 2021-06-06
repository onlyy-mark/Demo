import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import userInfo from '@/views/userinfo.vue'
import gatherInfo from '@/views/gatherinfo'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/',
    redirect:'/login',
  },
  {
    path:'/userinfo',
    name:'userinfo',
    component: userInfo
  },
  {
    path:'/gatherinfo',
    name:'gatherinfo',
    component: gatherInfo
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
});
//导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
