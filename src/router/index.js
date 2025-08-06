import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import Membersview from '@/views/Membersview.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ReportsView from '@/views/ReportsView.vue'
import RewardsView from '@/views/RewardsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/members',
      name: 'Members',
      component: Membersview,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
    },
    {
      path: '/reports',
      name: 'Reports',
      component: ReportsView,
    },
    {
      path: '/rewards',
      name: 'Rewards',
      component: RewardsView,
    },
  ],
})

export default router
