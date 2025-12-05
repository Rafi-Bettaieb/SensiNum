<script setup>
import { ArrowLeft, Phone, Play, Pause, CheckCircle, XCircle } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const router = useRouter();
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const audio = ref(null);
const selectedAnswer = ref(null);
const showResult = ref(false);

const answers = [
  { 
    id: 'A', 
    text: 'Donner vos informations', 
    isCorrect: false,
    explanation: 'Danger ! Ne jamais donner vos coordonnées bancaires pour RECEVOIR de l\'argent. Votre IBAN suffit pour un virement.'
  },
  { 
    id: 'B', 
    text: 'Continuer la discussion pour en savoir plus', 
    isCorrect: false,
    explanation: 'Risqué ! Continuer la discussion peut vous mettre sous pression et vous faire tomber dans le piège.'
  },
  { 
    id: 'C', 
    text: "Quitter l'appel", 
    isCorrect: true,
    explanation: 'Bonne décision ! En cas de doute, raccrochez immédiatement et vérifiez par les canaux officiels.'
  }
];

onMounted(() => {
  audio.value = new Audio('/enregistrement.m4a');
  
  audio.value.addEventListener('loadedmetadata', () => {
    duration.value = audio.value.duration;
  });
  
  audio.value.addEventListener('timeupdate', () => {
    currentTime.value = audio.value.currentTime;
  });
  
  audio.value.addEventListener('ended', () => {
    isPlaying.value = false;
  });
});

onUnmounted(() => {
  if (audio.value) {
    audio.value.pause();
    audio.value = null;
  }
});

const togglePlay = () => {
  if (isPlaying.value) {
    audio.value.pause();
    isPlaying.value = false;
  } else {
    audio.value.play();
    isPlaying.value = true;
  }
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const selectAnswer = (answerId) => {
  if (!showResult.value) {
    selectedAnswer.value = answerId;
  }
};

const submitAnswer = () => {
  if (selectedAnswer.value) {
    showResult.value = true;
    const answer = answers.find(a => a.id === selectedAnswer.value);
    if (answer.isCorrect) {
      localStorage.setItem('quiz_level_3_completed', 'true');
    }
  }
};

const goBack = () => {
  if (audio.value) {
    audio.value.pause();
  }
  router.push('/quiz');
};

const isCorrect = () => {
  const answer = answers.find(a => a.id === selectedAnswer.value);
  return answer?.isCorrect;
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      
      <!-- Header with back button -->
      <div class="mb-8">
        <button @click="goBack" class="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors mb-6">
          <ArrowLeft :size="20" />
          Retour au parcours
        </button>
        
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Phone :size="40" class="text-green-500" />
            Appel Suspect
          </h1>
          <p class="text-xl text-gray-300">
            Voici un potentiel appel que vous pouvez recevoir
          </p>
        </div>
      </div>

      <!-- Audio Player Card -->
      <div class="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl p-8 mb-8">
        
        <!-- Audio Player -->
        <div class="space-y-6">
          
          <!-- Play Button -->
          <div class="flex justify-center">
            <button
              @click="togglePlay"
              class="w-24 h-24 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl ring-4 ring-green-500/30 hover:ring-green-400/50"
            >
              <Play v-if="!isPlaying" :size="40" class="text-white ml-1" />
              <Pause v-else :size="40" class="text-white" />
            </button>
          </div>

          <!-- Progress Bar -->
          <div class="space-y-2">
            <div class="w-full bg-gray-700 rounded-full h-3 cursor-pointer">
              <div 
                class="bg-green-500 h-3 rounded-full transition-all"
                :style="{ width: duration > 0 ? (currentTime / duration * 100) + '%' : '0%' }"
              ></div>
            </div>
            <div class="flex justify-between text-sm text-gray-400">
              <span>{{ formatTime(currentTime) }}</span>
              <span>{{ formatTime(duration) }}</span>
            </div>
          </div>

          <!-- Status -->
          <div class="text-center">
            <p class="text-lg text-gray-300">
              {{ isPlaying ? '🔊 Lecture en cours...' : '⏸️ En pause' }}
            </p>
          </div>

        </div>
      </div>

      <!-- Question Section -->
      <div class="bg-gray-800 rounded-2xl border border-gray-700 p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6 text-center">
          Que feriez-vous dans cette situation ?
        </h2>

        <!-- Answer Options -->
        <div class="space-y-4">
          <button
            v-for="answer in answers"
            :key="answer.id"
            @click="selectAnswer(answer.id)"
            :disabled="showResult"
            :class="[
              'w-full text-left p-4 rounded-xl border-2 transition-all',
              selectedAnswer === answer.id && !showResult
                ? 'border-green-500 bg-green-500/10'
                : 'border-gray-700 bg-gray-900/50 hover:border-gray-600',
              showResult && answer.isCorrect
                ? 'border-green-500 bg-green-500/20'
                : '',
              showResult && answer.id === selectedAnswer && !answer.isCorrect
                ? 'border-red-500 bg-red-500/20'
                : '',
              showResult ? 'cursor-not-allowed' : 'cursor-pointer'
            ]"
          >
            <div class="flex items-center gap-3">
              <span class="text-lg font-bold text-gray-400">{{ answer.id }}.</span>
              <span class="text-lg">{{ answer.text }}</span>
              <span v-if="showResult && answer.isCorrect" class="ml-auto">
                <CheckCircle :size="24" class="text-green-500" />
              </span>
              <span v-if="showResult && answer.id === selectedAnswer && !answer.isCorrect" class="ml-auto">
                <XCircle :size="24" class="text-red-500" />
              </span>
            </div>
          </button>
        </div>

        <!-- Submit Button -->
        <div v-if="!showResult" class="text-center mt-6">
          <button
            @click="submitAnswer"
            :disabled="!selectedAnswer"
            :class="[
              'py-4 px-12 rounded-xl font-bold text-lg transition-all',
              selectedAnswer
                ? 'bg-green-500 hover:bg-green-600 text-white transform hover:scale-105'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            ]"
          >
            Valider la réponse
          </button>
        </div>

        <!-- Result Message -->
        <div v-if="showResult" class="mt-6">
          <div 
            :class="[
              'rounded-xl border-2 p-6',
              isCorrect() 
                ? 'bg-green-900/20 border-green-500' 
                : 'bg-red-900/20 border-red-500'
            ]"
          >
            <div v-if="isCorrect()" class="flex items-center gap-4">
              <CheckCircle :size="48" class="text-green-500" />
              <div>
                <h3 class="text-2xl font-bold text-green-400">Excellent choix !</h3>
                <p class="text-gray-300 mt-2">{{ answers.find(a => a.id === selectedAnswer).explanation }}</p>
              </div>
            </div>
            
            <div v-else class="flex items-center gap-4">
              <XCircle :size="48" class="text-red-500" />
              <div>
                <h3 class="text-2xl font-bold text-red-400">Attention !</h3>
                <p class="text-gray-300 mt-2">{{ answers.find(a => a.id === selectedAnswer).explanation }}</p>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <div class="text-center mt-6">
            <button
              @click="goBack"
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-xl transition-all transform hover:scale-105"
            >
              {{ isCorrect() ? '✓ Continuer vers le niveau 4' : 'Retour au parcours' }}
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
