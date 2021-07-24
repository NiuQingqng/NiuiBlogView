import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Profile from '@/views/profile/Profile'
import Detail from '@/views/detail/Detail'
import UserLogin from '@/views/profile/childComponents/UserLogin'
import NewArticle from '@/components/content/newarticle/NewArticle'

Vue.use(Router)


let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail/:articleId',
      component: Detail
    },
    {
      path: '/profile/:userId',
      component: Profile
    },
    {
      path: '/profile',
      component: UserLogin
    },
    {
      path: '/newarticle',
      component: NewArticle
    }
  ]
})

export default router
