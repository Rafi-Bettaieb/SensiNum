<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-28">
      <div class="max-w-5xl mx-auto text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in text-white">
          Apprenez à vous protéger en ligne
        </h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 px-4 leading-relaxed">
          La sécurité sur internet, c'est simple ! Regardez notre vidéo de 2 minutes pour comprendre les bases.
        </p>
        
        <!-- Video Placeholder -->
        <div class="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 aspect-video max-w-4xl mx-auto group">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <button class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110 group-hover:scale-105 shadow-2xl ring-4 ring-blue-500/30 hover:ring-blue-400/50">
              <svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
          <div class="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm"></div>
        </div>
      </div>
    </section>

    <!-- Activities Section -->
    <section class="bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-slide-up text-white">
            Nos activités pour apprendre
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Choisissez une section pour commencer à explorer le monde de la sécurité numérique en toute simplicité.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          <!-- Cours faciles -->
          <div 
            class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
            @click="navigateTo('/parcours')"
          >
            <div class="text-blue-500 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center text-white">Cours faciles</h3>
            <p class="text-sm sm:text-base text-gray-200 text-center mb-4 sm:mb-6 leading-relaxed">
              Apprenez les bases avec des leçons simples et claires.
            </p>
            <button class="text-blue-500 font-semibold flex items-center justify-center w-full group-hover:text-blue-400 transition-colors text-sm sm:text-base">
              Commencer les cours 
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!-- Quiz amusants -->
          <div 
            class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
            @click="navigateTo('/quiz')"
          >
            <div class="text-blue-400 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center text-white">Quiz amusants</h3>
            <p class="text-sm sm:text-base text-gray-200 text-center mb-4 sm:mb-6 leading-relaxed">
              Testez vos connaissances en vous amusant.
            </p>
            <button class="text-blue-500 font-semibold flex items-center justify-center w-full group-hover:text-blue-400 transition-colors text-sm sm:text-base">
              Lancer un quiz 
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!-- Mini-Jeux -->
          <div 
            class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1"
            @click="navigateTo('/phishing')"
          >
            <div class="text-blue-400 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center text-white">Mini-Jeux</h3>
            <p class="text-sm sm:text-base text-gray-200 text-center mb-4 sm:mb-6 leading-relaxed">
              Entraînez-vous avec des simulations de situations réelles.
            </p>
            <button class="text-blue-500 font-semibold flex items-center justify-center w-full group-hover:text-blue-400 transition-colors text-sm sm:text-base">
              Jouer maintenant 
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dangers Section -->
    <section class="bg-gray-800 py-12 sm:py-16 md:py-20 lg:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Reconnaître les dangers sur internet
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4 leading-relaxed">
            Savoir identifier les menaces est la première étape pour s'en protéger. Voici les plus courantes :
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          <!-- Phishing -->
          <div class="flex flex-col items-start sm:items-center lg:items-start bg-gray-700/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:bg-gray-700 transition-all duration-300 group border border-transparent hover:border-blue-500/30">
            <div class="text-blue-400 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-center lg:text-left w-full text-white">
              Emails frauduleux (Phishing)
            </h3>
            <p class="text-sm sm:text-base text-gray-200 text-center sm:text-center lg:text-left leading-relaxed">
              Apprenez à repérer les faux messages qui tentent de voler vos informations.
            </p>
          </div>

          <!-- Weak Passwords -->
          <div class="flex flex-col items-start sm:items-center lg:items-start bg-gray-700/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:bg-gray-700 transition-all duration-300 group border border-transparent hover:border-blue-500/30">
            <div class="text-blue-400 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-center lg:text-left w-full text-white">
              Mots de passe faibles
            </h3>
            <p class="text-sm sm:text-base text-gray-200 text-center sm:text-center lg:text-left leading-relaxed">
              Découvrez comment créer des mots de passe forts et faciles à retenir.
            </p>
          </div>

          <!-- Malware -->
          <div class="flex flex-col items-start sm:items-center lg:items-start bg-gray-700/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:bg-gray-700 transition-all duration-300 group border border-transparent hover:border-blue-500/30 sm:col-span-2 lg:col-span-1">
            <div class="text-blue-400 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-center lg:text-left w-full text-white">
              Logiciels malveillants
            </h3>
            <p class="text-sm sm:text-base text-gray-200 text-center sm:text-center lg:text-left leading-relaxed">
              Comprenez comment les virus et autres programmes dangereux peuvent infecter vos appareils.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 py-6 sm:py-8">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm space-y-4 md:space-y-0">
          <p class="text-center md:text-left">© 2024 SecurZone. Tous droits réservés.</p>
          <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" class="hover:text-white transition-colors duration-200">Mentions Légales</a>
            <a href="#" class="hover:text-white transition-colors duration-200">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from '../components/ui/Button.vue';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>
