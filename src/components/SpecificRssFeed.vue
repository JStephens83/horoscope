<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.guid">
        <h2>{{ article.title }}</h2>
        <p v-html="article.description"></p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import belierImg from '@/assets/img_signs/aries_zodiac.webp'
import taureauImg from '@/assets/img_signs/taurus_zodiac.webp'
import viergeImg from '@/assets/img_signs/virgo_zodiac.webp'
import capricornImg from '@/assets/img_signs/capricorn_zodiac.webp'
import balanceImg from '@/assets/img_signs/balance_zodiac.webp'
import poissonImg from '@/assets/img_signs/poisson_zodiac.webp'
import sagittaireImg from '@/assets/img_signs/sagittaire_zodiac.webp'
import scorpionImg from '@/assets/img_signs/scorpion_zodiac.webp'
import verseauImg from '@/assets/img_signs/verseau_zodiac.webp'
import gemeauImg from '@/assets/img_signs/gemeau_zodiac.webp'
import lionImg from '@/assets/img_signs/lion_zodiac.webp'
import cancerImg from '@/assets/img_signs/cancer_zodiac.webp'

const articles = ref([]);
const route = useRoute();
const sign = ref(route.params.signId);

// Mapping des signes vers leurs flux RSS
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

const zodiacImages = {
  belier: belierImg,
  taureau: taureauImg,
  gemeaux: gemeauImg,
  cancer: cancerImg,
  lion: lionImg,
  vierge: viergeImg,
  balance: balanceImg,
  scorpion: scorpionImg,
  sagittaire: sagittaireImg,
  capricorne: capricornImg,
  verseau: verseauImg,
  poisson: poissonImg,
};

// Fonction pour charger le flux RSS
const loadSpecificRssFeed = async () => {
  const url = zodiacUrls[sign.value];
  const specificResponse = await axios.get('https://www.votrehoroscopedujour.fr/proxy/proxy.php?url',
    {
      params: {url},
    });

  if (!url) {
    console.error(`Aucune URL trouvée pour le signe : ${sign.value}`);
    return;
  }

  try {
    const rawXml = await specificResponse.data;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rawXml, 'application/xml');

    const items = xmlDoc.getElementsByTagName('item');
    articles.value = Array.from(items).map(item => {
      //Extraction et nettoyage de la description      
      const rawDescription = item.getElementsByTagName('description')[0]?.textContent || '';

      // Nettoyage de la description avec DOMParser
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = rawDescription;
      const centers = tempDiv.querySelectorAll('center');

      if (centers.length > 0) {
        const lastCenter = centers[centers.length - 1];
        lastCenter.remove();
      }

      let cleanedDescription = tempDiv.innerHTML;

      // Remplacement de l'image dans la description
      const imageRegex = /<img[^>]+src="([^"]+)"[^>]*>/;
      const zodiacImage = zodiacImages[sign.value]; 
      
      // Image personnalisée pour le signe:
      if (zodiacImage && imageRegex.test(rawDescription)) {
        cleanedDescription = cleanedDescription.replace(imageRegex, `<img src="${zodiacImage}" alt="Illustration du signe ${sign.value}" />`);
      }

      return {
        title: item.getElementsByTagName('title')[0]?.textContent || 'Sans titre',
        picture: zodiacImage,
        description: cleanedDescription,
        link: item.getElementsByTagName('link')[0]?.textContent || '',
        guid: item.getElementsByTagName('guid')[0]?.textContent || '',
        date: item.getElementsByTagName('pubDate')[0]?.textContent || '',
      };
    });
  } catch (error) {
    console.error(`Erreur lors du chargement du flux RSS pour le signe ${sign.value} :`, error);
  }
};

// Recharger le flux RSS si le signe change
watch(() => route.params.sign, async (newSign) => {
  sign.value = newSign;
  await loadSpecificRssFeed();
});

onMounted(loadSpecificRssFeed);
</script>

<style scoped>
h2 {
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0 0 0;
}

ul.articles {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
}

ul.articles li {
  width: 50%;  
  padding: 0 5px;
  margin: 15px 0;
}

ul.articles li img{
  width: 100%;
}

.rss-feed {
  margin-top: 20px;
}

.rss-feed h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.rss-feed ul {
  list-style-type: none;
  padding: 0;
}

.rss-feed li {
  margin-bottom: 15px;
  list-style-type: none;
}

.rss-feed a {
  font-weight: bold;
  color: #0056b3;
  text-decoration: none;
}

.rss-feed a:hover {
  text-decoration: underline;
}

.rss-feed p {
  font-size: 0.9em;
  color: #333;
}

div[signid] ul {
  padding: 0;
}

div[signid] ul img {  
  width: 100%;
}

div[signid] ul>li b {  
  font-weight: 400;
}
</style>
