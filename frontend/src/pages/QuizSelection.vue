<script setup>
import { Lock, Unlock, Shield, Mail, Wifi, Key, CheckCircle } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-[#0f172a] text-white p-8 md:p-16 font-sans">
    
    <header class="mb-12">
      <h1 class="text-4xl font-extrabold mb-4">Testez vos connaissances !</h1>
      <p class="text-gray-400 text-lg">Apprenez en vous amusant avec nos quiz et mini-jeux.</p>
    </header>

    <section class="mb-20">
      <h2 class="text-2xl font-bold mb-8 text-white">Quiz par niveau</h2>
      <p class="text-gray-400 mb-8 -mt-6">Progressez à votre rythme et débloquez de nouveaux défis !</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="bg-[#1e293b] rounded-2xl p-8 border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)] flex flex-col items-center text-center h-full justify-between">
          <div>
             <h3 class="text-2xl font-bold text-green-500 mb-2">Niveau Facile</h3>
             <p class="text-gray-400 mb-8">Pour bien commencer</p>
             
             <div class="flex justify-center mb-4">
                 <CheckCircle :size="64" class="text-green-500" />
             </div>
             <p class="text-white font-bold text-3xl mb-8">100%</p>
          </div>

          <router-link to="/quiz" class="w-full bg-green-500 hover:bg-green-400 text-black font-extrabold py-3 px-6 rounded-lg transition text-center block">
            Jouer
          </router-link>
        </div>

        <div class="bg-[#1e293b] rounded-2xl p-8 border border-gray-700 flex flex-col items-center text-center h-full justify-between opacity-70">
          <div>
            <h3 class="text-2xl font-bold text-gray-400 mb-2">Niveau Moyen</h3>
            <p class="text-gray-500 mb-8">Prêt pour un défi ?</p>
            <div class="flex justify-center mb-8 mt-8">
                <Lock :size="64" class="text-gray-600" />
            </div>
          </div>
          <button disabled class="w-full bg-gray-700 text-gray-500 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
            Verrouillé
          </button>
        </div>

        <div class="bg-[#1e293b] rounded-2xl p-8 border border-gray-700 flex flex-col items-center text-center h-full justify-between opacity-70">
          <div>
            <h3 class="text-2xl font-bold text-gray-400 mb-2">Niveau Difficile</h3>
            <p class="text-gray-500 mb-8">Pour les experts</p>
            <div class="flex justify-center mb-8 mt-8">
                <Lock :size="64" class="text-gray-600" />
            </div>
          </div>
          <button disabled class="w-full bg-gray-700 text-gray-500 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
            Verrouillé
          </button>
        </div>

      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-8">Nos Quiz & Mini-Jeux</h2>
      
      <div class="flex gap-1 mb-8 bg-[#1e293b] w-fit p-1 rounded-lg border border-gray-700">
        <button class="px-6 py-2 bg-gray-700 rounded-md text-white text-sm font-medium shadow">Tous</button>
        <button class="px-6 py-2 text-gray-400 hover:text-white text-sm font-medium transition">Quiz</button>
        <button class="px-6 py-2 text-gray-400 hover:text-white text-sm font-medium transition">Mini-jeux</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="bg-[#1e293b] rounded-xl overflow-hidden hover:translate-y-[-5px] transition duration-300 border border-gray-700 flex flex-col">
          <div class="h-48 bg-[#fde68a] flex items-center justify-center">
             <Shield :size="80" class="text-[#1e3a8a]" fill="#1e3a8a" />
          </div>
          <div class="p-6 flex flex-col h-full">
            <h4 class="font-bold text-xl text-white mb-3">Quiz: Mots de passe robustes</h4>
            <p class="text-gray-400 leading-relaxed text-sm">Évaluez la force de vos mots de passe et apprenez les meilleures pratiques.</p>
          </div>
        </div>

        <div class="bg-[#1e293b] rounded-xl overflow-hidden hover:translate-y-[-5px] transition duration-300 border border-gray-700 flex flex-col">
          <div class="h-48 bg-[#99f6e4] flex items-center justify-center">
            <Mail :size="80" class="text-teal-800" /> 
          </div>
          <div class="p-6 flex flex-col h-full">
            <h4 class="font-bold text-xl text-white mb-3">Mini-jeu: Repérez le Phishing</h4>
            <p class="text-gray-400 leading-relaxed text-sm">Identifiez les e-mails frauduleux dans une boîte de réception simulée.</p>
          </div>
        </div>

        <div class="bg-[#1e293b] rounded-xl overflow-hidden hover:translate-y-[-5px] transition duration-300 border border-gray-700 flex flex-col">
          <div class="h-48 bg-[#a5f3fc] flex items-center justify-center relative overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
             <Wifi :size="80" class="text-blue-900" />
          </div>
          <div class="p-6 flex flex-col h-full">
            <h4 class="font-bold text-xl text-white mb-3">Quiz: Sécuriser son Wi-Fi</h4>
            <p class="text-gray-400 leading-relaxed text-sm">Savez-vous comment bien configurer et protéger votre réseau domestique ?</p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>