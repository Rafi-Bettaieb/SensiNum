<script setup>
import { ArrowLeft, ShoppingCart, AlertTriangle, Shield, CheckCircle, XCircle, Lock, Unlock } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();
const inspectedElements = ref([]);
const showResult = ref(false);
const userDecision = ref(null); // 'safe' or 'scam'

const suspiciousElements = [
  { id: 'url', name: 'URL', issue: 'amaz0n-deals.com (faux domaine avec un "0" au lieu de "o")', severity: 'critical' },
  { id: 'price', name: 'Prix', issue: 'iPhone 15 Pro à 99€ - Prix irréaliste', severity: 'critical' },
  { id: 'https', name: 'Sécurité', issue: 'Pas de HTTPS (pas de cadenas)', severity: 'critical' },
  { id: 'reviews', name: 'Avis clients', issue: 'Avis génériques copiés-collés', severity: 'medium' },
  { id: 'payment', name: 'Paiement', issue: 'Uniquement virement bancaire et crypto', severity: 'critical' },
  { id: 'contact', name: 'Contact', issue: 'Pas de mentions légales ni de service client', severity: 'high' }
];

const inspectElement = (elementId) => {
  if (!inspectedElements.value.includes(elementId)) {
    inspectedElements.value.push(elementId);
  }
};

const criticalIssuesFound = computed(() => {
  return inspectedElements.value.filter(id => {
    const element = suspiciousElements.find(e => e.id === id);
    return element && element.severity === 'critical';
  }).length;
});

const submitDecision = (decision) => {
  userDecision.value = decision;
  showResult.value = true;
};

const completeLevel = () => {
  localStorage.setItem('quiz_medium_level_4_completed', 'true');
  router.push('/quiz-medium');
};

