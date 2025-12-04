<template>
  <div class="container mx-auto px-4 py-8">
    <SectionTitle 
      title="Simulateur de Phishing" 
      subtitle="Testez votre capacité à identifier les emails frauduleux"
      :level="1"
      align="center"
      class="mb-8"
    />

    <div class="max-w-3xl mx-auto">
      <div v-if="!gameStarted" class="text-center">
        <Card>
          <h3 class="text-xl font-semibold mb-4">Comment jouer ?</h3>
          <p class="text-gray-700 mb-6">
            Vous allez voir plusieurs emails. Pour chacun, déterminez s'il s'agit d'un email légitime ou d'une tentative de phishing.
          </p>
          <Button variant="primary" size="lg" @click="startGame">
            Commencer le test
          </Button>
        </Card>
      </div>

      <div v-else-if="!gameFinished">
        <div class="mb-6">
          <QuizProgress
            :current-question="currentEmailIndex + 1"
            :total-questions="emails.length"
            :score="score"
          />
        </div>

        <EmailPreview
          v-if="currentEmail"
          :subject="currentEmail.subject"
          :sender="currentEmail.sender"
          :sender-email="currentEmail.senderEmail"
          :content="currentEmail.content"
          :date="currentEmail.date"
          :has-attachment="currentEmail.hasAttachment"
          class="mb-6"
        />

        <PhishingOptions @answer="handleAnswer" />
      </div>

      <div v-else class="text-center">
        <Card>
          <template #header>
            <h3 class="text-2xl font-bold">Résultats</h3>
          </template>
          <div class="py-6">
            <div class="text-5xl font-bold text-blue-600 mb-2">
              {{ score }} / {{ emails.length }}
            </div>
            <p class="text-xl text-gray-700 mb-4">{{ getFeedback() }}</p>
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <p class="text-sm text-gray-700">
                {{ getDetailedFeedback() }}
              </p>
            </div>
            <Button variant="primary" size="lg" @click="restartGame">
              Recommencer
            </Button>
          </div>
        </Card>
      </div>
    </div>

    <ResultModal
      :show="showModal"
      :is-correct="isCorrect"
      :title="modalTitle"
      :message="modalMessage"
      :explanation="modalExplanation"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SectionTitle from '../components/ui/SectionTitle.vue';
import Card from '../components/ui/Card.vue';
import Button from '../components/ui/Button.vue';
import EmailPreview from '../components/phishing/EmailPreview.vue';
import PhishingOptions from '../components/phishing/PhishingOptions.vue';
import ResultModal from '../components/phishing/ResultModal.vue';
import QuizProgress from '../components/quiz/QuizProgress.vue';

const gameStarted = ref(false);
const gameFinished = ref(false);
const currentEmailIndex = ref(0);
const score = ref(0);
const showModal = ref(false);
const isCorrect = ref(false);
const modalTitle = ref('');
const modalMessage = ref('');
const modalExplanation = ref('');

const emails = ref([
  {
    subject: 'Vérification de votre compte bancaire',
    sender: 'Votre Banque',
    senderEmail: 'securite@banque-fr.com',
    content: 'Cher client,\n\nNous avons détecté une activité suspecte sur votre compte. Veuillez cliquer sur le lien ci-dessous pour vérifier votre identité immédiatement.\n\nSi vous ne répondez pas dans les 24 heures, votre compte sera suspendu.',
    date: new Date().toLocaleDateString('fr-FR'),
    hasAttachment: false,
    isPhishing: true,
    explanation: 'Les banques ne demandent jamais de vérifier vos informations par email. Méfiez-vous des menaces d\'urgence.'
  },
  {
    subject: 'Confirmation de commande #12345',
    sender: 'Amazon',
    senderEmail: 'commande@amazon.fr',
    content: 'Bonjour,\n\nVotre commande a bien été enregistrée et sera expédiée sous 2 jours ouvrés.\n\nNuméro de suivi : FR123456789\nDate de livraison estimée : 10/12/2025',
    date: new Date().toLocaleDateString('fr-FR'),
    hasAttachment: true,
    isPhishing: false,
    explanation: 'Email légitime avec des informations précises et cohérentes.'
  }
]);

const currentEmail = computed(() => emails.value[currentEmailIndex.value]);

const startGame = () => {
  gameStarted.value = true;
  gameFinished.value = false;
  currentEmailIndex.value = 0;
  score.value = 0;
};

const handleAnswer = (isLegitimate) => {
  const email = currentEmail.value;
  const userAnswerCorrect = (isLegitimate && !email.isPhishing) || (!isLegitimate && email.isPhishing);
  
  isCorrect.value = userAnswerCorrect;
  
  if (userAnswerCorrect) {
    score.value++;
    modalTitle.value = 'Bravo !';
    modalMessage.value = 'Vous avez correctement identifié cet email.';
  } else {
    modalTitle.value = 'Dommage !';
    modalMessage.value = 'Vous vous êtes trompé sur cet email.';
  }
  
  modalExplanation.value = email.explanation;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  
  if (currentEmailIndex.value < emails.value.length - 1) {
    currentEmailIndex.value++;
  } else {
    gameFinished.value = true;
  }
};

const getFeedback = () => {
  const percentage = (score.value / emails.value.length) * 100;
  if (percentage === 100) return 'Parfait !';
  if (percentage >= 75) return 'Très bien !';
  if (percentage >= 50) return 'Pas mal !';
  return 'Continuez à vous entraîner !';
};

const getDetailedFeedback = () => {
  const percentage = (score.value / emails.value.length) * 100;
  if (percentage === 100) return 'Vous êtes un expert en détection de phishing !';
  if (percentage >= 75) return 'Vous avez de bonnes bases, continuez ainsi !';
  if (percentage >= 50) return 'Soyez plus vigilant avec les détails des emails.';
  return 'Prenez le temps d\'analyser l\'adresse de l\'expéditeur et le contenu des messages.';
};

const restartGame = () => {
  startGame();
};
</script>
