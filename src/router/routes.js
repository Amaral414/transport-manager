const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/checkin',
    // Aqui posso colocar outro layout
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        component: () => import('src/pages/CheckInPage.vue'),
        name: 'checkin'  // Nome da rota para facilitar a navegação
      },
      { path: 'dashboard', component: () => import('pages/DashboardPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
