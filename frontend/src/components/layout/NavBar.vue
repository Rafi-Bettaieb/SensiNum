<template>
  <nav class="flex items-center space-x-6">
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="nav-link"
      active-class="active"
    >
      {{ item.label }}
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
  { path: '/chatbot', label: 'Chatbot' },
  { path: '/about', label: 'À propos' }
]);
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium;
}

.nav-link.active {
  @apply text-blue-600 border-b-2 border-blue-600;
}
</style>
