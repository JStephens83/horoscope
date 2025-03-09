<template>
  <div>
    <ul class="articles">
      <li v-for="article in articles" :key="article.guid">
        <a :href=article.link>
          <img :src="article.picture" />
          <h2>{{ article.title }}</h2>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const articles = ref([]);
const rssUrl = 'https://cdn-elle.ladmedia.fr/var/plain_site/storage/flux_rss/fluxAstrologie.xml';

// Chargement flux RSS global
const loadGlobalRssFeed = async () => {
  try {
    const globalResponse = await axios.get(`https://www.votrehoroscopedujour.fr/proxy/proxy.php?url=${(rssUrl)}`);

    const rawXml = await globalResponse.data;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rawXml, 'application/xml');

    const items = xmlDoc.getElementsByTagName('item');
    articles.value = Array.from(items).map(item => ({
      title: item.getElementsByTagName('title')[0]?.textContent || 'Sans titre',
      picture: item.getElementsByTagName('enclosure')[0]?.getAttribute('url') || '',
      description: item.getElementsByTagName('description')[0]?.textContent || '',
      link: item.getElementsByTagName('link')[0]?.textContent || '',
      guid: item.getElementsByTagName('guid')[0]?.textContent || '',
    }));
  } catch (error) {
    console.error('Erreur lors du chargement du flux RSS global :', error);
  }
};

onMounted(loadGlobalRssFeed);
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 3rem 0 2rem 0;
}

ul.articles {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  padding: 0;
  margin-top: 10vh;
}

ul.articles li {
  display: flex;
  flex-direction: column;
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

@media (max-width: 767px) {
  ul.articles li {
    width: 100%;
  }
}
</style>
