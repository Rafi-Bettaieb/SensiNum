<template>
  <div class="min-h-screen bg-red-900 text-white flex items-center justify-center p-4">
    <div class="max-w-3xl w-full bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-red-600">
      
      <div class="bg-red-600 p-8 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div> 
        <div class="relative z-10">
          <div class="mx-auto w-20 h-20 bg-white text-red-600 rounded-full flex items-center justify-center mb-4 text-4xl font-bold animate-bounce">
            !
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-widest">Vous avez été tracé</h1>
          <p class="mt-2 text-red-100 font-medium">Vous avez accepté les cookies sans lire les conditions.</p>
        </div>
      </div>

      <div class="p-8">
        <p class="mb-6 text-gray-300 text-center text-lg">
          Voici les informations récupérées lors de votre connexion :
        </p>

        <div v-if="loading" class="flex flex-col items-center justify-center py-8">
          <div class="animate-spin rounded-full h-12 w-12 border-4 border-gray-700 border-t-red-500 mb-4"></div>
          <p class="text-gray-400 animate-pulse">Triangulation de la position...</p>
        </div>

        <div v-else>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono mb-6">
            <div class="bg-gray-800 p-4 rounded-xl border-l-4 border-blue-500 flex justify-between items-center">
              <span class="text-gray-400 text-sm">IP</span>
              <span class="text-white font-bold">{{ userData.ip }}</span>
            </div>

            <div class="bg-gray-800 p-4 rounded-xl border-l-4 border-green-500 flex justify-between items-center">
              <span class="text-gray-400 text-sm">Ville</span>
              <span class="text-white font-bold">{{ userData.city }}</span>
            </div>

            <div class="bg-gray-800 p-4 rounded-xl border-l-4 border-yellow-500 flex justify-between items-center">
              <span class="text-gray-400 text-sm">Pays</span>
              <span class="text-white font-bold">{{ userData.country_name }}</span>
            </div>
            
             <div class="bg-gray-800 p-4 rounded-xl border-l-4 border-purple-500 flex justify-between items-center">
              <span class="text-gray-400 text-sm">F.A.I.</span>
              <span class="text-white font-bold truncate max-w-[150px]" :title="userData.org">{{ userData.org }}</span>
            </div>
          </div>

          <div class="bg-gray-800 p-1 rounded-xl border border-gray-700 shadow-inner">
            <div id="map" class="h-64 w-full rounded-lg z-0"></div>
          </div>

          <div class="mt-8 text-center">
            <button 
              @click="router.push('/')" 
              class="group inline-flex items-center text-red-400 hover:text-white transition-colors cursor-pointer"
            >
              <svg class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Retourner en sécurité
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// Import de Leaflet et de son CSS obligatoire
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const router = useRouter();
const loading = ref(true);
const userData = ref({});

// Fonction pour initialiser la carte
const initMap = (lat, lng) => {
  // On crée la carte dans la div #map
  const map = L.map('map').setView([lat, lng], 13);

  // On ajoute le fond de carte (OpenStreetMap - Style sombre CartoDB pour aller avec ton thème)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Astuce pour l'icône du marqueur (souvent buggée avec les bundlers comme Vite/Webpack)
  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Ajouter le marqueur
  L.marker([lat, lng], { icon: customIcon })
    .addTo(map)
    .bindPopup(`<b>VOUS ÊTES ICI</b><br>Lat: ${lat}<br>Lon: ${lng}`)
    .openPopup();
};

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/ip'); // Assure-toi que c'est le bon port/route
    const data = await response.json();
    userData.value = data;
    
    setTimeout(() => {
      loading.value = false;
      
      // On initialise la carte APRÈS que le DOM soit mis à jour (quand v-if loading est false)
      // nextTick ou setTimeout court permet d'attendre que <div id="map"> existe
      setTimeout(() => {
        if (userData.value.latitude && userData.value.longitude) {
            initMap(userData.value.latitude, userData.value.longitude);
        }
      }, 100);
      
    }, 1500);
    
  } catch (error) {
    console.error("Erreur connexion backend", error);
    userData.value = {
      ip: "Erreur",
      city: "Introuvable",
      country_name: "Introuvable",
      org: "Introuvable"
    };
    loading.value = false;
  }
});
</script>

<style>
/* Fix parfois nécessaire pour que les tuiles s'affichent correctement dans Leaflet */
.leaflet-container {
    background: #111; /* Fond noir si les tuiles chargent mal */
    z-index: 0;
}
</style>