const resetSimulation = () => {
  inspectedElements.value = [];
  showResult.value = false;
  userDecision.value = null;
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
          <ShoppingCart :size="48" class="text-[#00C16A]" />
          <h1 class="text-4xl font-bold">Détection de Faux Site E-commerce</h1>
        </div>
        <p class="text-gray-300 text-lg">Inspectez ce site avant d'acheter - est-ce une arnaque ?</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        
        <!-- Fake Website Simulation -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl overflow-hidden shadow-2xl">
            
            <!-- Browser Bar -->
            <div class="bg-gray-200 px-4 py-3 flex items-center gap-3 border-b border-gray-300">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <button 
                @click="inspectElement('url')"
                class="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer border-2"
                :class="inspectedElements.includes('url') ? 'border-red-500' : 'border-gray-300'"
              >
                <Unlock :size="16" class="text-red-500" />
                <span class="font-mono">http://amaz0n-deals.com/iphone</span>
              </button>
            </div>

            <!-- Fake Website Content -->
            <div class="bg-gradient-to-b from-blue-50 to-white p-6">
              
              <!-- Logo -->
              <div class="text-center mb-6">
                <h2 class="text-4xl font-bold text-orange-500 mb-1">AMAZ0N</h2>
                <p class="text-sm text-gray-600">Meilleurs prix garantis !!!</p>
              </div>

              <!-- Product Card -->
              <div class="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto border border-gray-200">
                <div class="grid md:grid-cols-2 gap-6">
                  
                  <!-- Product Image -->
                  <div class="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <div class="text-center">
                      <div class="text-6xl mb-2">📱</div>
                      <p class="text-sm text-gray-600">iPhone 15 Pro Max</p>
                    </div>
                  </div>

                  <!-- Product Details -->
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">iPhone 15 Pro Max 256GB</h3>
                    
                    <!-- Price Section -->
                    <button
                      @click="inspectElement('price')"
                      class="mb-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-2 w-full text-left"
                      :class="inspectedElements.includes('price') ? 'border-red-500 bg-red-50' : 'border-transparent'"
                    >
                      <div class="flex items-center gap-2">
                        <span class="text-sm text-gray-500 line-through">1299€</span>
                        <span class="text-3xl font-bold text-red-600">99€</span>
                        <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">-92%</span>
                      </div>
                      <p class="text-xs text-red-600 mt-1">🔥 Offre limitée - Plus que 2 en stock !</p>
                    </button>

                    <!-- Reviews Section -->
                    <button
                      @click="inspectElement('reviews')"
                      class="mb-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-2 w-full text-left"
                      :class="inspectedElements.includes('reviews') ? 'border-yellow-500 bg-yellow-50' : 'border-transparent'"
                    >
                      <div class="flex items-center gap-1 mb-2">
                        <span class="text-yellow-400">★★★★★</span>
                        <span class="text-sm text-gray-600">(5847 avis)</span>
                      </div>
                      <p class="text-xs text-gray-600 italic">"Produit excellent très bien reçu rapide"</p>
                      <p class="text-xs text-gray-600 italic">"Super qualité livraison rapide merci"</p>
                    </button>

                    <!-- Payment Methods -->
                    <button
                      @click="inspectElement('payment')"
                      class="mb-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-2 w-full text-left"
                      :class="inspectedElements.includes('payment') ? 'border-red-500 bg-red-50' : 'border-transparent'"
                    >
                      <p class="text-xs font-semibold text-gray-700 mb-2">Paiement accepté :</p>
                      <div class="flex gap-2 flex-wrap">
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Virement bancaire</span>
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Bitcoin</span>
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Western Union</span>
                      </div>
                    </button>

                    <!-- Security Badge -->
                    <button
                      @click="inspectElement('https')"
                      class="mb-4 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-2 w-full"
                      :class="inspectedElements.includes('https') ? 'border-red-500 bg-red-50' : 'border-transparent'"
                    >
                      <div class="flex items-center gap-2 text-sm text-gray-600">
                        <Unlock :size="16" class="text-red-500" />
                        <span>Connexion non sécurisée</span>
                      </div>
                    </button>

                    <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors">
                      ACHETER MAINTENANT
                    </button>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <button
                @click="inspectElement('contact')"
                class="mt-6 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border-2 max-w-2xl mx-auto block w-full"
                :class="inspectedElements.includes('contact') ? 'border-red-500 bg-red-50' : 'border-transparent'"
              >
                <p class="text-xs text-gray-500 text-center">Contact : support@amaz0n.ru | Pas de mentions légales</p>
              </button>
            </div>
          </div>
        </div>

        <!-- Analysis Panel -->
        <div class="space-y-6">
          
          <!-- Instructions -->
          <div v-if="!showResult" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 class="text-xl font-bold mb-4 text-[#00C16A]">🔍 Mission</h3>
            <p class="text-gray-300 mb-4">
              Inspectez ce site de vente en ligne. Cliquez sur les différents éléments pour les analyser.
            </p>
            <p class="text-gray-400 text-sm mb-4">
              Éléments inspectés : {{ inspectedElements.length }}/{{ suspiciousElements.length }}
            </p>
            <div class="space-y-2 mb-4">
              <div v-for="element in suspiciousElements" :key="element.id" class="flex items-center gap-2">
                <CheckCircle v-if="inspectedElements.includes(element.id)" :size="16" class="text-green-400" />
                <div v-else class="w-4 h-4 rounded-full border-2 border-gray-600"></div>
                <span class="text-sm" :class="inspectedElements.includes(element.id) ? 'text-white' : 'text-gray-500'">
                  {{ element.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Discovered Issues -->
          <div v-if="inspectedElements.length > 0 && !showResult" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 class="text-lg font-bold mb-3 text-yellow-400 flex items-center gap-2">
              <AlertTriangle :size="20" />
              Problèmes détectés
            </h3>
            <div class="space-y-3">
              <div 
                v-for="elementId in inspectedElements" 
                :key="elementId"
                class="p-3 rounded-lg border-l-4"
                :class="{
                  'bg-red-900/30 border-red-500': suspiciousElements.find(e => e.id === elementId)?.severity === 'critical',
                  'bg-orange-900/30 border-orange-500': suspiciousElements.find(e => e.id === elementId)?.severity === 'high',
                  'bg-yellow-900/30 border-yellow-500': suspiciousElements.find(e => e.id === elementId)?.severity === 'medium'
                }"
              >
                <p class="font-semibold text-sm mb-1">{{ suspiciousElements.find(e => e.id === elementId)?.name }}</p>
                <p class="text-xs text-gray-300">{{ suspiciousElements.find(e => e.id === elementId)?.issue }}</p>
              </div>
            </div>
          </div>

          <!-- Decision Buttons -->
          <div v-if="!showResult" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 class="text-lg font-bold mb-4">Votre verdict :</h3>
            <div class="space-y-3">
              <button
                @click="submitDecision('safe')"
                class="w-full py-3 px-6 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Shield :size="20" />
                Site légitime - Je peux acheter
              </button>
              <button
                @click="submitDecision('scam')"
                class="w-full py-3 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <AlertTriangle :size="20" />
                C'est une ARNAQUE !
              </button>
            </div>
          </div>

          <!-- Result - Correct Answer (Scam) -->
          <div v-if="showResult && userDecision === 'scam'" class="space-y-6">
            <div class="bg-green-900/30 border-4 border-green-500 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <CheckCircle :size="40" class="text-green-400" />
                <h2 class="text-2xl font-bold text-green-100">Excellent !</h2>
              </div>
              <p class="text-lg text-green-200 mb-3">
                Tu as raison, c'est bien une ARNAQUE !
              </p>
              <p class="text-gray-300">
                Tu as identifié {{ inspectedElements.length }} élément(s) suspect(s) sur {{ suspiciousElements.length }}.
                {{ criticalIssuesFound >= 3 ? ' Bravo pour ta vigilance !' : ' Continue d\'inspecter tous les éléments pour mieux détecter les arnaques.' }}
              </p>
            </div>

            <div class="bg-gray-800/50 border border-gray-600 rounded-xl p-6">
              <h3 class="font-bold text-[#00C16A] mb-3">🎯 Tous les signaux d'alerte :</h3>
              <ul class="space-y-2 text-gray-200 text-sm">
                <li v-for="element in suspiciousElements" :key="element.id" class="flex items-start gap-2">
                  <span :class="element.severity === 'critical' ? 'text-red-400' : 'text-yellow-400'">⚠️</span>
                  <span><strong>{{ element.name }} :</strong> {{ element.issue }}</span>
                </li>
              </ul>
            </div>

            <button
              @click="completeLevel"
              class="w-full py-3 px-6 bg-[#00C16A] hover:bg-[#00d175] rounded-lg font-semibold transition-colors"
            >
              Continuer vers l'examen final
            </button>
          </div>

          <!-- Result - Wrong Answer (Safe) -->
          <div v-if="showResult && userDecision === 'safe'" class="space-y-6">
            <div class="bg-red-900 border-4 border-red-500 rounded-xl p-6 animate-pulse">
              <div class="flex items-center gap-3 mb-4">
                <XCircle :size="40" class="text-red-300" />
                <h2 class="text-2xl font-bold text-red-100">DANGER !</h2>
              </div>
              <p class="text-lg text-red-200 mb-3">
                ⚠️ TU ALLAIS TE FAIRE ARNAQUER !
              </p>
              <p class="text-gray-200">
                Ce site est une ARNAQUE. Si tu avais acheté, tu aurais perdu ton argent sans recevoir le produit.
              </p>
            </div>

            <div class="bg-yellow-900/30 border border-yellow-600 rounded-xl p-6">
              <h3 class="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <AlertTriangle :size="24" />
                Signaux manqués
              </h3>
              <p class="text-gray-200 mb-3">
                Voici ce que tu aurais dû repérer :
              </p>
              <ul class="space-y-2 text-gray-200 text-sm">
                <li v-for="element in suspiciousElements" :key="element.id" class="flex items-start gap-2">
                  <XCircle :size="16" :class="element.severity === 'critical' ? 'text-red-400' : 'text-yellow-400'" class="flex-shrink-0 mt-0.5" />
                  <span><strong>{{ element.name }} :</strong> {{ element.issue }}</span>
                </li>
              </ul>
            </div>

            <div class="flex gap-3">
              <button
                @click="resetSimulation"
                class="flex-1 py-3 px-6 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
              >
                Réessayer
              </button>
              <button
                @click="completeLevel"
                class="flex-1 py-3 px-6 bg-[#00C16A] hover:bg-[#00d175] rounded-lg font-semibold transition-colors"
              >
                Continuer quand même
              </button>
            </div>
          </div>

        </div>

      </div>

      <!-- Tips Section -->
      <div class="mt-8 bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <h3 class="font-bold text-lg mb-3 text-[#00C16A]">💡 Comment repérer un faux site e-commerce</h3>
        <div class="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
          <div>
            <h4 class="font-semibold mb-2 text-white">✓ Vérifiez toujours :</h4>
            <ul class="space-y-1">
              <li>• L'URL (domaine officiel)</li>
              <li>• Le cadenas HTTPS</li>
              <li>• Les prix réalistes</li>
              <li>• Les moyens de paiement sécurisés</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2 text-white">✗ Méfiez-vous de :</h4>
            <ul class="space-y-1">
              <li>• Offres trop belles pour être vraies</li>
              <li>• Fautes d'orthographe nombreuses</li>
              <li>• Absence de contact/mentions légales</li>
              <li>• Paiement par virement ou crypto uniquement</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
