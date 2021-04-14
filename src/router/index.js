import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export const constantRouterMap = [
    { path: '/', component: () => import('@/views/login') },
    { path: '/success', component: () => import('@/views/success') },
    { path: '/error', component: () => import('@/views/error'), hidden: true },
    { path: '/test1', component: () => import('@/views/test1') },
]

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})