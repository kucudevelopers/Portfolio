import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import about from '@/components/about.vue'
import homeContent from '@/components/homeContent.vue'
import portofolio from '@/components/portofolio.vue'
import portofolioDetails from '@/components/portofolioDetails.vue'
import team from '@/components/team.vue'
import profile from '@/components/profile.vue'
import contact from '@/components/contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about/:name',
      name: 'habout',
      component: about
    },
    {
      path: '/homeContent/:name',
      name: 'homeContent',
      component: homeContent
    },
    {
      path: '/portofolio/:name',
      name: 'portofolio',
      component: portofolio
    },
    {
      path: '/portofolioDetails/:name',
      name: 'portofolioDetails',
      component: portofolioDetails
    },
    {
      path: '/team/:name',
      name: 'team',
      component: team
    },
    {
      path: '/profile/:name',
      name: 'profile',
      component: profile
    },
    {
      path: '/contact/:name',
      name: 'contact',
      component: contact
    }
  ]
})
