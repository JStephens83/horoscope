<template>
  <div class="blog-post">
    <!-- Titre de l'article -->
    <!-- <h1>{{ blogPost.title }}</h1> -->

    <!-- Métadonnées -->
    <!-- <div class="metadata">
      <span>Publié le : {{ formatDate(blogPost.date) }}</span> |
      <span>Par : {{ blogPost.author }}</span>
    </div> -->

    <!-- Image de couverture de l'article -->
    <!-- <img v-if="blogPost.image" :src="blogPost.image" :alt="blogPost.title" class="blog-post-image" /> -->

    <!-- Contenu de l'article -->
    <!-- <div class="content" v-html="blogPost.content"></div> -->

    <!-- Nav symboles zodiac -->
    <Symbols />
    
    <!-- Flux RSS général et spécifique -->
    <GlobalRssFeed /> <!-- Flux RSS global -->


    <!-- Publicité sous le contenu principal -->
    <!-- <Advertisement :type="'banner'" position="below-content" /> -->

    <!-- Section de recommandations d'articles similaires -->
    <!-- <div class="related-articles">
      <h3>Articles similaires</h3>
      <ul>
        <li v-for="related in relatedArticles" :key="related.id"> -->
          <!-- <router-link :to="`/article/${related.id}`">{{ related.title }}</router-link> -->
        <!-- </li>
      </ul>
    </div> -->

    <!-- Publicité en bas de page -->
    <!-- <Advertisement :type="'large-banner'" position="bottom-page" /> -->
  </div>
</template>

<script setup>
  // import { ref, onMounted } from 'vue';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Symbols from '@/components/Symbols.vue';
  import GlobalRssFeed from '@/components/GlobalRssFeed.vue';
  // Composant de publicité
  // import Advertisement from '@/components/SiteWrapperAd.vue';

  const route = useRoute();

  // Récupérer l'id du signe à partir de l'URL
  const signId = computed(() => route.params.signId || null);

  // Articles similaires
  // const relatedArticles = ref([]); 

  // Fonction pour récupérer des articles similaires
  // const fetchRelatedArticles = async () => {
  //   try {
  //     const response = await fetch(`https://api.example.com/articles?relatedTo=${articleId}`);
  //     relatedArticles.value = await response.json();
  //   } catch (error) {
  //     console.error('Erreur lors du chargement des articles similaires:', error);
  //   }
  // };

  // Formatte la date pour un affichage lisible
  // const formatDate = (date) => new Date(date).toLocaleDateString('fr-FR', {
  //   year: '2024',
  //   month: '10',
  //   day: '30'
  // });

  // Charge les données de l'article au montage du composant
  // onMounted(() => {
    // fetchBlogPost();
    // fetchRelatedArticles();
  // });

  // return {
  //   blogPost,
    // relatedArticles,
    // RssFeed,
    // formatDate
  // };
</script>

<style scoped>
.blog-post {
  max-width: 100%;
  margin: auto;
  padding: 16px;
}

.metadata {
  font-size: 0.9em;
  color: #000;
  margin-bottom: 12px;
}

.blog-post-image {
  width: 100%;
  height: auto;
  margin: 16px 0;
}

.content {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
}
</style>
