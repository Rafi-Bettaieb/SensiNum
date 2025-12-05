<script setup>
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const currentQuestion = ref(0);
const selectedAnswer = ref(null);
const showResult = ref(false);
const score = ref(0);
const quizCompleted = ref(false);

const questions = [
  {
    id: 1,
    question: "C'est quoi un mot de passe \"fort\" ?",
    options: [
      { id: 'A', text: 'Un mot de passe court' },
      { id: 'B', text: 'Un mot de passe long et varié' },
      { id: 'C', text: 'Le prénom de ton chien' },
      { id: 'D', text: '123456' }
    ],
    correctAnswer: 'B',
    explanation: 'Un mot de passe fort doit être long (au moins 12 caractères) et contenir une combinaison de lettres majuscules, minuscules, chiffres et caractères spéciaux.'
  },
  {
    id: 2,
    question: "Qu'est-ce que le phishing ?",
    options: [
      { id: 'A', text: 'Un sport nautique' },
      { id: 'B', text: 'Une technique pour voler des informations personnelles' },
      { id: 'C', text: 'Un type de virus informatique' },
      { id: 'D', text: 'Un logiciel de protection' }
    ],
    correctAnswer: 'B',
    explanation: 'Le phishing est une technique de fraude utilisée par des cybercriminels pour voler des informations personnelles en se faisant passer pour une entité de confiance.'
  },
  {
    id: 3,
    question: "Comment reconnaître un email de phishing ?",
    options: [
      { id: 'A', text: 'Il demande des informations urgentes' },
      { id: 'B', text: "L'adresse de l'expéditeur est suspecte" },
      { id: 'C', text: 'Il contient des liens douteux' },
      { id: 'D', text: 'Toutes ces réponses' }
    ],
    correctAnswer: 'D',
    explanation: 'Un email de phishing présente souvent plusieurs signes : urgence artificielle, adresse suspecte, liens douteux, fautes d\'orthographe, demandes inhabituelles.'
  },
  {
    id: 4,
    question: "Que faire si vous recevez un email suspect ?",
    options: [
      { id: 'A', text: 'Cliquer sur les liens pour vérifier' },
      { id: 'B', text: 'Le supprimer immédiatement' },
      { id: 'C', text: 'Répondre pour demander des clarifications' },
      { id: 'D', text: 'Transférer à tous vos contacts' }
    ],
    correctAnswer: 'B',
    explanation: 'Si vous recevez un email suspect, la meilleure action est de le supprimer sans cliquer sur aucun lien. En cas de doute, contactez directement l\'entreprise par un canal officiel.'
  },
  {
    id: 5,
    question: "Quelle est la meilleure façon de protéger vos comptes en ligne ?",
    options: [
      { id: 'A', text: 'Utiliser le même mot de passe partout' },
      { id: 'B', text: "Activer l'authentification à deux facteurs" },
      { id: 'C', text: 'Partager vos mots de passe avec des amis' },
      { id: 'D', text: 'Noter vos mots de passe sur papier' }
    ],
    correctAnswer: 'B',
    explanation: "L'authentification à deux facteurs (2FA) ajoute une couche de sécurité supplémentaire en demandant une seconde forme de vérification en plus du mot de passe."
  }
];

const selectAnswer = (optionId) => {
  if (!showResult.value) {
    selectedAnswer.value = optionId;
  }
};

const submitAnswer = () => {
  if (selectedAnswer.value) {
    showResult.value = true;
    if (selectedAnswer.value === questions[currentQuestion.value].correctAnswer) {
      score.value++;
    }
    // Marquer le niveau 2 comme complété dès qu'on valide une réponse correcte
    if (selectedAnswer.value === questions[currentQuestion.value].correctAnswer) {
      localStorage.setItem('quiz_level_2_completed', 'true');
    }
  }
};

const nextQuestion = () => {
  // Si c'est une bonne réponse, retourner au parcours avec le niveau 3 déverrouillé
  if (isCorrect()) {
    goBack();
  } else if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
    selectedAnswer.value = null;
    showResult.value = false;
  } else {
    quizCompleted.value = true;
  }
};

const restartQuiz = () => {
  currentQuestion.value = 0;
  selectedAnswer.value = null;
  showResult.value = false;
  score.value = 0;
  quizCompleted.value = false;
};

const goBack = () => {
  router.push('/quiz');
};

