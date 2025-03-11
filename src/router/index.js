import { createRouter, createWebHistory } from 'vue-router'
import ZodiacSigns from '@/components/ZodiacSigns.vue';
import BlogPost from '@/views/BlogPost.vue';
import PolitiqueConfidentialite from '@/views/PolitiqueConfidentialite.vue';

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: BlogPost,
  },
  { 
    path: '/sign/:signId', 
    name: 'ZodiacSign', 
    component: ZodiacSigns, 
    props: true 
  },
  { path: '/politique-confidentialite', 
    name: 'PolitiqueConfidentialite', 
    component: PolitiqueConfidentialite,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router