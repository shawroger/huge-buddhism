import Vue from 'vue'
import Router from 'vue-router'
import indexPage from './index_page/page.vue'
import yuanqiPage from './yuanqi_page/page.vue'
import shushPage from './shush_page/page.vue'
import jyPage from './jiaoyi_page/page.vue'

Vue.use(Router)

const router = new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: indexPage
    },
    {
      path: '/缘起',
      name: '缘起',
      component: yuanqiPage,
      meta: {
        title: '巨乘佛教 ——缘起'
      }
    },
    {
      path: '/殊胜',
      name: '殊胜',
      component: shushPage,
       meta: {
        title: '巨乘佛教 ——殊胜'
      }
    },
    {
      path: '/教义',
      name: '教义',
      component: jyPage,
       meta: {
        title: '巨乘佛教 ——教义'
      }
    },

  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
  }
  next();
})

export default router