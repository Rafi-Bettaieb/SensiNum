<script setup>
import { ArrowLeft, ShoppingCart, AlertTriangle, Shield, CheckCircle, XCircle, CreditCard, AlertCircle } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const selectedAction = ref(null);
const showResult = ref(false);

// Form fields
const formData = ref({
  cardHolder: '',
  cardNumber: '',
  expiryMonth: '',
  expiryYear: '',
  cvv: '',
  consent: false
});

const isFormValid = ref(false);
const showWarning = ref(false);

// Validate form
const validateForm = () => {
  isFormValid.value = 
    formData.value.cardHolder.length > 0 &&
    formData.value.cardNumber.length === 16 &&
    formData.value.expiryMonth !== '' &&
    formData.value.expiryYear !== '' &&
    formData.value.cvv.length === 3 &&
    formData.value.consent;
};

// Handle payment submission
const handlePaymentSubmit = () => {
  if (isFormValid.value) {
    showWarning.value = true;
    // Reset form after showing warning
    setTimeout(() => {
      formData.value = {
        cardHolder: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
        consent: false
      };
      isFormValid.value = false;
    }, 3000);
  }
};

// Format card number (add spaces every 4 digits)
const formatCardNumber = (e) => {
  let value = e.target.value.replace(/\s/g, '');
  value = value.replace(/\D/g, '').slice(0, 16);
  formData.value.cardNumber = value;
  validateForm();
};

// Format CVV (only digits, max 3)
const formatCVV = (e) => {
  formData.value.cvv = e.target.value.replace(/\D/g, '').slice(0, 3);
  validateForm();
};

const actions = [
  {
    id: 'A',
    text: 'Entrer vos informations bancaires',
    isCorrect: false,
    explanation: '❌ Danger ! Ce site suspect demande vos données bancaires. Ne communiquez jamais vos informations sur un site non vérifié.'
  },
  {
    id: 'B',
    text: 'Vérifier l\'URL et quitter le site',
    isCorrect: true,
    explanation: '✅ Excellent réflexe ! Vérifier l\'URL et les signes de sécurité avant tout paiement est essentiel.'
  },
  {
    id: 'C',
    text: 'Continuer sans vérifier',
    isCorrect: false,
    explanation: '❌ Risqué ! Ne jamais faire confiance à un site sans vérifier son authenticité (URL, HTTPS, avis).'
  }
];

const selectAction = (actionId) => {
  if (!showResult.value) {
    selectedAction.value = actionId;
  }
};

const submitAction = () => {
  if (selectedAction.value) {
    showResult.value = true;
    const action = actions.find(a => a.id === selectedAction.value);
    if (action.isCorrect) {
      localStorage.setItem('quiz_level_4_completed', 'true');
    }
  }
};

const goBack = () => {
  router.push('/quiz');
};

