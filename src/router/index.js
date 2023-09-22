//本程序的所有路由设置
import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '../views/postPackage.vue'
import Login from '../components/loginCom.vue'
import infoCom from '../components/infoCom.vue'
import addrCom from '../components/addrFirstCom.vue'
import addCom from '../components/addrSecondCom.vue'
import forbidCom from '../components/forbiddenGoods.vue'
import packageCom from '../components/packageRPCom.vue'
import moneyCom from '../components/moneyQueryCom.vue'
import postAreaCom from "../components/postAreaCom.vue"
import postTwoCom from '../components/postAreaTwo.vue'
import accidentCom from '../components/accidentCom.vue'
import accidentRoot from '../components/accidentRoot.vue'
import chatRootCom from '../components/chatRoot.vue'
import addUser from '../components/addUser.vue'
import editAddr from '../components/editAddr.vue'
import setCom from '../components/setCom.vue'
import packDetail from '../components/packageDetail.vue'
import accidentDetail from '../components/accidentDetail.vue'
import billRootCom from '../components/billRootCom.vue'
import billDetail from '../components/billDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Post',
    component: Post
  },
  {
    path: '/bill',
    name: 'bill',
    component: billRootCom
  },
  {
    path: '/bill/detail',
    name: 'billDetail',
    component: billDetail
  },
  {
    path: '/accident',
    name: 'accident',
    component: accidentRoot
  },
  {
    path: '/accident/detail',
    name: 'accidentDetail',
    component: accidentDetail
  },
  {
    path: '/accident/com',
    name: 'accidentCom',
    component: accidentCom
  },
  {
    path: '/postArea',
    name: 'postArea',
    component: postAreaCom
  },
  {
    path: '/postWeight',
    name: 'postWeight',
    component: postTwoCom
  },
  {
    path: '/moneyQuery',
    name: 'moneyQuery',
    component: moneyCom
  },
  {
    path: '/check',
    name: 'check',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/checkPackage.vue')
  },
  {
    path: '/check/package',
    name: 'package',
    component: packageCom,
  },
  {
    path: '/check/package/detail',
    name: 'detail',
    component: packDetail,
  },
  {
    path: '/myspace',
    name: 'myspace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpa  ckChunkName: "about" */ '../views/mySpace.vue')
  },
  {
    path: '/myspace/address',
    name: 'address',
    component: addrCom
  },
  {
    path: '/myspace/set',
    name: 'set',
    component: setCom
  },
  {
    path: '/myspace/chat',
    name: 'chatRoot',
    component: chatRootCom
  },
  {
    path: '/myspace/address/add',
    name: 'add',
    component: addCom
  },
  {
    path: '/myspace/address/edit',
    name: 'editAddr',
    component: editAddr
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/login/addUser',
    name: 'addUser',
    component: addUser
  },
  {
    path: '/info',
    name: 'info',
    component: infoCom
  },
  {
    path: '/forbid',
    name: 'forbid',
    component: forbidCom
  },
]

const router = new VueRouter({
  routes
})

export default router
