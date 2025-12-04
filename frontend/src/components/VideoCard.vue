<template>
  <div class="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">

    <!-- Thumbnail grisé (factice) -->
    <div class="relative h-40 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
      <!-- Bouton Play -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
          <svg
            class="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Infos vidéo -->
    <div class="p-4">
      <h3 class="font-semibold text-lg mb-1">{{ video.title }}</h3>
      <p class="text-sm text-gray-400">Durée : {{ video.duration }}</p>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  video: Object
});
</script>
