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
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const navItems = ref([
  { path: '/', label: 'Accueil' },
  { path: '/awareness', label: 'Cours' },
  { path: '/quiz', label: 'Quiz & Jeux' },
  { path: '/about', label: 'Contact' }
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
