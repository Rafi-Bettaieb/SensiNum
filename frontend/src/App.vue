<script setup>
import Header from './components/layout/Header.vue' // Vérifie le chemin (ex: Header.vue ou components/Header.vue)
import Footer from './components/layout/Footer.vue' // Idem pour le footer
</script>

<template>
  <div id="app">
    <Header />

    <router-view />

    <Footer />
  </div>
</template>