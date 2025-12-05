<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
    
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

    <div v-if="loading" class="text-center z-10">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
      <p class="text-xl text-red-400 animate-pulse font-mono">Traçage en cours...</p>
    </div>

    <div v-else class="max-w-5xl w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-red-500/50 z-10 relative">
      
      <div class="bg-red-900/30 border-b border-red-500/30 p-6 text-center backdrop-blur-sm">
        <h1 class="text-3xl md:text-4xl font-bold text-red-500 mb-2 flex items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Vous avez été tracé !
        </h1>
        <p class="text-gray-300 text-lg">
          Vous avez cliqué sur "Accepter" sans lire. Voici ce qu'un site malveillant sait déjà de vous :
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-0">
        <div class="p-8 space-y-6 border-b md:border-b-0 md:border-r border-gray-700 bg-gray-800/50">
            
            <div class="space-y-4">
              <div class="bg-gray-900 p-4 rounded-lg border border-red-500/20 shadow-inner">
                  <span class="text-gray-500 text-xs uppercase tracking-wider block mb-1">Votre Adresse IP Publique</span>
                  <span class="text-2xl md:text-3xl font-mono text-white tracking-widest">{{ userData.ip }}</span>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <span class="text-gray-500 text-xs uppercase tracking-wider block mb-1">Ville</span>
                    <span class="text-lg text-blue-400 font-bold">{{ userData.city || 'Inconnue' }}</span>
                </div>
                <div class="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <span class="text-gray-500 text-xs uppercase tracking-wider block mb-1">Pays</span>
                    <span class="text-lg text-blue-400 font-bold">{{ userData.country || 'Inconnu' }}</span>
                </div>
              </div>

              <div class="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <span class="text-gray-500 text-xs uppercase tracking-wider block mb-1">Fournisseur d'accès / Réseau</span>
                  <span class="text-md text-gray-300 font-mono">{{ userData.region }}</span>
              </div>
            </div>

            <div class="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 text-sm text-yellow-200 mt-6">
              <p><strong>Leçon :</strong> Sur un vrai site malveillant, ces données pourraient être vendues ou utilisées pour cibler des attaques contre votre connexion.</p>
            </div>
        </div>

        <div class="h-[400px] md:h-auto bg-gray-900 relative min-h-[400px]">
            <div id="map" class="absolute inset-0 z-0 h-full w-full"></div>
        </div>
      </div>

      <div class="p-6 bg-gray-900 border-t border-gray-700 text-center flex justify-center">
        <button 
          @click="$router.push('/')" 
          class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition shadow-lg shadow-green-900/20 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Retourner en sécurité
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const loading = ref(true);
const userData = ref({
  ip: '',
  latitude: 0,
  longitude: 0,
  city: '',
  region: '',
  country: ''
});

// Initialisation de la carte Leaflet
const initMap = (lat, lng) => {
  // Si la carte existe déjà (re-montage), on ne fait rien ou on la nettoie
  const container = L.DomUtil.get('map');
  if(container != null){
    container._leaflet_id = null;
  }

  const map = L.map('map').setView([lat, lng], 13);

  // Thème sombre pour la carte (CartoDB Dark Matter)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Correctif pour l'icône du marqueur dans Vite/Vue
  const icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });

  L.marker([lat, lng], { icon: icon })
    .addTo(map)
    .bindPopup(`<b>Vous êtes localisé ici</b><br>${userData.value.city}`)
    .openPopup();
};

onMounted(async () => {
  try {
    // Appel à VOTRE backend Node.js
    // Assurez-vous que l'URL correspond à votre serveur Express (port 3000 par défaut souvent)
    const response = await axios.get('http://localhost:3000/'); 
    
    userData.value = response.data;
    loading.value = false;

    // Petit délai pour s'assurer que le DOM de la div #map est prêt
    setTimeout(() => {
      // Fallback si latitude/longitude manquent (ex: localhost sans mock)
      const lat = userData.value.latitude || 48.8566; // Paris par défaut
      const lng = userData.value.longitude || 2.3522;
      initMap(lat, lng);
    }, 100);

  } catch (error) {
    console.error("Erreur API:", error);
    loading.value = false;
    // Données factices en cas d'erreur pour la démo
    userData.value = { 
        ip: 'Introuvable', 
        city: 'Erreur Connexion', 
        country: 'Vérifiez le backend', 
        latitude: 48.85, 
        longitude: 2.35 
    };
    setTimeout(() => initMap(48.85, 2.35), 100);
  }
});
</script>

<style>
/* Important pour que Leaflet fonctionne bien avec les z-index de Tailwind */
.leaflet-pane { z-index: 0 !important; }
.leaflet-top, .leaflet-bottom { z-index: 1 !important; }
</style>