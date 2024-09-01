// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from "@/components/Dashboard1.vue"

const routes = [
  {
    path: '/',
    redirect: '/dashboard', // Redirect root to dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  // Add other routes here as needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
