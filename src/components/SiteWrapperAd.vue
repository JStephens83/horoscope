<template>
  <div class="pub-wrapper">
    <!-- Bandeau de fond couvrant la largeur totale de l'écran -->
    <div class="pub-background">
      <img v-if="adImage" :src="adImage" alt="Publicité en habillage" />
      <!-- <p>Emplacement habillage : https://www.francetvpub.fr/specificites-techniques-du-numerique/specificites-display/</p> -->
    </div>

    <!-- Contenu principal du site entouré par la publicité -->
    <div class="site-content">
      <router-view :key="$route.fullPath" />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import adImage from '@/assets/backgrounds/zodiacSigns.webp';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const signId = ref(route.params.signId);
const signData = ref(null); 

// Chargement données du signe
const fetchSignData = async () => {
  const zodiacUrls = {
    belier: 'https://www.asiaflash.com/horoscope/rss_horojour_belier.xml',
    taureau: 'https://www.asiaflash.com/horoscope/rss_horojour_taureau.xml',
    gemeaux: 'https://www.asiaflash.com/horoscope/rss_horojour_gemeaux.xml',
    cancer: 'https://www.asiaflash.com/horoscope/rss_horojour_cancer.xml',
    lion: 'https://www.asiaflash.com/horoscope/rss_horojour_lion.xml',
    vierge: 'https://www.asiaflash.com/horoscope/rss_horojour_vierge.xml',
    balance: 'https://www.asiaflash.com/horoscope/rss_horojour_balance.xml',
    scorpion: 'https://www.asiaflash.com/horoscope/rss_horojour_scorpion.xml',
    sagittaire: 'https://www.asiaflash.com/horoscope/rss_horojour_sagittaire.xml',
    capricorne: 'https://www.asiaflash.com/horoscope/rss_horojour_capricorne.xml',
    verseau: 'https://www.asiaflash.com/horoscope/rss_horojour_verseau.xml',
    poisson: 'https://www.asiaflash.com/horoscope/rss_horojour_poissons.xml',
  };

  const url = zodiacUrls[signId.value];
  if (url) {
    try {
      const zodiacUrlsResponse = await axios.get(`https://www.votrehoroscopedujour.fr/proxy/proxy.php?url=${(url)}`);
      const rawXml = await zodiacUrlsResponse.data;
      signData.value = rawXml; 
    } catch (error) {
      console.error('Erreur lors de la récupération des données du signe :', error);
    }
  }
};

// Recharger les données lorsque le signe change
watch(
  () => route.params.signId,
  (newSignId) => {
    signId.value = newSignId;
    fetchSignData();
  }
);


// URL de l'image de la publicité (pourrait être un lien externe ou un import)
// const adImage = ref('https://example.com/path/to/your-ad-image.jpg'); 

onMounted(() => {
  fetchSignData();
});
</script>

<style scoped>
.pub-wrapper {
  position: relative;
  display: flex !important;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  background-color: #f4f4f4;
  background-color: #000;
}

.pub-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.pub-background>p {
  position: absolute;
  top: 1rem
}

.pub-background img {
  width: 1600px; /* Largeur de l'habillage publicitaire */
  height: 960px; /* Hauteur de l'habillage */
  object-fit: cover;
}

.site-content {
  position: relative;
  z-index: 2; /* Place le contenu au-dessus de l'habillage */
  width: 1060px; /* Largeur maximale du contenu central */
  padding: 20px;
  background: white; /* Optionnel : Fond pour séparer du fond publicitaire */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Légère ombre pour démarquer */
  /* Quand il y aura de la pub : 
  margin-top: 200px; */
  margin-top: 20px;
  overflow: auto;
}

</style>
