<script setup>
import { ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle, Mail, Lock, CreditCard } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();

const questions = [
  {
    id: 1,
    type: 'mcq',
    question: 'Quel est le principal signe d\'un email de phishing ?',
    options: [
      'L\'expéditeur est une personne que vous connaissez',
      'L\'email demande des informations personnelles urgentes',
      'L\'email contient votre nom complet',
      'L\'email est court'
    ],
    correctAnswer: 1,
    icon: 'Mail'
  },
  {
    id: 2,
    type: 'mcq',
    question: 'Qu\'est-ce qui rend un mot de passe fort ?',
    options: [
      'Votre date de naissance',
      'Un seul mot du dictionnaire',
      'Un mélange de lettres, chiffres et symboles (12+ caractères)',
      'Le nom de votre animal de compagnie'
    ],
    correctAnswer: 2,
    icon: 'Lock'
  },
  {
    id: 3,
    type: 'scenario',
    question: 'Vous recevez un SMS vous demandant de cliquer sur un lien pour "vérifier votre compte bancaire". Que faites-vous ?',
    options: [
      'Je clique sur le lien immédiatement',
      'J\'ignore le message et je contacte ma banque directement',
      'Je réponds au SMS avec mes informations',
      'Je transfère le message à mes amis'
    ],
    correctAnswer: 1,
    icon: 'AlertTriangle'
  },
  {
    id: 4,
    type: 'mcq',
    question: 'Pour recevoir un paiement, avez-vous besoin de donner le code CVV de votre carte ?',
    options: [
      'Oui, toujours',
      'Oui, si le montant est élevé',
      'Non, jamais - l\'IBAN suffit',
      'Seulement pour les paiements internationaux'
    ],
    correctAnswer: 2,
    icon: 'CreditCard'
  },
  {
    id: 5,
    type: 'scenario',
    question: 'Un site web vous demande vos données bancaires complètes pour "valider votre identité". L\'URL est "https://amaz0n-verification.com". Que faites-vous ?',
    options: [
      'Je donne mes informations car l\'URL commence par https',
      'Je vérifie l\'URL suspecte et je quitte le site',
      'Je remplis le formulaire rapidement',
      'Je continue sans vérifier'
    ],
    correctAnswer: 1,
    icon: 'Shield'
  },
  {
    id: 6,
    type: 'mcq',
    question: 'Quelle est la meilleure action si vous recevez un appel suspect demandant vos informations personnelles ?',
    options: [
      'Donner les informations si l\'appelant semble professionnel',
      'Raccrocher et contacter l\'organisme officiel directement',
      'Donner seulement votre nom',
      'Demander à rappeler sur le même numéro'
    ],
    correctAnswer: 1,
    icon: 'AlertTriangle'
  },
  {
    id: 7,
    type: 'scenario',
    question: 'Vous vendez un objet en ligne. L\'acheteur vous envoie un lien pour "confirmer le paiement". Que faites-vous ?',
    options: [
      'Je clique sur le lien pour confirmer',
      'J\'attends la notification officielle de la plateforme',
      'Je donne mes informations bancaires',
      'Je réponds avec mon numéro de carte'
    ],
    correctAnswer: 1,
    icon: 'Shield'
  },
  {
    id: 8,
    type: 'mcq',
    question: 'Quelle information NE devez-vous JAMAIS partager en ligne ?',
    options: [
      'Votre adresse email professionnelle',
      'Le nom de votre entreprise',
      'Votre mot de passe',
      'Votre ville de résidence'
    ],
    correctAnswer: 2,
    icon: 'Lock'
  }
];

const currentQuestionIndex = ref(0);
const selectedAnswers = ref({});
const showResult = ref(false);
const examFinished = ref(false);

const currentQuestion = computed(() => questions[currentQuestionIndex.value]);

const selectAnswer = (index) => {
  if (!examFinished.value) {
    selectedAnswers.value[currentQuestion.value.id] = index;
  }
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++;
    showResult.value = false;
  }
};

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    showResult.value = false;
  }
};

const submitAnswer = () => {
  showResult.value = true;
};

const finishExam = () => {
  examFinished.value = true;
};

