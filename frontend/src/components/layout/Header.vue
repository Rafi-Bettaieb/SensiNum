<script setup>
import { Shield } from 'lucide-vue-next';
</script>

<template>
  <header class="bg-[#0f172a] border-b border-gray-800 text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50 font-sans">
    
    <div class="flex items-center gap-3 cursor-pointer">
      <div class="text-green-500">
        <Shield :size="28" fill="currentColor" />
      </div>
      <h1 class="text-xl font-bold tracking-wide">SécuritéNumérique</h1>
    </div>

    <nav class="hidden md:flex gap-8 text-sm font-medium">
      
      <router-link to="/quiz-selection" active-class="text-green-500" class="hover:text-green-400 transition text-gray-300">
        Cours
      </router-link>
      
      <router-link to="/quiz-selection" active-class="text-green-500" class="hover:text-green-400 transition text-gray-300">
        Quiz
      </router-link>
      
      <a href="#" class="hover:text-green-400 transition text-gray-300">À propos</a>
    </nav>

  
  </header>
</template>