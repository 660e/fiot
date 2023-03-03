const routes = [
  {
    path: '/',
    component: () => import('pages')
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
  {
    path: '/home',
    component: () => import('layouts'),
    children: []
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
