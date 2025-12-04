<script setup>
import { Check, Lock, Shield } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white flex flex-col items-center py-10 relative overflow-hidden font-sans">
    
    <div class="w-full max-w-4xl px-6 mb-8 flex justify-between items-center z-10">
       <router-link to="/quiz-selection" class="text-gray-400 hover:text-white flex items-center gap-2">
         ← Retour aux niveaux
       </router-link>
       <h1 class="text-3xl font-bold">Parcours Quiz Facile</h1>
    </div>

    <div class="relative w-full max-w-lg flex flex-col items-center gap-16 py-10">
      
      <svg class="absolute top-0 left-0 w-full h-full pointer-events-none" style="z-index: 0;">
        <path d="M256,50 C256,50 256,150 256,150 
                 C256,250 100,250 100,350 
                 C100,450 400,450 400,550
                 C400,650 256,650 256,750" 
              fill="none" stroke="#374151" stroke-width="4" stroke-dasharray="10 10" />
      </svg>

      <div class="relative z-10 flex flex-col items-center">
        <div class="w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] transform rotate-3 hover:scale-110 transition">
          <Check :size="48" class="text-white" />
        </div>
        <span class="mt-3 font-bold text-lg">Quiz 1</span>
      </div>

      <div class="relative z-10 flex flex-col items-center ml-32">
        <div class="w-24 h-24 bg-gray-900 border-4 border-green-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer">
          <span class="text-4xl font-bold text-green-500">2</span>
        </div>
        <span class="mt-3 font-bold text-lg text-green-400">Quiz 2</span>
      </div>

      <div class="relative z-10 flex flex-col items-center mr-32">
        <div class="w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center opacity-75">
          <Lock :size="32" class="text-gray-500" />
        </div>
        <span class="mt-3 font-bold text-gray-500">Quiz 3</span>
      </div>

      <div class="relative z-10 flex flex-col items-center">
        <div class="w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center opacity-75">
          <Lock :size="32" class="text-gray-500" />
        </div>
        <span class="mt-3 font-bold text-gray-500">Quiz 4</span>
      </div>

      <div class="relative z-10 flex flex-col items-center pt-8">
        <div class="w-28 h-28 bg-gray-800 border-4 border-gray-700 rounded-full flex items-center justify-center opacity-75">
           <Shield :size="48" class="text-yellow-500" />
        </div>
        <span class="mt-3 font-bold text-gray-400">Boss Final</span>
      </div>

    </div>
  </div>
</template>