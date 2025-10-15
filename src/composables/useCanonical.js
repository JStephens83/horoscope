// src/composables/useCanonical.js
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

export function useCanonical() {
  const route = useRoute()

  useHead({
    link: [
      {
        rel: 'canonical',
        href: `https://www.votrehoroscopedujour.fr${route.fullPath}`
      }
    ]
  })
}
