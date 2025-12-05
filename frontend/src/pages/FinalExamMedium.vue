<script setup>
import { ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle, Mail, Lock, CreditCard, Phone, ShoppingCart } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();

const questions = [
  {
    id: 1,
    type: 'scenario',
    question: 'Vous recevez un email de "Microsoft Security" avec un lien vous demandant de vérifier votre compte sous 24h. L\'expéditeur est "security@microsoftsecure-verify.com". Que faites-vous ?',
    options: [
      'Je clique sur le lien car c\'est urgent',
      'Je vérifie l\'adresse email suspecte et je contacte Microsoft directement',
      'Je réponds à l\'email pour demander plus d\'informations',
      'Je transfère l\'email à mes contacts pour les avertir'
    ],
    correctAnswer: 1,
    icon: 'Mail'
  },
  {
    id: 2,
    type: 'mcq',
    question: 'Quel mot de passe est le PLUS sécurisé ?',
    options: [
      'MotDePasse123!',
      'MonNom2024',
      'aZ9#kL2@pR5&mN8!qT1',
      'Password123456'
    ],
    correctAnswer: 2,
    icon: 'Lock'
  },
  {
    id: 3,
    type: 'scenario',
    question: 'Vous recevez un SMS de votre "mère" qui dit : "Bonjour chéri(e), j\'ai un problème avec ma carte bancaire. Peux-tu m\'envoyer ton code de carte pour que je fasse un virement ?" Que faites-vous ?',
    options: [
      'J\'envoie le code immédiatement pour aider',
      'J\'appelle ma mère directement pour vérifier',
      'Je demande plus de détails par SMS',
      'J\'envoie seulement les 4 premiers chiffres'
    ],
    correctAnswer: 1,
    icon: 'Phone'
  },
  {
    id: 4,
    type: 'mcq',
    question: 'Sur un site de shopping en ligne, quels sont les signaux d\'alarme d\'une arnaque ?',
    options: [
      'Prix trop beaux pour être vrais + Pas de HTTPS',
      'Avis clients détaillés et variés',
      'Plusieurs moyens de paiement sécurisés',
      'URL identique au site officiel'
    ],
    correctAnswer: 0,
    icon: 'ShoppingCart'
  },
  {
    id: 5,
    type: 'scenario',
    question: 'Un site vous propose un iPhone 15 Pro neuf à 99€. Le site demande un paiement par Bitcoin ou Western Union uniquement. Que faites-vous ?',
    options: [
      'J\'achète rapidement avant que l\'offre ne disparaisse',
      'Je reconnais une arnaque évidente et je quitte le site',
      'Je négocie le prix',
      'Je paie car Bitcoin est sécurisé'
    ],
    correctAnswer: 1,
    icon: 'AlertTriangle'
  },
  {
    id: 6,
    type: 'mcq',
    question: 'Combien de critères un mot de passe FORT devrait-il respecter au minimum ?',
    options: [
      '3 critères : longueur, majuscules, chiffres',
      '5 critères : longueur, majuscules, minuscules, chiffres, caractères spéciaux',
      '8 critères : longueur, casse mixte, chiffres, spéciaux, pas de répétitions, pas de séquences, pas de mots courants, unique',
      '2 critères : longueur et chiffres'
    ],
    correctAnswer: 2,
    icon: 'Lock'
  },
  {
    id: 7,
    type: 'scenario',
    question: 'Vous recevez un email de "La Poste" indiquant qu\'un colis est en attente et qu\'il faut payer 2,99€ de frais de douane via un lien. Le domaine est "laposte-colis-fr.com". Que faites-vous ?',
    options: [
      'Je paie les frais pour recevoir mon colis',
      'Je vérifie le domaine suspect et je contacte La Poste directement',
      'Je clique sur le lien pour voir les détails',
      'Je réponds à l\'email pour demander mon numéro de suivi'
    ],
    correctAnswer: 1,
    icon: 'Mail'
  },
  {
    id: 8,
    type: 'mcq',
    question: 'Quelle action est la PLUS sécurisée lors d\'un appel suspect ?',
    options: [
      'Donner seulement mon prénom',
      'Raccrocher et appeler l\'organisme officiel avec un numéro vérifié',
      'Demander à rappeler sur le même numéro',
      'Répondre aux questions si l\'appelant connaît mon nom'
    ],
    correctAnswer: 1,
    icon: 'Phone'
  },
  {
    id: 9,
    type: 'scenario',
    question: 'Un site e-commerce affiche des avis clients tous similaires : "Excellent produit!", "Super qualité!", "Livraison rapide!". Que pensez-vous ?',
    options: [
      'Les avis sont authentiques car ils sont positifs',
      'C\'est suspect - les vrais avis sont plus variés et détaillés',
      'C\'est normal pour un bon site',
      'Les avis courts sont plus fiables'
    ],
    correctAnswer: 1,
    icon: 'ShoppingCart'
  },
  {
    id: 10,
    type: 'mcq',
    question: 'Quel est le danger principal d\'utiliser le même mot de passe partout ?',
    options: [
      'C\'est plus facile à retenir',
      'Si un site est piraté, TOUS vos comptes sont compromis',
      'Les sites peuvent partager vos mots de passe',
      'Aucun danger tant que le mot de passe est long'
    ],
    correctAnswer: 1,
    icon: 'Shield'
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
  return percentage.value >= 80;
});

const saveResults = () => {
  if (passed.value) {
    localStorage.setItem('final_exam_medium_completed', 'true');
    localStorage.setItem('final_exam_medium_score', percentage.value.toString());
  }
  router.push('/quiz-medium');
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
  router.push('/quiz-medium');
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
            🏆 Examen Final - Niveau Moyen 🏆
          </h1>
          <p class="text-xl text-gray-300">
            Démontrez votre maîtrise de la sécurité numérique
          </p>
          <p class="text-sm text-gray-400 mt-2">
            Score minimum requis : 80% (8/10 questions)
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
              <Phone v-else-if="currentQuestion.icon === 'Phone'" :size="32" class="text-purple-400" />
              <ShoppingCart v-else-if="currentQuestion.icon === 'ShoppingCart'" :size="32" class="text-green-400" />
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
            Bravo ! Vous avez réussi l'examen final de niveau moyen avec un excellent score. 
            Vous maîtrisez la détection des menaces avancées ! 🛡️
          </p>
          <p v-else class="text-lg text-gray-300 leading-relaxed">
            Vous avez obtenu {{ percentage }}%, mais il faut au moins 80% pour valider l'examen.
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
