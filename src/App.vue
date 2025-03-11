<template>
  <div>
    <header>
      <div class="wrapper">
        <div class="mainTitle">Votre horoscope du jour</div>

        <nav class="navLinks">
          <ul class="links" :class="{ 'show-menu': isMenuOpen }">
            <li>
              <router-link :to="`/`">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>
                Accueil
              </router-link>
            </li>
            <li v-for="sign in zodiacSigns" :key="sign.id">
              <router-link :to="`/sign/${sign.id}`" @click="closeMenu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>
                Horoscope {{ sign.name }}
              </router-link>
            </li>
          </ul>
          <a class="icon" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
          </a>
          <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>
        </nav>
        <!-- Emplacement pub 200px de haut entre header et contenu du site : 
         https://www.francetvpub.fr/specificites-techniques-du-numerique/specificites-display/ -->

      </div>
    </header>
    
    <SiteWrapperAd>
      <!-- Content -->
    </SiteWrapperAd>

    <footer>
      <p>Les horoscopes sont extraits de <a href="https://www.asiaflash.com" target="_blank" rel="noopener">AsiaFlash</a>.</p>
      <p>Images générées à l'aide de <a href="https://designer.microsoft.com/" target="_blank" rel="noopener">Microsoft Designer</a>.</p>
      <p><a href="#" onclick="tarteaucitron.userInterface.openPanel(); return false;">Gérer mes cookies</a></p>
    </footer>

  </div>
</template>

<script>
  import { ref } from 'vue';
  import SiteWrapperAd from '@/components/SiteWrapperAd.vue';
  import { RouterLink } from 'vue-router'
  // import { RouterView } from 'vue-router'

  // Nav
  const isMenuOpen = ref(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  export default {
    name: 'App', 
    components: {
      SiteWrapperAd,
      RouterLink
    },
    setup () { 
      const zodiacSigns  = ref([
        { id: 'belier', name: 'Bélier' },
        { id: 'taureau', name: 'Taureau' },
        { id: 'gemeaux', name: 'Gémeaux' },
        { id: 'cancer', name: 'Cancer' },
        { id: 'lion', name: 'Lion' },
        { id: 'vierge', name: 'Vierge' },
        { id: 'balance', name: 'Balance' },
        { id: 'scorpion', name: 'Scorpion' },
        { id: 'sagittaire', name: 'Sagittaire' },
        { id: 'capricorne', name: 'Capricorne' },
        { id: 'verseau', name: 'Verseau' },
        { id: 'poisson', name: 'Poisson' },
      ])

      return {
        zodiacSigns,
      }
    },
    data() {
      return {
        isMenuOpen: false, 
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; 
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
    },
  };
</script>

<style scoped>
header {
  line-height: 1.5;
  min-height: 200px; 
  /* position: fixed; */
  overflow: hidden;
  top: 0;
  z-index: 3;
  background: #fff;
  width: 100%;
}

header nav.navLinks {
  display: flex;
  justify-content: center;
  width : 100%;
}

header nav.navLinks > ul {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80vw;
  padding-left: 1vw;
}

header nav.navLinks > ul > li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 5px;
}

.navLinks ul li a {
  text-decoration: none;
  margin : 0 5px;
  font-weight: 200;
  transition: text-shadow 1s;
  transition-timing-function: ease;
  transition-duration: 0.5s;
}

.navLinks ul li a.router-link-active {
  text-shadow: 1px 1px 2px grey;
}

.navLinks ul li a:hover {
  text-shadow: 1px 1px 2px grey;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
}

.mainTitle {
  font-family: "Xanh Mono", monospace, "Public Sans", sans-serif, "Tapestry", serif;
  font-weight: 900;
  font-style: normal;
  font-size: 6vw;
}

nav a.icon {
  display: none;
  width: 4vw;
  position: absolute;  
  top: 2%;
  left: 2%;
  transform: translate(-2%, -2%);
  cursor: pointer;
}

nav ul.links li > a > svg {
  width: 1rem;
  display: none;
}

footer {
  display: flex;
  flex-direction: row;
}

footer p {
  margin: 0 10px;
}

footer p a {
  font-weight: 500;
}

@media (min-width: 727px) and (max-width: 1024px) {
  header {
    min-height: 8vh;
  }

  .mainTitle {
    font-size: 3rem;
    text-align: center;
    line-height: 3rem;
    padding-top: 1vh;
  }

  nav a.icon, nav ul.links li > a > svg {
    display: block;
    margin-right: 10px;
  }

  header nav ul.links {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    width: 250px;
    background-color: #fff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;;
    transform: translateX(0);
    transition: all 0.3s ease-in-out;
    padding-top: 1rem;
    z-index: 11;  
    padding-left: 1vw;
  }

  /* Ouverture menu mobile */
  .links.show-menu {
    left: 0;
  }

  .links li {
    margin: 1rem 0;
  }

  .links li a {
    display: flex;
    flex-direction: row;
    margin-right: 5px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  ul.articles {
    margin-top: 4vh;
  }
}

@media (max-width: 767px) {
  header {
    min-height: 8vh;
  }

  .mainTitle {
    font-size: 1.8rem;
    text-align: center;
    line-height: 3rem;
    padding-top: 1vh;
  }

  nav a.icon, nav ul.links li > a > svg {
    display: block;
  }

  header nav ul.links {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    width: 250px;
    background-color: #fff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;;
    transform: translateX(0);
    transition: all 0.3s ease-in-out;
    padding-top: 1rem;
    z-index: 11;
    padding-left: 1vw;
  }

  /* Ouverture menu mobile */
  .links.show-menu {
    left: 0;
  }

  .links li {
    margin: 1rem 0;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  ul.articles {
    margin-top: 4vh;
  }
}
</style>
