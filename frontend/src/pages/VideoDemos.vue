<script setup>
import { ref, computed } from 'vue';
import { Search } from 'lucide-vue-next';
import VideoCard from './VideoCard.vue'; // Assurez-vous que le chemin est correct
// --- DANS VideoDemos.vue ---

const videos = [
  {
    id: 1,
    title: "Comment créer un mot de passe vraiment solide ?",
    description: "Apprenez les techniques pour générer des mots de passe inpiratables.",
    duration: "5:32",
    category: "Mots de passe",
    gradient: "linear-gradient(135deg, #433831 0%, #292524 100%)",
    videoSrc: "/Sequence 01_1.mp4" // Votre 1ère vidéo
  },
  {
    id: 2,
    title: "Je déchiffre un email de phishing en direct",
    description: "Analyse pas à pas d'une tentative d'arnaque reçue ce matin.",
    duration: "8:14",
    category: "Emails",
    gradient: "linear-gradient(135deg, #3f4036 0%, #27272a 100%)",
    videoSrc: "/video2.mp4" // <-- AJOUT DE VOTRE 2ÈME VIDÉO ICI
  },
  {
    id: 3,
    title: "Activez l'authentification à deux facteurs",
    description: "Le guide complet pour sécuriser vos comptes en 2 minutes.",
    duration: "2:50",
    category: "Comptes",
    gradient: "linear-gradient(135deg, #1e3a4c 0%, #111827 100%)"
    // Pas de videoSrc ici -> ça affichera la vignette par défaut
  },
  {
    id: 4,
    title: "Les 3 réglages de confidentialité sur Facebook",
    description: "Ce que vous devez absolument cacher aux inconnus.",
    duration: "6:21",
    category: "Réseaux sociaux",
    gradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
  },
  {
    id: 5,
    title: "Repérer un faux site de vente en ligne",
    description: "Ne vous faites plus avoir par les promotions trop belles.",
    duration: "7:45",
    category: "Achats",
    gradient: "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
  },
  {
    id: 6,
    title: "Pourquoi utiliser un VPN sur un Wi-Fi public ?",
    description: "Comprendre les risques des connexions gratuites dans les gares.",
    duration: "4:10",
    category: "Réseaux Wi-Fi",
    gradient: "linear-gradient(135deg, #172554 0%, #0f172a 100%)"
  }
];
// --- LOGIQUE ---
const searchQuery = ref('');
const activeFilter = ref('Tous');
const filters = ['Tous', 'Mots de passe', 'Emails', 'Réseaux sociaux', 'Achats', 'Réseaux Wi-Fi'];

// État pour savoir quelle vidéo est en train d'être lue
const currentPlayingId = ref(null);

// Gestion du clic sur Play
const handlePlayVideo = (id) => {
  // Si on clique sur la même, on arrête, sinon on lance la nouvelle
  currentPlayingId.value = currentPlayingId.value === id ? null : id;
};

const filteredVideos = computed(() => {
  return videos.filter(video => {
    const matchCategory = activeFilter.value === 'Tous' || video.category === activeFilter.value;
    const matchSearch = video.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchCategory && matchSearch;
  });
});
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-gray-200 p-6">
    <div class="max-w-6xl mx-auto">
      
      <header class="mb-10 text-center sm:text-left">
        <h1 class="text-3xl sm:text-4xl font-bold mb-3 text-white">Explorez nos Démonstrations Vidéo</h1>
        <p class="text-gray-400 max-w-2xl">
          Apprenez à vous protéger en visualisant des scénarios courants de sécurité numérique expliqués simplement.
        </p>
      </header>

      <div class="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-start sm:items-center">
        <div class="relative w-full sm:w-96">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" :size="20" />
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Rechercher par mot-clé (ex: phishing)" 
            class="w-full bg-gray-900 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div class="flex flex-wrap gap-2">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 border',
              activeFilter === filter 
                ? 'bg-blue-600 border-blue-500 text-white' 
                : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <VideoCard 
          v-for="video in filteredVideos" 
          :key="video.id"
          :video="video"
          :is-active="currentPlayingId === video.id"
          @trigger-play="handlePlayVideo"
        />
      </div>

      <div v-if="filteredVideos.length === 0" class="text-center py-20 text-gray-500">
        <p class="text-lg">Aucune vidéo ne correspond à votre recherche.</p>
      </div>

    </div>
  </div>
</template>