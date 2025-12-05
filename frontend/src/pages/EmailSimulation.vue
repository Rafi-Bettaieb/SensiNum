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
    isPhishing: false,
    from: 'notifications@amazon.fr',
    to: 'vous@email.com',
    subject: 'Confirmation de commande #FR-2547891',
    time: 'Il y a 1 heure',
    body: `Bonjour,

Merci pour votre commande sur Amazon.fr

Votre commande #FR-2547891 a été confirmée et sera expédiée sous 2-3 jours ouvrables.

Résumé de la commande:
• Casque Bluetooth Sony - 89,99€
• Livraison standard gratuite

Vous pouvez suivre votre commande dans votre compte Amazon.

Cordialement,
L'équipe Amazon`,
    redFlags: [],
    goodSigns: [
      'Adresse email officielle: @amazon.fr',
      'Numéro de commande spécifique',
      'Pas de demande d\'action urgente',
      'Pas de lien suspect ou demande de paiement'
    ]
  },
  {
    id: 2,
    isPhishing: true,
    from: 'support@paypa1-secure.com',
    to: 'vous@email.com',
    subject: '⚠️ Action urgente requise - Compte suspendu',
    time: 'Il y a 2 heures',
    body: `Cher(e) client(e),

Nous avons détecté une activité suspecte sur votre compte PayPal. Pour des raisons de sécurité, votre compte a été temporairement suspendu.

⚠️ ATTENTION: Vous devez vérifier votre identité dans les 24 heures pour éviter la fermeture définitive de votre compte.

Cliquez sur le lien ci-dessous pour vérifier votre compte:
[Vérifier mon compte maintenant]

Si vous ne vérifiez pas votre compte, tous vos fonds seront bloqués définitivement.

Cordialement,
L'équipe de sécurité PayPal`,
    redFlags: [
      'Adresse email suspecte: "paypa1-secure.com" (chiffre 1 au lieu de la lettre L)',
      'Urgence excessive et pression temporelle (24h)',
      'Menaces de fermeture de compte et blocage de fonds',
      'Demande de cliquer sur un lien pour "vérifier"',
      'Ton alarmiste avec emojis d\'avertissement'
    ],
    goodSigns: []
  },
  {
    id: 3,
    isPhishing: false,
    from: 'noreply@service.netflix.com',
    to: 'vous@email.com',
    subject: 'Votre facture Netflix de décembre',
    time: 'Il y a 5 heures',
    body: `Bonjour,

Votre abonnement Netflix Standard a été renouvelé le 5 décembre 2025.

Montant facturé: 13,49€
Méthode de paiement: •••• 4567
Prochaine facturation: 5 janvier 2026

Vous pouvez consulter vos informations de facturation dans votre compte Netflix.

Bon visionnage!
L'équipe Netflix`,
    redFlags: [],
    goodSigns: [
      'Adresse email officielle: @service.netflix.com',
      'Informations de facturation précises',
      'Pas de demande d\'action immédiate',
      'Méthode de paiement masquée (sécurité)',
      'Ton professionnel et neutre'
    ]
  }
];

const selectEmail = (emailId) => {
  selectedEmail.value = emailId;
  showResult.value = false;
};

const submitAnswer = () => {
  if (selectedEmail.value !== null) {
    showResult.value = true;
    
    // Si la bonne réponse est trouvée (email de phishing), marquer le niveau comme complété
    if (currentEmail().isPhishing) {
      localStorage.setItem('quiz_level_1_completed', 'true');
    }
  }
};

const resetQuiz = () => {
  selectedEmail.value = null;
  showResult.value = false;
};

const goBack = () => {
  router.push('/quiz');
};

