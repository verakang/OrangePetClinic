import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          path: 'about',
          component: () => import('../views/front/AboutView.vue'),
        },
        {
          path: 'news',
          component: () => import('../views/front/NewsList.vue'),
        }, {
          path: 'newsitem/:id',
          component: () => import('../views/front/NewsItem.vue'),
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
          component: () => import('../views/front/BlogList.vue'),
        },
        {
          path: 'blogitem/:id',
          component: () => import('../views/front/BlogItem.vue'),
        },
        {
          path: 'contact',
          component: () => import('../views/front/ContactView.vue'),
        },{
          path: 'login',
          component: () => import('../views/front/LoginView.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../views/NotFound.vue')
        },
        {
          path: '/admin',
          component: () => import('../views/admin/AdminView.vue')
        }
      ]
    },
  ]
})

export default router