const score = computed(() => {
  let correct = 0;
  questions.forEach(q => {
    if (selectedAnswers.value[q.id] === q.correctAnswer) {
      correct++;
    }
  });
  return correct;
});

const percentage = computed(() => {
  return Math.round((score.value / questions.length) * 100);
});

const passed = computed(() => {
  return percentage.value >= 75;
});

const saveResults = () => {
  if (passed.value) {
    localStorage.setItem('final_exam_completed', 'true');
    localStorage.setItem('final_exam_score', percentage.value.toString());
  }
  router.push('/quiz');
};

const retryExam = () => {
  currentQuestionIndex.value = 0;
  selectedAnswers.value = {};
  showResult.value = false;
  examFinished.value = false;
};

const isAnswered = computed(() => {
  return selectedAnswers.value[currentQuestion.value.id] !== undefined;
});

const isCorrectAnswer = (questionId, answerIndex) => {
  const question = questions.find(q => q.id === questionId);
  return answerIndex === question.correctAnswer;
};

const goBack = () => {
  router.push('/quiz');
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      
      <!-- Header -->
      <div class="mb-8">
        <button @click="goBack" class="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors mb-6">
          <ArrowLeft :size="20" />
          Retour au parcours
        </button>
        
        <div class="text-center">
          <div class="flex items-center justify-center gap-3 mb-4">
            <Shield :size="48" class="text-yellow-500" />
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            🏆 Examen Final 🏆
          </h1>
          <p class="text-xl text-gray-300">
            Testez vos connaissances en sécurité numérique
          </p>
          <p class="text-sm text-gray-400 mt-2">
            Score minimum requis : 75% (6/8 questions)
          </p>
        </div>
      </div>

      <!-- Exam Content -->
      <div v-if="!examFinished" class="space-y-6">
        
        <!-- Progress Bar -->
        <div class="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-400">Progression</span>
            <span class="text-sm font-semibold text-green-500">
              Question {{ currentQuestionIndex + 1 }} / {{ questions.length }}
            </span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-3">
            <div 
              class="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
              :style="{ width: ((currentQuestionIndex + 1) / questions.length * 100) + '%' }"
            ></div>
          </div>
        </div>

        <!-- Question Card -->
        <div class="bg-gray-800 rounded-2xl border border-gray-700 p-8">
          <div class="flex items-start gap-4 mb-6">
            <div class="bg-blue-900/30 p-3 rounded-lg">
              <Mail v-if="currentQuestion.icon === 'Mail'" :size="32" class="text-blue-400" />
              <Lock v-else-if="currentQuestion.icon === 'Lock'" :size="32" class="text-blue-400" />
              <AlertTriangle v-else-if="currentQuestion.icon === 'AlertTriangle'" :size="32" class="text-yellow-400" />
              <CreditCard v-else-if="currentQuestion.icon === 'CreditCard'" :size="32" class="text-blue-400" />
              <Shield v-else :size="32" class="text-green-400" />
            </div>
            <div class="flex-1">
              <div class="text-sm text-gray-400 mb-2">
                {{ currentQuestion.type === 'mcq' ? 'Question à choix multiples' : 'Mise en situation' }}
              </div>
              <h2 class="text-2xl font-bold text-white">
                {{ currentQuestion.question }}
              </h2>
            </div>
          </div>

          <!-- Options -->
          <div class="space-y-3">
            <div
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              @click="selectAnswer(index)"
              :class="[
                'p-4 rounded-xl border-2 cursor-pointer transition-all',
                selectedAnswers[currentQuestion.id] === index && !showResult
                  ? 'bg-blue-900/50 border-blue-500'
                  : selectedAnswers[currentQuestion.id] === index && showResult && isCorrectAnswer(currentQuestion.id, index)
                  ? 'bg-green-900/50 border-green-500'
                  : selectedAnswers[currentQuestion.id] === index && showResult && !isCorrectAnswer(currentQuestion.id, index)
                  ? 'bg-red-900/50 border-red-500'
                  : showResult && isCorrectAnswer(currentQuestion.id, index)
                  ? 'bg-green-900/30 border-green-600'
                  : 'bg-gray-700/30 border-gray-600 hover:border-gray-500'
              ]"
            >
              <div class="flex items-center gap-3">
                <div
                  :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0',
                    selectedAnswers[currentQuestion.id] === index && showResult && isCorrectAnswer(currentQuestion.id, index)
                      ? 'bg-green-500 text-white'
                      : selectedAnswers[currentQuestion.id] === index && showResult && !isCorrectAnswer(currentQuestion.id, index)
                      ? 'bg-red-500 text-white'
                      : showResult && isCorrectAnswer(currentQuestion.id, index)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-600 text-white'
                  ]"
                >
                  {{ String.fromCharCode(65 + index) }}
                </div>
                <p class="text-white flex-1">{{ option }}</p>
                <div v-if="showResult && isCorrectAnswer(currentQuestion.id, index)" class="flex-shrink-0">
                  <CheckCircle :size="24" class="text-green-500" />
                </div>
                <div v-if="showResult && selectedAnswers[currentQuestion.id] === index && !isCorrectAnswer(currentQuestion.id, index)" class="flex-shrink-0">
                  <XCircle :size="24" class="text-red-500" />
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between items-center mt-8 gap-4">
            <button
              @click="previousQuestion"
              :disabled="currentQuestionIndex === 0"
              :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                currentQuestionIndex === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              ]"
            >
              ← Précédent
            </button>

            <button
              v-if="!showResult && isAnswered"
              @click="submitAnswer"
              class="px-6 py-3 rounded-xl font-semibold bg-green-500 hover:bg-green-600 text-white transition-all"
            >
              Valider
            </button>

            <button
              v-if="showResult && currentQuestionIndex < questions.length - 1"
              @click="nextQuestion"
              class="px-6 py-3 rounded-xl font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-all"
            >
              Suivant →
            </button>

            <button
              v-if="showResult && currentQuestionIndex === questions.length - 1"
              @click="finishExam"
              class="px-6 py-3 rounded-xl font-semibold bg-yellow-500 hover:bg-yellow-600 text-white transition-all"
            >
              Terminer l'examen 🏁
            </button>
          </div>
        </div>
      </div>

      <!-- Results Screen -->
      <div v-else class="bg-gray-800 rounded-2xl border border-gray-700 p-8 text-center">
        <div class="mb-6">
          <div v-if="passed" class="text-green-500 mb-4">
            <CheckCircle :size="80" class="mx-auto" />
          </div>
          <div v-else class="text-red-500 mb-4">
            <XCircle :size="80" class="mx-auto" />
          </div>
          
          <h2 class="text-3xl font-bold mb-4">
            {{ passed ? '🎉 Félicitations ! 🎉' : '😔 Pas encore...' }}
          </h2>
          
          <div class="text-6xl font-bold mb-4" :class="passed ? 'text-green-500' : 'text-red-500'">
            {{ score }} / {{ questions.length }}
          </div>
          
          <div class="text-2xl text-gray-300 mb-6">
            Score : {{ percentage }}%
          </div>
        </div>

        <div class="bg-gray-900/50 rounded-xl p-6 mb-6">
          <p v-if="passed" class="text-lg text-gray-300 leading-relaxed">
            Bravo ! Vous avez réussi l'examen final avec un excellent score. 
            Vous maîtrisez les bases de la sécurité numérique ! 🛡️
          </p>
          <p v-else class="text-lg text-gray-300 leading-relaxed">
            Vous avez obtenu {{ percentage }}%, mais il faut au moins 75% pour valider l'examen.
            Révisez les niveaux précédents et réessayez ! 💪
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="saveResults"
            class="px-8 py-3 rounded-xl font-bold text-lg bg-green-500 hover:bg-green-600 text-white transition-all"
          >
            ✓ Retour au parcours
          </button>
          <button
            v-if="!passed"
            @click="retryExam"
            class="px-8 py-3 rounded-xl font-bold text-lg bg-blue-500 hover:bg-blue-600 text-white transition-all"
          >
            ↻ Réessayer
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
strong {
  font-weight: 600;
}
</style>
