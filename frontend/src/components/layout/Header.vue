<script setup>
import { Shield } from 'lucide-vue-next';
</script>

<template>
  <header class="bg-[#0f1214] border-b border-gray-800 text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50 font-sans">
    
    <router-link to="/" class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
      <div class="text-[#00C16A]"> <Shield :size="28" fill="currentColor" />
      </div>
      <h1 class="text-xl font-bold tracking-wide text-white">SécuritéNumérique</h1>
    </router-link>

    <nav class="hidden md:flex gap-8 text-sm font-medium">
      
      <router-link to="/quiz-selection" active-class="text-[#00C16A]" class="hover:text-[#00C16A] transition text-gray-400">
        Cours
      </router-link>

      <router-link to="/demos" active-class="text-[#00C16A]" class="hover:text-[#00C16A] transition text-gray-400">
        Démos Vidéo
      </router-link>
      
      <router-link to="/quiz-selection" active-class="text-[#00C16A]" class="hover:text-[#00C16A] transition text-gray-400">
        Quiz et Mini-Jeux
      </router-link>
      
      <router-link to="/about" active-class="text-[#00C16A]" class="hover:text-[#00C16A] transition text-gray-400">
        À propos
      </router-link>
    </nav>

    <div class="flex gap-4 items-center">
        <button class="bg-[#00C16A] hover:bg-[#00a058] text-black font-bold py-2 px-5 rounded text-sm transition">
            S'inscrire
        </button>
        <button class="border border-gray-600 hover:border-gray-400 text-white py-2 px-5 rounded text-sm transition">
            Se connecter
        </button>
    </div>
  </header>
</template>