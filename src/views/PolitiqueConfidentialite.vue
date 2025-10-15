<template>
  <div class="privacy-policy">
    <h1>Politique de Confidentialité</h1>
    <p>Bienvenue sur <strong>[Nom de ton site]</strong>. La confidentialité de nos visiteurs est une priorité.</p>

    <h2>1. Données collectées</h2>
    <p>Notre site ne collecte aucune donnée personnelle directement. Cependant, nous utilisons Google Analytics pour analyser le trafic.</p>

    <h2>2. Cookies utilisés</h2>
    <ul>
      <li><strong>Google Analytics (_ga, _gid, _gat, etc.) :</strong> Permet de suivre le nombre de visiteurs et leur comportement.</li>
    </ul>
    
    <h2>3. Pourquoi utilisons-nous ces données ?</h2>
    <ul>
      <li>Analyser les statistiques du site</li>
      <li>Améliorer l'expérience utilisateur</li>
      <li>Optimiser notre contenu</li>
    </ul>

    <h2>4. Gestion des cookies</h2>
    <p>Vous pouvez modifier vos préférences via le bouton "Gestion des cookies" en bas de page.</p>

    <h2>5. Vos droits</h2>
    <p>Conformément au RGPD, vous avez le droit d’accéder, modifier ou supprimer vos données.</p>


    <p><em>📅 Dernière mise à jour : 10.02.2025</em></p>
  </div>
</template>

<script setup>
  import { useCanonical } from '@/composables/useCanonical'

  useCanonical()
</script>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1, h2 {
  color: #333;
}

p, li {
  color: #555;
  line-height: 1.6;
}

ul {
  padding-left: 20px;
}
</style>
