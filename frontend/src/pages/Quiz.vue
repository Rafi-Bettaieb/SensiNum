<template>
  <div class="container mx-auto px-4 py-8">
    <SectionTitle 
      title="Quiz Cybersécurité" 
      subtitle="Testez vos connaissances en sécurité informatique"
      :level="1"
      align="center"
      class="mb-8"
    />

    <div class="max-w-3xl mx-auto">
      <div v-if="!quizStarted" class="text-center">
        <Card>
          <h3 class="text-xl font-semibold mb-4">Prêt à tester vos connaissances ?</h3>
          <p class="text-gray-700 mb-6">
            Ce quiz contient {{ questions.length }} questions sur différents aspects de la cybersécurité.
          </p>
          <Button variant="primary" size="lg" @click="startQuiz">
            Commencer le quiz
          </Button>
        </Card>
      </div>

      <div v-else-if="!quizFinished">
        <QuizProgress
          :current-question="currentQuestionIndex + 1"
          :total-questions="questions.length"
          :score="score"
          class="mb-6"
        />

        <Question
          v-if="currentQuestion"
          :question-number="currentQuestionIndex + 1"
          :question="currentQuestion.question"
          :options="currentQuestion.options"
          :correct-answer="currentQuestion.correctAnswer"
          :explanation="currentQuestion.explanation"
          :show-feedback="showFeedback"
          @answer="handleAnswer"
        />

        <div class="mt-6 flex justify-end">
          <Button
            v-if="showFeedback"
            variant="primary"
            @click="nextQuestion"
          >
            {{ currentQuestionIndex < questions.length - 1 ? 'Question suivante' : 'Voir les résultats' }}
          </Button>
        </div>
      </div>

      <div v-else class="text-center">
        <Card>
          <template #header>
            <h3 class="text-2xl font-bold">Résultats du Quiz</h3>
          </template>
          <div class="py-6">
            <div class="text-5xl font-bold text-blue-600 mb-2">
              {{ score }} / {{ questions.length }}
            </div>
            <p class="text-xl text-gray-700 mb-4">{{ getScoreFeedback() }}</p>
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <p class="text-sm text-gray-700">
                {{ getDetailedFeedback() }}
              </p>
            </div>
            <Button variant="primary" size="lg" @click="restartQuiz">
              Recommencer le quiz
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SectionTitle from '../components/ui/SectionTitle.vue';
import Card from '../components/ui/Card.vue';
import Button from '../components/ui/Button.vue';
import Question from '../components/quiz/Question.vue';
import QuizProgress from '../components/quiz/QuizProgress.vue';

const quizStarted = ref(false);
const quizFinished = ref(false);
const currentQuestionIndex = ref(0);
const score = ref(0);
const showFeedback = ref(false);

const questions = ref([
  {
    question: 'Qu\'est-ce qu\'un mot de passe fort ?',
    options: [
      'Un mot de passe court et facile à retenir',
      'Votre date de naissance',
      'Une combinaison de lettres, chiffres et symboles d\'au moins 12 caractères',
      'Le nom de votre animal de compagnie'
    ],
    correctAnswer: 2,
    explanation: 'Un mot de passe fort doit contenir au moins 12 caractères avec une combinaison de lettres majuscules, minuscules, chiffres et symboles.'
  },
  {
    question: 'Que signifie HTTPS dans une URL ?',
    options: [
      'Hyper Text Transfer Protocol Secure',
      'High Technology Transfer Protocol System',
      'Hyper Transfer Text Protocol Safe',
      'Home Transfer Text Protocol Security'
    ],
    correctAnswer: 0,
    explanation: 'HTTPS signifie HyperText Transfer Protocol Secure. Le "S" indique que la connexion est sécurisée par SSL/TLS.'
  },
  {
    question: 'Qu\'est-ce que le phishing ?',
    options: [
      'Un logiciel antivirus',
      'Une technique pour voler des informations personnelles via des emails frauduleux',
      'Un type de pare-feu',
      'Un protocole de sécurité'
    ],
    correctAnswer: 1,
    explanation: 'Le phishing est une technique d\'escroquerie qui utilise des emails, SMS ou sites web frauduleux pour voler des informations personnelles.'
  },
  {
    question: 'Que devez-vous faire si vous recevez un email suspect ?',
    options: [
      'Cliquer sur tous les liens pour vérifier',
      'Répondre immédiatement',
      'Ne pas cliquer sur les liens et signaler l\'email comme spam',
      'Transférer à tous vos contacts'
    ],
    correctAnswer: 2,
    explanation: 'Ne cliquez jamais sur les liens d\'emails suspects. Signalez-les comme spam et supprimez-les.'
  },
  {
    question: 'Qu\'est-ce qu\'un VPN ?',
    options: [
      'Un antivirus',
      'Un réseau privé virtuel qui chiffre votre connexion internet',
      'Un type de virus',
      'Un navigateur web'
    ],
    correctAnswer: 1,
    explanation: 'Un VPN (Virtual Private Network) crée une connexion sécurisée et chiffrée entre votre appareil et internet, protégeant votre vie privée.'
  }
]);

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);

const startQuiz = () => {
  quizStarted.value = true;
  quizFinished.value = false;
  currentQuestionIndex.value = 0;
  score.value = 0;
  showFeedback.value = false;
};

const handleAnswer = (answerIndex) => {
  if (!showFeedback.value) {
    if (answerIndex === currentQuestion.value.correctAnswer) {
      score.value++;
    }
    showFeedback.value = true;
  }
};

const nextQuestion = () => {
  showFeedback.value = false;
  
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    quizFinished.value = true;
  }
};

const getScoreFeedback = () => {
  const percentage = (score.value / questions.value.length) * 100;
  if (percentage === 100) return 'Parfait !';
  if (percentage >= 80) return 'Excellent !';
  if (percentage >= 60) return 'Très bien !';
  if (percentage >= 40) return 'Pas mal !';
  return 'Continuez à apprendre !';
};

const getDetailedFeedback = () => {
  const percentage = (score.value / questions.value.length) * 100;
  if (percentage === 100) return 'Vous maîtrisez parfaitement les bases de la cybersécurité !';
  if (percentage >= 80) return 'Vous avez de très bonnes connaissances en cybersécurité.';
  if (percentage >= 60) return 'Vous avez de bonnes bases, continuez à vous former.';
  if (percentage >= 40) return 'Vous devriez approfondir vos connaissances en cybersécurité.';
  return 'Il est important de vous former davantage sur les bonnes pratiques de sécurité.';
};

const restartQuiz = () => {
  startQuiz();
};
</script>
