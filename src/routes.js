import DashView from './components/Dash.vue';
import LoginView from './components/Login.vue';
import NotFoundView from './components/404.vue';

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue';

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: { description: 'Overview of Sales, Products & Targets' }
      }
    ]
  },
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
];

export default routes;
