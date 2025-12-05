<template>
  <nav class="hidden md:flex items-center space-x-8">
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="nav-link"
      active-class="active"
    >
      {{ item.label }}
    </router-link>
    <router-link
      to="/parcours"
      class="text-gray-700 hover:text-blue-600 transition"
      :class="{ 'text-blue-600 font-semibold': $route.path.startsWith('/parcours') }"
    >
      Cours
    </router-link>

  </nav>
</template>

<script setup>
import { ref } from 'vue';

const navItems = ref([
  { path: '/', label: 'Accueil' },
  { path: '/awareness', label: 'Sensibilisation' },
  { path: '/phishing', label: 'Phishing' },
  { path: '/parcours', label: 'Cours' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/videos', label: 'Demo Video' },
  { path: '/chatbot', label: 'Chatbot' },
  { path: '/about', label: 'À propos' }
]);
</script>

<style scoped>
.nav-link {
  @apply text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm;
}

.nav-link.active {
  @apply text-white;
}
</style>
