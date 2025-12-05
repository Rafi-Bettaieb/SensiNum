<script setup>
import { PlayCircle } from 'lucide-vue-next';

// Props reçues du parent
const props = defineProps({
  video: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

// Événement pour dire au parent "C'est moi qu'on doit lire"
const emit = defineEmits(['trigger-play']);
</script>

<template>
  <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    
    <div class="relative w-full aspect-video bg-black">
      
      <div v-if="isActive && video.videoSrc" class="w-full h-full">
        <video 
          :src="video.videoSrc" 
          controls 
          autoplay 
          class="w-full h-full object-cover"
        ></video>
      </div>

      <div 
        v-else 
        class="w-full h-full relative cursor-pointer group"
        :style="{ background: video.gradient || 'linear-gradient(to right, #333, #555)' }"
        @click="emit('trigger-play', video.id)"
      >
        <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
          <PlayCircle :size="48" class="text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <span class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {{ video.duration }}
        </span>
      </div>
    </div>

    <div class="p-4 flex-1 flex flex-col">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          {{ video.category }}
        </span>
      </div>
      <h3 class="text-lg font-bold text-gray-100 mb-2 leading-tight">
        {{ video.title }}
      </h3>
      <p class="text-gray-400 text-sm line-clamp-2">
        {{ video.description }}
      </p>
    </div>
  </div>
</template>