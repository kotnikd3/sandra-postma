import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TherapyView from '@/views/TherapyView.vue'
import SessionsView from '@/views/SessionsView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ContactView from '@/views/ContactView.vue'


const router = createRouter({
  history: createWebHistory('/'),
//   linkActiveClass: 'is-active',
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/therapie',
        name: 'therapy',
        component: TherapyView
    },
    {
        path: '/sessies',
        name: 'sessions',
        component: SessionsView
    },
    {
        path: '/over',
        name: 'about',
        component: AboutMeView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on every navigation
    if (savedPosition) {
        return savedPosition; // This handles browser back/forward
    } else {
        return { top: 0 }; // Scroll to top of the page
    }
  }
})

export default router
