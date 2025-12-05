<template>
  <div class="max-w-6xl mx-auto p-6 text-gray-200">

    <!-- Titre -->
    <h1 class="text-3xl font-bold mb-3">Explorez nos Démonstrations Vidéo</h1>
    <p class="text-gray-400 mb-8 max-w-2xl">
      Apprenez à vous protéger en visualisant des scénarios courants de sécurité numérique expliqués simplement.
    </p>

    <!-- Barre de recherche -->
    <div class="flex items-center gap-3 mb-6">
      <div class="relative w-full">
        <input
          type="text"
          placeholder="Rechercher par mot-clé..."
          class="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <!-- Icone recherche -->
        <svg
          class="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 12.65z"/>
        </svg>
      </div>
    </div>

    <!-- Filtres -->
    <div class="flex flex-wrap gap-3 mb-10">
      <button
        v-for="filter in filters"
        :key="filter"
        class="px-4 py-1.5 rounded-full text-sm border transition"
        :class="filter === activeFilter
          ? 'bg-blue-600 border-blue-500 text-white'
          : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'"
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Grille vidéos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <VideoCard
        v-for="video in mockVideos"
        :key="video.id"
        :video="video"
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import VideoCard from "../components/VideoCard.vue";

const filters = ["Tous", "Mots de passe", "Emails", "Réseaux sociaux", "Smartphones", "Réseaux Wi-Fi"];
const activeFilter = ref("Tous");

// Vidéos factices (sans backend)
const mockVideos = [
  { id: 1, title: "Comment créer un mot de passe vraiment solide ?", duration: "5:32" },
  { id: 2, title: "Je déchiffre un email de phishing en direct", duration: "8:14" },
  { id: 3, title: "Activez l'authentification à deux facteurs", duration: "2:50" },
  { id: 4, title: "Les 3 réglages de confidentialité sur Facebook", duration: "6:21" },
  { id: 5, title: "Repérer un faux site de vente en ligne", duration: "7:45" },
  { id: 6, title: "Pourquoi utiliser un VPN sur un Wi-Fi public ?", duration: "4:10" },
  { id: 7, title: "Vérifier les permissions de vos apps mobiles", duration: "5:05" },
  { id: 8, title: "Comment sécuriser votre routeur à la maison ?", duration: "9:30" }
];
</script>
