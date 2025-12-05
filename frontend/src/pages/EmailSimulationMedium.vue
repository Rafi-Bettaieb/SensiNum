<script setup>
import { ArrowLeft, Mail, AlertTriangle, ShieldCheck, CheckCircle, XCircle } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const selectedEmail = ref(null);
const showResult = ref(false);

const emails = [
  {
    id: 1,
    isPhishing: true,
    from: 'noreply@microsoft-verify.com',
    to: 'vous@email.com',
    subject: 'Vérification de sécurité Microsoft 365',
    time: 'Il y a 3 heures',
    body: `Bonjour,

Dans le cadre de notre mise à jour de sécurité annuelle, nous vous demandons de vérifier vos informations de compte Microsoft 365.

Cette vérification est obligatoire pour tous les utilisateurs avant le 15 décembre 2025.

Cliquez ici pour vérifier votre compte: https://microsoft-verify.com/secure-login

Si vous ne complétez pas cette vérification, votre accès à OneDrive et Outlook pourrait être limité.

Cordialement,
L'équipe sécurité Microsoft`,
    redFlags: [
      'Domaine suspect: microsoft-verify.com au lieu de @microsoft.com',
      'Lien externe vers un site non-officiel',
      'Menace de limitation de compte',
      'Demande urgente de vérification',
      'Pas de personnalisation (pas de nom)'
    ],
    goodSigns: []
  },
  {
    id: 2,
    isPhishing: false,
    from: 'security@google.com',
    to: 'vous@email.com',
    subject: 'Nouvelle connexion détectée sur votre compte',
    time: 'Il y a 1 jour',
    body: `Bonjour,

Une nouvelle connexion à votre compte Google a été détectée:

Appareil: iPhone 14
Localisation: Paris, France  
Date: 4 décembre 2025, 14:32

Si c'était vous, vous pouvez ignorer ce message. Si vous ne reconnaissez pas cette activité, sécurisez immédiatement votre compte en changeant votre mot de passe.

Accédez à votre compte via: https://myaccount.google.com

L'équipe Google Account`,
    redFlags: [],
    goodSigns: [
      'Adresse email officielle: @google.com',
      'Informations détaillées sur la connexion',
      'Pas de demande urgente ou menaçante',
      'Lien vers le vrai site Google',
      'Style professionnel'
    ]
  },
  {
    id: 3,
    isPhishing: true,
    from: 'colis@laposte-suivi.fr',
    to: 'vous@email.com',
    subject: 'Votre colis est en attente de livraison',
    time: 'Il y a 5 heures',
    body: `Bonjour,

Nous n'avons pas pu livrer votre colis en raison d'une adresse incomplète.

Numéro de suivi: LP-FR-85471239
Statut: En attente

Pour finaliser la livraison, veuillez compléter votre adresse et payer les frais de port de 2,99€:

👉 Cliquez ici: https://laposte-suivi.fr/colis/update

Attention: Vous avez 48h pour agir, sinon le colis sera retourné à l'expéditeur.

La Poste`,
    redFlags: [
      'Domaine frauduleux: laposte-suivi.fr au lieu de @laposte.fr',
      'Demande de paiement pour "frais de port"',
      'Urgence artificielle (48h)',
      'Pas de colis commandé récemment',
      'Lien suspect pour "mise à jour"'
    ],
    goodSigns: []
  }
];

const selectEmail = (email) => {
  selectedEmail.value = email;
  showResult.value = false;
};

const markAsPhishing = () => {
  if (selectedEmail.value) {
    showResult.value = true;
  }
};

const markAsSafe = () => {
  if (selectedEmail.value) {
    showResult.value = true;
  }
};

const isCorrectAnswer = (answer) => {
  if (!selectedEmail.value) return false;
  if (answer === 'phishing') {
    return selectedEmail.value.isPhishing;
  } else {
    return !selectedEmail.value.isPhishing;
  }
};

