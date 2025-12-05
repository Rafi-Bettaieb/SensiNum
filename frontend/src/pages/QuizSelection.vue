<script setup>
import { Lock, Check, Shield, Mail, Wifi } from 'lucide-vue-next';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// --- LOGIQUE DE DÉBLOCAGE DES NIVEAUX (existante) ---
const easyLevelCompleted = ref(false);
const mediumLevelCompleted = ref(false);

onMounted(() => {
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

const navigateToHard = () => {
  if (hardUnlocked.value) {
    router.push('/quiz-hard');
  }
};


// --- LOGIQUE DE FILTRAGE DES QUIZ ET MINI-JEUX (mise à jour de la route) ---

// 1. Définition des activités avec leur type et la ROUTE ajoutée
const activities = ref([
    {
        id: 1,
        type: 'Quiz',
        title: 'Quiz: Mots de passe robustes',
        desc: 'Évaluez la force de vos mots de passe et apprenez les meilleures pratiques.',
        icon: Shield,
        headerClass: 'header-peach',
        glowClass: 'glow-peach',
        textColor: 'text-peach',
        iconClass: 'text-[#1e293b] fill-[#1e293b]',
        // ROUTE AJOUTÉE POUR LE QUIZ
        route: '/quiz-passwords-robustes' 
    },
    {
        id: 2,
        type: 'Mini-jeu',
        title: 'Mini-jeu: Repérez le Phishing',
        desc: 'Identifiez les e-mails frauduleux dans une boîte de réception simulée.',
        icon: Mail,
        headerClass: 'header-blue',
        glowClass: 'glow-blue',
        textColor: 'text-blue',
        iconClass: 'text-[#1e293b]',
        route: '/game-phishing'
    },
    {
        id: 3,
        type: 'Quiz',
        title: 'Quiz: Confidentialité réseaux',
        desc: 'Testez vos connaissances sur les paramètres de confidentialité essentiels.',
        icon: Wifi,
        headerClass: 'header-teal',
        glowClass: 'glow-teal',
        textColor: 'text-teal',
        iconClass: 'text-[#115e59]',
        route: '/quiz-privacy'
    },
    // Ajoutez ici d'autres activités si nécessaire
]);

// 2. État du filtre actif
const activeFilter = ref('Tous');

// 3. Propriété calculée pour le filtrage
const filteredActivities = computed(() => {
    if (activeFilter.value === 'Tous') {
        return activities.value;
    }
    return activities.value.filter(activity => activity.type === activeFilter.value);
});

// 4. Fonction pour changer le filtre
const setFilter = (filter) => {
    activeFilter.value = filter;
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
          <button 
            :class="['filter-btn', { 'filter-btn-active': activeFilter === 'Tous' }]"
            @click="setFilter('Tous')"
          >
            Tous
          </button>
          <button 
            :class="['filter-btn', { 'filter-btn-active': activeFilter === 'Quiz' }]"
            @click="setFilter('Quiz')"
          >
            Quiz
          </button>
          <button 
            :class="['filter-btn', { 'filter-btn-active': activeFilter === 'Mini-jeu' }]"
            @click="setFilter('Mini-jeu')"
          >
            Mini-jeux
          </button>
        </div>

        <div class="cards-grid">
          
          <router-link 
            v-for="activity in filteredActivities" 
            :key="activity.id" 
            :to="activity.route" 
            class="game-card"
          >
            <div :class="['game-header', activity.headerClass]">
               <div :class="['glow-effect', activity.glowClass]"></div>
               <component :is="activity.icon" :size="72" :class="['game-icon', activity.iconClass]" />
            </div>
            <div class="game-content">
              <h4 :class="['game-title', activity.textColor]">{{ activity.title }}</h4>
              <p class="game-desc">{{ activity.desc }}</p>
            </div>
          </router-link>
          
        </div>
      </section>

    </div>
  </div>
</template>

<style src="../assets/styles/quiz-selection.css"></style>