const isCorrect = () => {
  const action = actions.find(a => a.id === selectedAction.value);
  return action?.isCorrect;
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      
      <!-- Header with back button -->
      <div class="mb-8">
        <button @click="goBack" class="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors mb-6">
          <ArrowLeft :size="20" />
          Retour au parcours
        </button>
        
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <ShoppingCart :size="40" class="text-green-500" />
            Paiement en Ligne Suspect
          </h1>
          <p class="text-xl text-gray-300">
            Analysez cette situation d'achat en ligne
          </p>
        </div>
      </div>

      <!-- Educational Content -->
      <div class="space-y-8">
        
        <!-- Scenario Context -->
        <div class="bg-gray-800 rounded-2xl border border-gray-700 p-8">
          <h2 class="text-2xl font-bold mb-6 text-center text-white">📱 Situation</h2>
          
          <div class="space-y-4 text-gray-300 max-w-3xl mx-auto">
            <p class="text-lg">
              Vous vendez un article à <strong class="text-white">250€</strong> sur une plateforme de vente (Vinted, Leboncoin...).
            </p>
            
            <p class="text-lg">
              Un acheteur vous contacte et vous dit qu'il a effectué le paiement. 
              Il vous envoie un <strong class="text-yellow-400">lien</strong> pour "valider la réception du paiement".
            </p>
            
            <div class="bg-white rounded-xl p-6 my-6 shadow-2xl border-4 border-red-500">
              <!-- Fake Payment Form -->
              <div class="space-y-4">
                <!-- Suspicious URL Bar -->
                <div class="bg-gray-200 rounded-lg p-2 flex items-center gap-2 mb-4">
                  <AlertCircle :size="16" class="text-red-600" />
                  <span class="text-xs text-gray-700 font-mono">https://super-deal-ventee.com/paiement</span>
                </div>

                <!-- Form Header -->
                <div class="text-center mb-6">
                  <div class="flex items-center justify-center gap-2 mb-2">
                    <CreditCard :size="32" class="text-blue-600" />
                    <h3 class="text-2xl font-bold text-gray-800">Carte bancaire</h3>
                  </div>
                  <div class="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23FF5F00' x='12' y='0' width='16' height='25'/%3E%3Crect fill='%23EB001B' x='0' y='0' width='16' height='25' opacity='0.7'/%3E%3Crect fill='%23F79E1B' x='24' y='0' width='16' height='25' opacity='0.7'/%3E%3C/svg%3E" alt="Mastercard" class="h-6" />
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='25' viewBox='0 0 50 25'%3E%3Crect fill='%231A1F71' width='50' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold' font-size='14'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" class="h-6" />
                    <span class="text-gray-500">American Express, MasterCard...</span>
                  </div>
                </div>

                <!-- Card Owner -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Je choisis ma carte
                  </label>
                  <select class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-white">
                    <option>Carte Bancaire</option>
                  </select>
                </div>

                <!-- Card Holder -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Titulaire de la carte*
                  </label>
                  <input 
                    type="text" 
                    v-model="formData.cardHolder"
                    @input="validateForm"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-white focus:border-blue-500 focus:outline-none" 
                    placeholder="NOM PRENOM"
                  />
                </div>

                <!-- Card Number -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Numéro de la carte*
                  </label>
                  <input 
                    type="text" 
                    :value="formData.cardNumber.match(/.{1,4}/g)?.join(' ') || formData.cardNumber"
                    @input="formatCardNumber"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-white focus:border-blue-500 focus:outline-none font-mono" 
                    placeholder="1234 5678 9012 3456"
                    maxlength="19"
                  />
                </div>

                <!-- Expiry & CVV -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                      Date d'expiration (mm/aaaa)*
                    </label>
                    <div class="flex gap-2">
                      <select 
                        v-model="formData.expiryMonth"
                        @change="validateForm"
                        class="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">mois</option>
                        <option v-for="m in 12" :key="m" :value="String(m).padStart(2, '0')">{{ String(m).padStart(2, '0') }}</option>
                      </select>
                      <select 
                        v-model="formData.expiryYear"
                        @change="validateForm"
                        class="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">année</option>
                        <option v-for="y in 10" :key="y" :value="2025 + y">{{ 2025 + y }}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                      Code de vérification de la carte*
                      <button class="text-blue-600 hover:text-blue-800">
                        <AlertCircle :size="16" />
                      </button>
                    </label>
                    <input 
                      type="text" 
                      v-model="formData.cvv"
                      @input="formatCVV"
                      class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-white focus:border-blue-500 focus:outline-none font-mono" 
                      placeholder="123"
                      maxlength="3"
                    />
                  </div>
                </div>

                <!-- Warning Text -->
                <div class="text-xs text-gray-600 leading-relaxed">
                  <label class="flex items-start gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="formData.consent"
                      @change="validateForm"
                      class="mt-1 cursor-pointer" 
                    />
                    <span>
                      <strong>J'atteste et j'autorise</strong> expressément le prélèvement de mes coordonnées bancaires 
                      Je garantis que les temps pour tous types de cartes bancaires : American Express, MasterCard...
                    </span>
                  </label>
                </div>

                <!-- Submit Button -->
                <button 
                  @click="handlePaymentSubmit"
                  :disabled="!isFormValid"
                  :class="[
                    'w-full font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2',
                    isFormValid 
                      ? 'bg-pink-500 hover:bg-pink-600 text-white cursor-pointer' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  ]"
                >
                  VALIDER MON PAIEMENT ET MA COMMANDE
                </button>

                <!-- Warning Message -->
                <div 
                  v-if="showWarning"
                  class="mt-4 p-6 bg-red-600 border-4 border-red-800 rounded-xl animate-pulse"
                >
                  <div class="flex items-center gap-3 justify-center">
                    <XCircle :size="40" class="text-white" />
                    <p class="text-2xl font-black text-white text-center">
                      ❌ NON NON NE FAIS JAMAIS ÇA ! ❌
                    </p>
                    <XCircle :size="40" class="text-white" />
                  </div>
                  <p class="text-white text-center mt-3 font-bold">
                    🚨 Tu viens de donner tes données bancaires à des escrocs ! 🚨
                  </p>
                </div>
              </div>
            </div>
            <p class="text-center text-sm text-red-400 italic font-semibold">
              ⚠️ Page suspecte demandant vos coordonnées bancaires
            </p>
          </div>
        </div>
        
        <!-- Question Section -->
        <div class="bg-gray-800 rounded-2xl border border-gray-700 p-8 mt-8">
          <h2 class="text-2xl font-bold mb-6 text-center text-red-400">⚠️ Que devez-vous faire ?</h2>
          
          <div class="space-y-4">
            <div
              v-for="action in actions"
              :key="action.id"
              @click="selectAction(action.id)"
              :class="[
                'p-6 rounded-xl border-2 cursor-pointer transition-all transform hover:scale-105',
                selectedAction === action.id && !showResult
                  ? 'bg-blue-900/50 border-blue-500'
                  : selectedAction === action.id && showResult && action.isCorrect
                  ? 'bg-green-900/50 border-green-500'
                  : selectedAction === action.id && showResult && !action.isCorrect
                  ? 'bg-red-900/50 border-red-500'
                  : 'bg-gray-700/30 border-gray-600 hover:border-gray-500'
              ]"
            >
              <div class="flex items-center gap-4">
                <div
                  :class="[
                    'w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0',
                    selectedAction === action.id && showResult && action.isCorrect
                      ? 'bg-green-500 text-white'
                      : selectedAction === action.id && showResult && !action.isCorrect
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-600 text-white'
                  ]"
                >
                  {{ action.id }}
                </div>
                <p class="text-lg font-medium text-white">{{ action.text }}</p>
              </div>

              <div
                v-if="selectedAction === action.id && showResult"
                class="mt-4 p-4 rounded-lg bg-gray-900/50"
              >
                <p class="text-gray-200">{{ action.explanation }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8 text-center">
            <button
              v-if="!showResult"
              @click="submitAction"
              :disabled="!selectedAction"
              :class="[
                'px-8 py-3 rounded-xl font-bold text-lg transition-all transform',
                selectedAction
                  ? 'bg-green-500 hover:bg-green-600 text-white cursor-pointer hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              ]"
            >
              Valider ma réponse
            </button>

            <button
              v-else-if="isCorrect()"
              @click="goBack"
              class="px-8 py-3 rounded-xl font-bold text-lg bg-green-500 hover:bg-green-600 text-white transition-all transform hover:scale-105"
            >
              ✓ Continuer vers le parcours
            </button>

            <button
              v-else
              @click="showResult = false; selectedAction = null"
              class="px-8 py-3 rounded-xl font-bold text-lg bg-yellow-500 hover:bg-yellow-600 text-white transition-all transform hover:scale-105"
            >
              ↻ Réessayer
            </button>
          </div>
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
