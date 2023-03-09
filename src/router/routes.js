const routes = [
  {
    path: '/',
    redirect: 'login',
    component: () => import('layouts'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('pages')
      },
      {
        path: '/lighting',
        name: 'lighting',
        component: () => import('pages/lighting')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('pages/dashboard')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
