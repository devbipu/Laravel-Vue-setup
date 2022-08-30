import {createRouter, createWebHistory} from 'vue-router';
import Dashbaord from './pages/dashboard.vue';
import Posts from './pages/posts.vue';
const routes = [
  { 
    path: '/admin/dashboard', 
    component: Dashbaord 
  },
  { 
    path: '/admin/posts', 
    component: Posts 
  },
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;