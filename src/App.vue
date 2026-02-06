<script>
import { RouterView } from 'vue-router'
import Footer from './views/Footer.vue'
import logoImg from './assets/outside-croco.jpeg'

export default {
  name: 'App',
  components: {
    RouterView,
    Footer,
  },
  data() {
    return {
      drawer: false,
      logo: { text: 'Accueil', route: '/', icon: logoImg },
      tabs: [
        { text: 'À propos', route: '/about' },
        { text: 'Galerie', route: '/pictures' },
        { text: 'Tarifs', route: '/costs' },
      ],
      contact: { text: 'Contact', route: 'contact' },
      activeTab: null,
    }
  },
  methods: {
    resetTabs() {
      this.activeTab = null
    }
  }
}
</script>

<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="rgb(247, 247, 247)" height="48">
      <v-row align="center" justify="space-between" class="w-100 px-2">

        <!-- Hamburger mobile -->
        <v-app-bar-nav-icon
          class="d-sm-none"
          @click.stop="drawer = !drawer"
        />

        <!-- Logo -->
        <router-link :to="logo.route" @click.native="resetTabs" class="logo-link">
          <img :src="logo.icon" class="logo-img" />
        </router-link>

        <!-- Tabs desktop -->
        <v-tabs
          v-model="activeTab"
          class="d-none d-sm-flex ml-auto"
          slider-color="transparent"
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab.route || tab.url"
            v-bind="tab.route ? { to: tab.route, text: tab.text } : { href: tab.url, text: tab.text, target: '_blank', rel: 'noopener' }"
            :text="tab.text"
            size="x-small"
          />
          <v-tab
            :to="contact.route"
            :text="contact.text"
            size="x-small"
            base-color="blue"
          />
        </v-tabs>
      </v-row>
    </v-app-bar>

    <!-- Drawer mobile -->
    <v-navigation-drawer v-model="drawer" temporary class="d-sm-none">
      <v-list>
        <v-list-item :to="logo.route" @click="drawer = false">
          <v-list-item-title>{{ logo.text }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="tab in tabs"
          :key="tab.route || tab.url"
          v-bind="tab.route ? { to: tab.route } : { href: tab.url, target: '_blank', rel: 'noopener' }"
          @click="drawer = false"
        >
          <v-list-item-title>{{ tab.text }}</v-list-item-title>
        </v-list-item>
        <v-list-item :to="contact.route" @click="drawer = false">
          <v-list-item-title>{{ contact.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenu principal -->
    <v-main class="main-content" @click="resetTabs">
      <RouterView />
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<style scoped>
.logo-img {
  height: 50px;
  width: auto;
}

.logo-link {
  display: flex;
  align-items: center;
  margin: 10px;
}

/* Main content avec gradient existant */
.main-content {
  min-height: calc(100vh - 48px);
  background: linear-gradient(
    to bottom,
    rgb(33, 150, 243) 0%,
    rgb(25, 110, 190) 25%,
    rgb(15, 70, 130) 55%,
    rgb(6, 38, 72) 75%,
    #000 100%
  );
}

/* Positionnement sur mobile : hamburger à gauche, logo à droite */
@media (max-width: 768px) {
  .logo-link {
    display: none;
  }
  .v-app-bar .v-row {
    justify-content: space-between;
  }
  .v-app-bar .logo-link {
    order: 2; /* met le logo à droite */
  }
  .v-app-bar-nav-icon {
    order: 1; /* met le hamburger à gauche */
  }
}
</style>
