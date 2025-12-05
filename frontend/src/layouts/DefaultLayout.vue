<template>
  <div class="min-h-screen flex flex-col bg-gray-900">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from '../components/layout/Header.vue';
</script>
