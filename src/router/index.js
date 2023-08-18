import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          path: 'about',
          component: () => import('../views/front/AboutView.vue'),
        },
        {
          path: 'news',
          component: () => import('../views/front/NewsView.vue'),
        },
        {
          path: 'works',
          component: () => import('../views/front/WorksView.vue'),
        },
        {
          path: 'schedule',
          component: () => import('../views/front/ScheduleView.vue'),
        },
        {
          path: 'appointment',
          component: () => import('../views/front/AppointmentView.vue'),
        },
        {
          path: 'blog',
          component: () => import('../views/front/BlogView.vue'),
        },
        {
          path: 'contact',
          component: () => import('../views/front/ContactView.vue'),
        }
      ]
    },
    // {
    //   path: '/admin',
    //   name: '',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
