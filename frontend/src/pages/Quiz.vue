<script setup>
import { Check, Lock, Shield, ArrowLeft } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';

const level1Completed = ref(false);
const level2Completed = ref(false);
const level3Completed = ref(false);
const level4Completed = ref(false);

onMounted(() => {
  // Charger l'état de complétion depuis localStorage
  const savedState1 = localStorage.getItem('quiz_level_1_completed');
  if (savedState1 === 'true') {
    level1Completed.value = true;
  }
  const savedState2 = localStorage.getItem('quiz_level_2_completed');
  if (savedState2 === 'true') {
    level2Completed.value = true;
  }
  const savedState3 = localStorage.getItem('quiz_level_3_completed');
  if (savedState3 === 'true') {
    level3Completed.value = true;
  }
  const savedState4 = localStorage.getItem('quiz_level_4_completed');
  if (savedState4 === 'true') {
    level4Completed.value = true;
  }
});
</script>

<template>
  <div class="quiz-page">
    
    <div class="back-nav">
       <router-link to="/quiz-selection" class="back-link">
         <ArrowLeft :size="20" />
         Retour aux niveaux
       </router-link>
    </div>

    <div class="main-content">
      
      <div class="header-section">
        <h1 class="main-title">Parcours Quiz Facile</h1>
        <p class="sub-title">Suivez le chemin pour devenir un expert.</p>
      </div>

      <div class="path-container">
        
        <svg class="background-svg">
          <!-- Chemin de niveau 1 à niveau 2 -->
          <path 
            id="path-1-to-2"
            :class="level1Completed ? 'path-completed' : ''"
            d="M224,50 C224,150 224,150 224,150" 
            fill="none" 
            stroke="#9ca3af" 
            stroke-width="4" 
            stroke-dasharray="10 10" 
          />
          
          <!-- Chemin du reste du parcours -->
          <path 
            id="path-rest"
            d="M224,150 C224,250 100,250 100,350 
               C100,450 350,450 350,550
               C350,650 224,650 224,750
               C224,850 224,850 224,900" 
            fill="none" 
            stroke="#9ca3af" 
            stroke-width="4" 
            stroke-dasharray="10 10" 
          />
        </svg>

        <router-link to="/email-simulation" class="step-item group step-center cursor-pointer">
          <div v-if="level1Completed" class="card-success">
            <Check :size="48" class="text-[#0d1117] stroke-[3]" />
          </div>
          <div v-else class="card-current">
            <span class="text-4xl font-extrabold text-[#00C16A]">1</span>
          </div>
          <span :class="level1Completed ? 'label-success' : 'label-current'">Introduction</span>
        </router-link>

        <div v-if="!level1Completed" class="step-item group step-right step-locked">
          <div class="card-locked">
            <Lock :size="32" class="text-gray-500" />
          </div>
          <span class="label-locked">Phishing</span>
        </div>
        <router-link v-else-if="!level2Completed" to="/phishing-quiz" class="step-item group step-right cursor-pointer">
          <div class="card-current">
            <span class="text-4xl font-extrabold text-[#00C16A]">2</span>
          </div>
          <span class="label-current">Phishing</span>
        </router-link>
        <router-link v-else to="/phishing-quiz" class="step-item group step-right cursor-pointer">
          <div class="card-success">
            <Check :size="48" class="text-[#0d1117] stroke-[3]" />
          </div>
          <span class="label-success">Phishing</span>
        </router-link>

        <div v-if="!level2Completed" class="step-item step-left step-locked">
          <div class="card-locked">
            <Lock :size="32" class="text-gray-500" />
          </div>
          <span class="label-locked">Mots de passe</span>
        </div>
        <router-link v-else-if="!level3Completed" to="/phone-scam" class="step-item step-left cursor-pointer">
          <div class="card-current">
            <span class="text-4xl font-extrabold text-[#00C16A]">3</span>
          </div>
          <span class="label-current">Mots de passe</span>
        </router-link>
        <router-link v-else to="/phone-scam" class="step-item step-left cursor-pointer">
          <div class="card-success">
            <Check :size="48" class="text-[#0d1117] stroke-[3]" />
          </div>
          <span class="label-success">Mots de passe</span>
        </router-link>

        <div v-if="!level3Completed" class="step-item step-center-left step-locked">
          <div class="card-locked">
            <Lock :size="32" class="text-gray-500" />
          </div>
          <span class="label-locked">Achats en ligne</span>
        </div>
        <router-link v-else-if="!level4Completed" to="/online-shopping" class="step-item step-center-left cursor-pointer">
          <div class="card-current">
            <span class="text-4xl font-extrabold text-[#00C16A]">4</span>
          </div>
          <span class="label-current">Achats en ligne</span>
        </router-link>
        <router-link v-else to="/online-shopping" class="step-item step-center-left cursor-pointer">
          <div class="card-success">
            <Check :size="48" class="text-[#0d1117] stroke-[3]" />
          </div>
          <span class="label-success">Achats en ligne</span>
        </router-link>

        <div v-if="!level4Completed" class="step-item step-center pt-8 step-locked">
          <div class="card-boss">
             <Shield :size="48" class="text-gray-500" />
          </div>
          <span class="label-locked">Examen Final</span>
        </div>
        <router-link v-else to="/final-exam" class="step-item step-center pt-8 cursor-pointer">
          <div class="card-boss">
             <Shield :size="48" class="text-yellow-600" />
          </div>
          <span class="label-current">Examen Final</span>
        </router-link>

      </div>
    </div>
  </div>
</template>

<style src="../assets/styles/quiz.css"></style>