const completeLevel = () => {
  localStorage.setItem('quiz_medium_level_1_completed', 'true');
  router.push('/quiz-medium');
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
    <div class="max-w-7xl mx-auto">
      
      <!-- Back Button -->
      <div class="mb-6">
        <router-link to="/quiz-medium" class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft :size="20" />
          Retour au parcours
        </router-link>
      </div>

      <!-- Header -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center gap-3 mb-4">
          <Mail :size="48" class="text-[#00C16A]" />
          <h1 class="text-4xl font-bold">Détection de Phishing - Niveau Moyen</h1>
        </div>
        <p class="text-gray-300 text-lg">Identifiez les emails frauduleux plus subtils</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        
        <!-- Email List -->
        <div class="lg:col-span-1 bg-gray-800 rounded-xl p-4 border border-gray-700 h-fit">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <Mail :size="24" class="text-[#00C16A]" />
            Boîte de réception
          </h2>
          <div class="space-y-2">
            <button
              v-for="email in emails"
              :key="email.id"
              @click="selectEmail(email)"
              :class="[
                'w-full text-left p-4 rounded-lg transition-all duration-200 border-2',
                selectedEmail?.id === email.id 
                  ? 'bg-[#00C16A]/10 border-[#00C16A]' 
                  : 'bg-gray-700/50 border-transparent hover:bg-gray-700 hover:border-gray-600'
              ]"
            >
              <div class="flex items-start gap-3">
                <Mail :size="20" class="mt-1 flex-shrink-0" :class="selectedEmail?.id === email.id ? 'text-[#00C16A]' : 'text-gray-400'" />
                <div class="flex-1 min-w-0">
                  <p class="font-semibold truncate">{{ email.subject }}</p>
                  <p class="text-sm text-gray-400 truncate">{{ email.from }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ email.time }}</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Email Content -->
        <div class="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div v-if="!selectedEmail" class="flex flex-col items-center justify-center h-96 text-gray-400">
            <Mail :size="64" class="mb-4 opacity-50" />
            <p class="text-xl">Sélectionnez un email pour l'analyser</p>
          </div>

          <div v-else>
            <!-- Email Header -->
            <div class="border-b border-gray-700 pb-4 mb-4">
              <h2 class="text-2xl font-bold mb-3">{{ selectedEmail.subject }}</h2>
              <div class="space-y-2 text-sm">
                <div class="flex gap-2">
                  <span class="text-gray-400 w-16">De:</span>
                  <span class="font-mono">{{ selectedEmail.from }}</span>
                </div>
                <div class="flex gap-2">
                  <span class="text-gray-400 w-16">À:</span>
                  <span class="font-mono">{{ selectedEmail.to }}</span>
                </div>
                <div class="flex gap-2">
                  <span class="text-gray-400 w-16">Date:</span>
                  <span>{{ selectedEmail.time }}</span>
                </div>
              </div>
            </div>

            <!-- Email Body -->
            <div class="mb-6 whitespace-pre-line text-gray-200 bg-gray-900/50 p-4 rounded-lg">
              {{ selectedEmail.body }}
            </div>

            <!-- Action Buttons -->
            <div v-if="!showResult" class="flex gap-4">
              <button
                @click="markAsPhishing"
                class="flex-1 py-3 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <AlertTriangle :size="20" />
                C'est du Phishing !
              </button>
              <button
                @click="markAsSafe"
                class="flex-1 py-3 px-6 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <ShieldCheck :size="20" />
                Email Légitime
              </button>
            </div>

            <!-- Result Display -->
            <div v-else class="space-y-4">
              <!-- Correct/Incorrect Banner -->
              <div 
                :class="[
                  'p-4 rounded-lg border-2',
                  isCorrectAnswer('phishing') || isCorrectAnswer('safe')
                    ? 'bg-green-900/30 border-green-600'
                    : 'bg-red-900/30 border-red-600'
                ]"
              >
                <div class="flex items-center gap-3 mb-2">
                  <component 
                    :is="isCorrectAnswer('phishing') || isCorrectAnswer('safe') ? CheckCircle : XCircle"
                    :size="24"
                    :class="isCorrectAnswer('phishing') || isCorrectAnswer('safe') ? 'text-green-400' : 'text-red-400'"
                  />
                  <h3 class="text-xl font-bold">
                    {{ isCorrectAnswer('phishing') || isCorrectAnswer('safe') ? 'Bonne réponse !' : 'Mauvaise réponse' }}
                  </h3>
                </div>
                <p class="text-lg">
                  Cet email est
                  <span class="font-bold">
                    {{ selectedEmail.isPhishing ? 'frauduleux (Phishing)' : 'légitime' }}
                  </span>
                </p>
              </div>

              <!-- Red Flags (if phishing) -->
              <div v-if="selectedEmail.isPhishing && selectedEmail.redFlags.length" class="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <h4 class="font-bold text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle :size="20" />
                  Signaux d'alerte
                </h4>
                <ul class="space-y-2">
                  <li v-for="(flag, index) in selectedEmail.redFlags" :key="index" class="flex gap-2">
                    <span class="text-red-400">•</span>
                    <span>{{ flag }}</span>
                  </li>
                </ul>
              </div>

              <!-- Good Signs (if legitimate) -->
              <div v-if="!selectedEmail.isPhishing && selectedEmail.goodSigns.length" class="bg-green-900/20 border border-green-800 rounded-lg p-4">
                <h4 class="font-bold text-green-400 mb-3 flex items-center gap-2">
                  <ShieldCheck :size="20" />
                  Signes de légitimité
                </h4>
                <ul class="space-y-2">
                  <li v-for="(sign, index) in selectedEmail.goodSigns" :key="index" class="flex gap-2">
                    <span class="text-green-400">✓</span>
                    <span>{{ sign }}</span>
                  </li>
                </ul>
              </div>

              <!-- Continue Button -->
              <button
                @click="completeLevel"
                class="w-full py-3 px-6 bg-[#00C16A] hover:bg-[#00d175] rounded-lg font-semibold transition-colors duration-200"
              >
                Continuer vers le niveau suivant
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
