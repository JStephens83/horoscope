<template>
  <div class="blog-post">
    <!-- Nav symboles zodiac -->
    <Symbols />
    
    <!-- Flux RSS général et spécifique -->
    <GlobalRssFeed />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Symbols from '@/components/Symbols.vue';
  import GlobalRssFeed from '@/components/GlobalRssFeed.vue';

  const route = useRoute();

  // Récupérer l'id du signe à partir de l'URL
  const signId = computed(() => route.params.signId || null);
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