const currentEmail = () => emails.find(e => e.id === selectedEmail.value);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      
      <!-- Header with back button -->
      <div class="mb-8">
        <button @click="goBack" class="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors mb-6">
          <ArrowLeft :size="20" />
          Retour au parcours
        </button>
        
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Mail :size="40" class="text-green-500" />
            Simulation Mail - Détection de Phishing
          </h1>
          <p class="text-xl text-gray-300">
            Identifiez l'email frauduleux parmi les 3 proposés
          </p>
        </div>
      </div>

      <!-- Email Selection Grid -->
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div 
          v-for="email in emails" 
          :key="email.id"
          @click="selectEmail(email.id)"
          :class="[
            'bg-gray-800 rounded-xl border-2 p-6 cursor-pointer transition-all transform hover:scale-105',
            selectedEmail === email.id 
              ? 'border-green-500 shadow-lg shadow-green-500/20' 
              : 'border-gray-700 hover:border-gray-600'
          ]"
        >
          <div class="flex items-center justify-between mb-4">
            <Mail :size="24" :class="selectedEmail === email.id ? 'text-green-500' : 'text-gray-400'" />
            <span class="text-xs text-gray-500">{{ email.time }}</span>
          </div>
          
          <div class="space-y-2">
            <div class="text-sm text-gray-400">De:</div>
            <div class="text-white font-medium text-sm truncate">{{ email.from }}</div>
            
            <div class="text-sm text-gray-400 mt-3">Objet:</div>
            <div class="text-white font-semibold text-sm">{{ email.subject }}</div>
          </div>

          <div 
            v-if="selectedEmail === email.id" 
            class="mt-4 bg-green-500/10 border border-green-500 rounded-lg p-3 text-center"
          >
            <span class="text-green-500 font-semibold">Email sélectionné</span>
          </div>
        </div>
      </div>

      <!-- Email Preview -->
      <div v-if="selectedEmail !== null" class="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl mb-8">
        <div class="bg-gray-900/50 border-b border-gray-700 p-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <Mail :size="24" class="text-green-500" />
            Aperçu de l'email sélectionné
          </h3>
          
          <div class="space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="text-sm text-gray-400 mb-1">De:</div>
                <div class="text-white font-medium">{{ currentEmail().from }}</div>
              </div>
              <div class="text-xs text-gray-500">{{ currentEmail().time }}</div>
            </div>
            
            <div>
              <div class="text-sm text-gray-400 mb-1">À:</div>
              <div class="text-white">{{ currentEmail().to }}</div>
            </div>
            
            <div>
              <div class="text-sm text-gray-400 mb-1">Objet:</div>
              <div class="text-white font-semibold">{{ currentEmail().subject }}</div>
            </div>
          </div>
        </div>

        <div class="p-8">
          <div class="text-gray-200 leading-relaxed whitespace-pre-line">
            {{ currentEmail().body }}
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div v-if="selectedEmail !== null && !showResult" class="text-center mb-8">
        <button 
          @click="submitAnswer"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-xl transition-all transform hover:scale-105"
        >
          Cet email est du phishing !
        </button>
      </div>

      <!-- Result Section -->
      <div v-if="showResult" class="space-y-6">
        <!-- Correct/Incorrect Message -->
        <div 
          :class="[
            'rounded-2xl border-2 p-8 text-center',
            currentEmail().isPhishing 
              ? 'bg-green-900/20 border-green-500' 
              : 'bg-red-900/20 border-red-500'
          ]"
        >
          <div v-if="currentEmail().isPhishing" class="space-y-4">
            <CheckCircle :size="64" class="text-green-500 mx-auto" />
            <h3 class="text-3xl font-bold text-green-400">Bravo ! Bonne réponse !</h3>
            <p class="text-xl text-gray-300">Vous avez correctement identifié l'email de phishing.</p>
          </div>
          
          <div v-else class="space-y-4">
            <XCircle :size="64" class="text-red-500 mx-auto" />
            <h3 class="text-3xl font-bold text-red-400">Incorrect</h3>
            <p class="text-xl text-gray-300">Cet email est légitime. Regardons les détails...</p>
          </div>
        </div>

        <!-- Analysis -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Red Flags or Good Signs -->
          <div v-if="currentEmail().redFlags.length > 0" class="bg-red-900/20 border border-red-800 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <AlertTriangle :size="24" class="text-red-500" />
              <h3 class="text-xl font-bold text-red-400">Signaux d'alerte</h3>
            </div>
            <ul class="space-y-3 text-gray-300">
              <li v-for="(flag, index) in currentEmail().redFlags" :key="index" class="flex items-start gap-2">
                <span class="text-red-500 mt-1">•</span>
                <span>{{ flag }}</span>
              </li>
            </ul>
          </div>

          <div v-if="currentEmail().goodSigns.length > 0" class="bg-green-900/20 border border-green-800 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <ShieldCheck :size="24" class="text-green-500" />
              <h3 class="text-xl font-bold text-green-400">Signes de légitimité</h3>
            </div>
            <ul class="space-y-3 text-gray-300">
              <li v-for="(sign, index) in currentEmail().goodSigns" :key="index" class="flex items-start gap-2">
                <span class="text-green-500 mt-1">✓</span>
                <span>{{ sign }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Action Buttons -->
        <div v-if="currentEmail().isPhishing" class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            @click="goBack"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
          >
            ✓ Continuer vers le niveau 2
          </button>
          <button 
            @click="resetQuiz"
            class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all"
          >
            Recommencer
          </button>
        </div>
        <div v-else class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            @click="resetQuiz"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
          >
            Réessayer
          </button>
          <button 
            @click="goBack"
            class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all"
          >
            Retour au parcours
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
