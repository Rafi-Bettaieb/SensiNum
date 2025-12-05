<template>
  <header class="bg-[#0f1214] border-b border-gray-800 text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50 font-sans">
    <router-link to="/" class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
      <div class="text-[#00C16A]">
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 1.5c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM6.5 11.5c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5v2a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-2zm2-2a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v1.5h-7V9.5zm-1.5 5h10v2a2.5 2.5 0 01-2.5 2.5h-5a2.5 2.5 0 01-2.5-2.5v-2z" clip-rule="evenodd" />
        </svg>
      </div>
      <h1 class="text-xl font-bold tracking-wide text-white">SécuritéNumérique</h1>
    </router-link>

    <nav class="hidden md:flex gap-8 text-sm font-medium">
      <router-link to="/awareness" active-class="text-[#00C16A]" class="hover:text-[#00C16A] transition text-gray-400">
        Cours
      </router-link>
      <a href="#" class="hover:text-[#00C16A] transition text-gray-400">Démos Vidéo</a>
      <router-link to="/quiz" active-class="text-[#00C16A]" class="hover:text-[#00C16A] transition text-gray-400">
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

<script setup>
</script>
