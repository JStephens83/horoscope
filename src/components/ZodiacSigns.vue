<template>
  <div>
    <SpecificRssFeed />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'; 
  import SpecificRssFeed from './SpecificRssFeed.vue';
  import { useCanonical } from '@/composables/useCanonical'

  useCanonical()

  const route = useRoute();
  const signId = route.params.signId;

  // Données des signes
  const signData = ref({
    name: '',
    description: ''
  });

  // Dictionnaire des signes
  const zodiacSigns = {
    belier: { name: 'Bélier', description: 'Le Bélier est un signe dynamique et énergique.' },
    taureau: { name: 'Taureau', description: 'Le Taureau est stable, fiable et déterminé.' },
    gemeaux: { name: 'Gémeaux', description: 'Les Gémeaux sont curieux et adaptables.' },
    cancer: { name: 'Cancer', description: 'Le Cancer est émotionnel, protecteur et intuitif.' },
    lion: { name: 'Lion', description: 'Le Lion est un leader naturel et fier.' },
    vierge: { name: 'Vierge', description: 'La Vierge est pratique, méthodique et analytique.' },
    balance: { name: 'Balance', description: 'La Balance est équilibrée, sociable et juste.' },
    scorpion: { name: 'Scorpion', description: 'Le Scorpion est intense, mystérieux et passionné.' },
    sagittaire: { name: 'Sagittaire', description: 'Le Sagittaire est optimiste, aventureux et indépendant.' },
    capricorne: { name: 'Capricorne', description: 'Le Capricorne est ambitieux, pratique et discipliné.' },
    verseau: { name: 'Verseau', description: 'Le Verseau est visionnaire, inventif et humanitaire.' },
    poissons: { name: 'Poissons', description: 'Les Poissons sont intuitifs, sensibles et empathiques.' }
  };
  
  // Chargement des données à l'initialisation
  onMounted(() => {
    // Récupération des données à partir de l'id en prop
    signData.value = zodiacSigns[signId] || { name: 'Inconnu', description: 'Signe introuvable.' };
  });
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>