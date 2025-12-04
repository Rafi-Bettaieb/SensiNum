<template>
  <header class="bg-gray-900 border-b border-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">SecurZone</span>
        </router-link>

        <!-- Navigation -->
        <NavBar />
      </div>
    </div>
  </header>
</template>

<script setup>
import NavBar from './NavBar.vue';
</script>
