<template>
  <div>
    <h1>Choisissez votre signe</h1>
    <nav class="symbols">
      <ul class="firstLine">
        <li v-for="link in links.slice(0, 6)" :key="link.name">
          <div class="sign">
            <router-link :to="link.path">
              <p class="letter">{{ link.letter }}</p>
              {{ link.name }}
            </router-link>
          </div>
        </li>
      </ul>
      <ul class="secondLine">
        <li v-for="link in links.slice(-6)" :key="link.name">
          <div class="sign">
            <router-link :to="link.path">
              <p class="letter">{{ link.letter }}</p>
              {{ link.name }}</router-link>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Liste de liens vers les pages souhaitées
const links = ref([
  { name: 'Bélier', path: '/sign/belier', letter: 'A' },
  { name: 'Taureau', path: '/sign/taureau', letter: 'B' },
  { name: 'Gémeaux', path: '/sign/gemeaux', letter: 'C' },
  { name: 'Cancer', path: '/sign/cancer', letter: 'D' },
  { name: 'Lion', path: '/sign/lion', letter: 'E' },
  { name: 'Vierge', path: '/sign/vierge', letter: 'F' },
  { name: 'Balance', path: '/sign/balance', letter: 'G' },
  { name: 'Scorpion', path: '/sign/scorpion', letter: 'H' },
  { name: 'Sagittaire', path: '/sign/sagittaire', letter: 'J' },
  { name: 'Capricorne', path: '/sign/capricorne', letter: 'K' },
  { name: 'Verseau', path: '/sign/verseau', letter: 'L' },
  { name: 'Poisson', path: '/sign/poisson', letter: 'M' },
]);
</script>

<style scoped>
  h1 {
    text-align: center;
    font-weight: 200;
    font-size: 2rem;
    text-shadow: 1px 1px 2px grey;
    margin-bottom: 5vh;
  }

  nav {
    font-size: 1rem;
    padding: 2px;
    margin: 10px;
  }

  nav .firstLine, nav .secondLine {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    gap: 10px;
    list-style-type: none;
    padding: 0;
  }

  nav .sign a {
    margin: 5px 10px;
    display: flex;
    flex-direction: column;  
    align-items: center;
  }

  .symbols li a {
    text-decoration: none;
    color: #000;
    overflow: hidden;
    transition: text-shadow 1s;
    transition-timing-function: ease;
    transition-duration: 0.5s;
  }

  .symbols li a:hover {
    text-shadow: 1px 1px 2px grey;
  }

  .symbols .sign p {
    font-family: 'ZodiacFont';
    font-size: 2rem;
  }

  .letter {
    transition: all 0.3s;
    box-sizing: border-box;
    max-width: 100%;
  }

  .letter:hover {
    transform: rotate(360deg);
  }

  @media (max-width: 767px) {
    nav.symbols {
      display: flex;
      flex-wrap: wrap;
      min-width: 100%;
    }

    nav.symbols ul {  
      flex-wrap: wrap;
    }

    
  }
</style>
