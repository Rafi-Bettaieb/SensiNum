<script setup>
import { Lock, Check, Shield, Mail, Wifi } from 'lucide-vue-next';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const easyLevelCompleted = ref(false);
const mediumLevelCompleted = ref(false);

onMounted(() => {
  // Charger l'état de complétion des niveaux
  const finalExamCompleted = localStorage.getItem('final_exam_completed');
  if (finalExamCompleted === 'true') {
    easyLevelCompleted.value = true;
  }
  
  // Pour le niveau moyen
  const mediumCompleted = localStorage.getItem('medium_level_completed');
  if (mediumCompleted === 'true') {
    mediumLevelCompleted.value = true;
  }
});

const mediumUnlocked = computed(() => easyLevelCompleted.value);

const navigateToMedium = () => {
  if (mediumUnlocked.value) {
    router.push('/quiz-medium');
  }
};
</script>

<template>
  <div class="selection-page">
    
    <div class="page-container">
      
      <header class="page-header">
        <h1 class="page-title">Testez vos connaissances !</h1>
        <p class="page-subtitle">Apprenez en vous amusant avec nos quiz et mini-jeux.</p>
      </header>

      <section class="section-container">
        <h2 class="section-title">Quiz par niveau</h2>
        <p class="section-desc">Progressez à votre rythme et débloquez de nouveaux défis !</p>
        
        <div class="cards-grid">
          
          <div class="level-card-active">
            <h3 class="level-title-active">Niveau Facile</h3>
            <p class="level-subtitle">Pour bien commencer</p>
            
            <div class="level-icon-circle">
               <Check v-if="easyLevelCompleted" :size="32" class="text-black stroke-[3]" />
               <span v-else class="text-2xl font-extrabold text-[#00C16A]">1</span>
            </div>
            <p v-if="easyLevelCompleted" class="level-percent">100%</p>

            <router-link to="/quiz" class="btn-play">
              {{ easyLevelCompleted ? 'Rejouer' : 'Jouer' }}
            </router-link>
          </div>

          <div 
            :class="mediumUnlocked ? 'level-card-active' : 'level-card-locked'"
            @click="navigateToMedium"
          >
            <h3 :class="mediumUnlocked ? 'level-title-active' : 'level-title-locked'">Niveau Moyen</h3>
            <p class="level-subtitle">Prêt pour un défi ?</p>
            
            <div v-if="mediumUnlocked" class="level-icon-circle">
               <Check v-if="mediumLevelCompleted" :size="32" class="text-black stroke-[3]" />
               <span v-else class="text-2xl font-extrabold text-black">2</span>
            </div>
            <div v-else class="locked-icon-wrapper">
                <Lock :size="32" class="text-gray-400" />
            </div>

            <button 
              v-if="mediumUnlocked"
              class="btn-play"
            >
              {{ mediumLevelCompleted ? 'Rejouer' : 'Jouer' }}
            </button>
            <button v-else disabled class="btn-locked">
              Verrouillé
            </button>
          </div>

        </div>
      </section>

      <section>
        <h2 class="section-title">Nos Quiz & Mini-Jeux</h2>
        <p class="section-desc">Choisissez une carte pour commencer !</p>
        
        <div class="filter-container">
          <button class="filter-btn-active">Tous</button>
          <button class="filter-btn">Quiz</button>
          <button class="filter-btn">Mini-jeux</button>
        </div>

        <div class="cards-grid">
          
          <div class="game-card">
            <div class="game-header header-peach">
               <div class="glow-effect glow-peach"></div>
               <Shield :size="72" class="game-icon text-[#1e293b] fill-[#1e293b]" />
            </div>
            <div class="game-content">
              <h4 class="game-title text-peach">Quiz: Mots de passe robustes</h4>
              <p class="game-desc">Évaluez la force de vos mots de passe et apprenez les meilleures pratiques.</p>
            </div>
          </div>

          <div class="game-card">
            <div class="game-header header-blue">
               <div class="glow-effect glow-blue"></div>
               <Mail :size="72" class="game-icon text-[#1e293b]" />
            </div>
            <div class="game-content">
              <h4 class="game-title text-blue">Mini-jeu: Repérez le Phishing</h4>
              <p class="game-desc">Identifiez les e-mails frauduleux dans une boîte de réception simulée.</p>
            </div>
          </div>

          <div class="game-card">
            <div class="game-header header-teal">
               <div class="glow-effect glow-teal"></div>
               <Wifi :size="72" class="game-icon text-[#115e59]" />
            </div>
            <div class="game-content">
              <h4 class="game-title text-teal">Quiz: Confidentialité réseaux</h4>
              <p class="game-desc">Testez vos connaissances sur les paramètres de confidentialité essentiels.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  </div>
</template>

<style src="../assets/styles/quiz-selection.css"></style>