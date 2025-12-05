<script setup>
import { ref, computed } from 'vue';
// AJOUT DE L'IMPORT DE PlayCircle
import { Search, PlayCircle } from 'lucide-vue-next';

// --- DONNÉES ---
const videos = [
  {
    id: 1,
    title: "Comment créer un mot de passe vraiment solide ?",
    description: "Apprenez les techniques pour générer des mots de passe inpiratables.",
    duration: "5:32",
    category: "Mots de passe",
    gradient: "linear-gradient(135deg, #433831 0%, #292524 100%)" 
  },
  {
    id: 2,
    title: "Je déchiffre un email de phishing en direct",
    description: "Analyse pas à pas d'une tentative d'arnaque reçue ce matin.",
    duration: "8:14",
    category: "Emails",
    gradient: "linear-gradient(135deg, #3f4036 0%, #27272a 100%)"
  },
  {
    id: 3,
    title: "Activez l'authentification à deux facteurs",
    description: "Le guide complet pour sécuriser vos comptes en 2 minutes.",
    duration: "2:50",
    category: "Comptes",
    gradient: "linear-gradient(135deg, #1e3a4c 0%, #111827 100%)"
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
const filters = ['Tous', 'Mots de passe', 'Emails', 'Réseaux sociaux', 'Smartphones', 'Réseaux Wi-Fi'];

const filteredVideos = computed(() => {
  return videos.filter(video => {
    const matchCategory = activeFilter.value === 'Tous' || video.category === activeFilter.value;
    const matchSearch = video.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchCategory && matchSearch;
  });
});
</script>

<template>
  <div class="demos-page">
    <div class="page-container">
      
      <header class="demos-header">
        <h1 class="page-title">Explorez nos Démonstrations Vidéo</h1>
        <p class="page-subtitle">Apprenez à vous protéger en visualisant des scénarios courants de sécurité numérique expliqués simplement.</p>
      </header>

      <div class="controls-section">
        <div class="search-wrapper">
          <Search class="search-icon" :size="20" />
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Rechercher par mot-clé (ex: phishing)" 
            class="search-input"
          />
        </div>

        <div class="filters-list">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            :class="['filter-btn', { 'active': activeFilter === filter }]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <div class="videos-grid">
        <div v-for="video in filteredVideos" :key="video.id" class="video-card">
          <div class="thumbnail" :style="{ background: video.gradient }">
            
            <div class="play-overlay">
              <PlayCircle :size="32" class="play-icon" />
            </div>

            <span class="duration">{{ video.duration }}</span>
          </div>
          <div class="card-content">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-desc">{{ video.description }}</p>
          </div>
        </div>
      </div>

      <div v-if="filteredVideos.length === 0" class="no-results">
        <p>Aucune vidéo ne correspond à votre recherche.</p>
      </div>

    </div>
  </div>
</template>

<style src="../assets/styles/video-demos.css"></style>