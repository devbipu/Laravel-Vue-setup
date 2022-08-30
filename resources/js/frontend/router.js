import {createRouter, createWebHistory} from 'vue-router';







//All routes 
const routes = [
  { 
    path: '/',
    name: 'Home', 
    component: () => import('./pages/home.vue') 
  },
  { 
    path: '/posts',
    name: 'Posts', 
    component: () => import('./pages/posts.vue') 
  },
  { 
    path: '/posts/single', 
    name: 'PostSingle',
    component: () => import('./pages/postsingle.vue') 
  },
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;