const currentQ = () => questions[currentQuestion.value];
const isCorrect = () => selectedAnswer.value === currentQ().correctAnswer;
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
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Quiz - Niveau Phishing
          </h1>
          <p class="text-xl text-gray-300">
            Testez vos connaissances en sécurité numérique
          </p>
        </div>
      </div>

      <!-- Progress Bar -->
      <div v-if="!quizCompleted" class="mb-8">
        <div class="flex justify-between text-sm text-gray-400 mb-2">
          <span>Question {{ currentQuestion + 1 }} / {{ questions.length }}</span>
          <span>Score: {{ score }} / {{ questions.length }}</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-3">
          <div 
            class="bg-green-500 h-3 rounded-full transition-all duration-300"
            :style="{ width: ((currentQuestion + 1) / questions.length * 100) + '%' }"
          ></div>
        </div>
      </div>

      <!-- Quiz Content -->
      <div v-if="!quizCompleted" class="space-y-6">
        
        <!-- Question Card -->
        <div class="bg-gray-800 rounded-2xl border border-gray-700 p-8">
          <h2 class="text-2xl font-bold mb-6 text-white">
            {{ currentQ().question }}
          </h2>

          <!-- Options -->
          <div class="space-y-4">
            <button
              v-for="option in currentQ().options"
              :key="option.id"
              @click="selectAnswer(option.id)"
              :disabled="showResult"
              :class="[
                'w-full text-left p-4 rounded-xl border-2 transition-all',
                selectedAnswer === option.id && !showResult
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-gray-700 bg-gray-900/50 hover:border-gray-600',
                showResult && option.id === currentQ().correctAnswer
                  ? 'border-green-500 bg-green-500/20'
                  : '',
                showResult && option.id === selectedAnswer && option.id !== currentQ().correctAnswer
                  ? 'border-red-500 bg-red-500/20'
                  : '',
                showResult ? 'cursor-not-allowed' : 'cursor-pointer'
              ]"
            >
              <div class="flex items-center gap-3">
                <span class="text-lg font-bold text-gray-400">{{ option.id }}.</span>
                <span class="text-lg">{{ option.text }}</span>
                <span v-if="showResult && option.id === currentQ().correctAnswer" class="ml-auto">
                  <CheckCircle :size="24" class="text-green-500" />
                </span>
                <span v-if="showResult && option.id === selectedAnswer && option.id !== currentQ().correctAnswer" class="ml-auto">
                  <XCircle :size="24" class="text-red-500" />
                </span>
              </div>
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <div v-if="!showResult" class="text-center">
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

        <!-- Result Section -->
        <div v-if="showResult" class="space-y-6">
          <!-- Correct/Incorrect Message -->
          <div 
            :class="[
              'rounded-2xl border-2 p-6',
              isCorrect() 
                ? 'bg-green-900/20 border-green-500' 
                : 'bg-red-900/20 border-red-500'
            ]"
          >
            <div v-if="isCorrect()" class="flex items-center gap-4">
              <CheckCircle :size="48" class="text-green-500" />
              <div>
                <h3 class="text-2xl font-bold text-green-400">Bonne réponse !</h3>
                <p class="text-gray-300 mt-2">{{ currentQ().explanation }}</p>
              </div>
            </div>
            
            <div v-else class="flex items-center gap-4">
              <XCircle :size="48" class="text-red-500" />
              <div>
                <h3 class="text-2xl font-bold text-red-400">Incorrect</h3>
                <p class="text-gray-300 mt-2">{{ currentQ().explanation }}</p>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <div class="text-center">
            <button
              @click="nextQuestion"
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-xl transition-all transform hover:scale-105"
            >
              {{ isCorrect() ? '✓ Continuer vers le niveau 3' : 'Question suivante' }}
            </button>
          </div>
        </div>

      </div>

      <!-- Quiz Completed -->
      <div v-else class="space-y-8">
        <div class="bg-gray-800 rounded-2xl border border-gray-700 p-8 text-center">
          <h2 class="text-4xl font-bold mb-4">Quiz terminé !</h2>
          
          <div class="my-8">
            <div class="text-6xl font-bold mb-4" :class="score >= 3 ? 'text-green-500' : 'text-yellow-500'">
              {{ score }} / {{ questions.length }}
            </div>
            <p class="text-2xl text-gray-300">
              {{ score >= 4 ? 'Excellent !' : score >= 3 ? 'Bien joué !' : 'Continuez à apprendre !' }}
            </p>
          </div>

          <div v-if="score >= 3" class="bg-green-900/20 border border-green-500 rounded-xl p-6 mb-6">
            <CheckCircle :size="48" class="text-green-500 mx-auto mb-3" />
            <p class="text-xl text-green-400 font-semibold">
              🎉 Niveau 2 validé ! Niveau 3 déverrouillé.
            </p>
          </div>

          <div v-else class="bg-yellow-900/20 border border-yellow-500 rounded-xl p-6 mb-6">
            <p class="text-xl text-yellow-400">
              Vous devez obtenir au moins 3 bonnes réponses pour débloquer le niveau suivant.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              v-if="score >= 3"
              @click="goBack"
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
            >
              ✓ Continuer vers le niveau 3
            </button>
            <button
              @click="restartQuiz"
              class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all"
            >
              Recommencer
            </button>
            <button
              v-if="score < 3"
              @click="goBack"
              class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all"
            >
              Retour au parcours
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
