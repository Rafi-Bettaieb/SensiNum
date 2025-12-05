<script setup>
import { ArrowLeft, Phone, Send, AlertTriangle, XCircle, CheckCircle } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const userMessage = ref('');
const messages = ref([
  {
    id: 1,
    sender: 'contact',
    text: 'Coucou mon chéri ! C\'est maman',
    time: '14:32'
  },
  {
    id: 2,
    sender: 'contact',
    text: 'J\'ai un gros problème, ma carte bancaire ne marche plus au supermarché 😰',
    time: '14:32'
  },
  {
    id: 3,
    sender: 'contact',
    text: 'Tu peux me donner ton code de carte bleue ? Je te rembourserai ce soir promis !',
    time: '14:33'
  },
  {
    id: 4,
    sender: 'contact',
    text: 'C\'est urgent, il y a une file d\'attente derrière moi...',
    time: '14:33'
  }
]);

const messageSent = ref(false);
const scamRevealed = ref(false);
const userChoice = ref(null); // 'gave-code', 'refused', 'called'

const sendMessage = () => {
  if (userMessage.value.trim()) {
    // Ajouter le message de l'utilisateur
    messages.value.push({
      id: messages.value.length + 1,
      sender: 'user',
      text: userMessage.value,
      time: '14:34'
    });
    
    // Déterminer si l'utilisateur a donné un code (4 chiffres)
    if (/\b\d{4}\b/.test(userMessage.value)) {
      userChoice.value = 'gave-code';
      messageSent.value = true;
      
      // Petit délai avant de révéler l'arnaque
      setTimeout(() => {
        scamRevealed.value = true;
      }, 1000);
    } else if (/refus|non|jamais|impossible|appel/i.test(userMessage.value)) {
      userChoice.value = 'refused';
      messageSent.value = true;
      
      setTimeout(() => {
        scamRevealed.value = true;
      }, 1000);
    } else {
      // Si le message n'est pas clair, redemander
      setTimeout(() => {
        messages.value.push({
          id: messages.value.length + 1,
          sender: 'contact',
          text: 'Allez s\'il te plaît ! Juste les 4 chiffres de ta carte, c\'est urgent !!',
          time: '14:34'
        });
      }, 500);
    }
    
    userMessage.value = '';
  }
};

const giveCode = () => {
  messages.value.push({
    id: messages.value.length + 1,
    sender: 'user',
    text: '1234',
    time: '14:34'
  });
  
  userChoice.value = 'gave-code';
  messageSent.value = true;
  
  setTimeout(() => {
    scamRevealed.value = true;
  }, 1000);
};

const refuseToGive = () => {
  messages.value.push({
    id: messages.value.length + 1,
    sender: 'user',
    text: 'Non désolé, je ne donne jamais mes codes bancaires par message. Je vais t\'appeler.',
    time: '14:34'
  });
  
  userChoice.value = 'refused';
  messageSent.value = true;
  
  setTimeout(() => {
    scamRevealed.value = true;
  }, 1000);
};

const callMother = () => {
  userChoice.value = 'called';
  messageSent.value = true;
  
  setTimeout(() => {
    scamRevealed.value = true;
  }, 1000);
};

const completeLevel = () => {
  localStorage.setItem('quiz_medium_level_3_completed', 'true');
  router.push('/quiz-medium');
};

const resetSimulation = () => {
  messages.value = [
    {
      id: 1,
      sender: 'contact',
      text: 'Coucou mon chéri ! C\'est maman',
      time: '14:32'
    },
    {
      id: 2,
      sender: 'contact',
      text: 'J\'ai un gros problème, ma carte bancaire ne marche plus au supermarché 😰',
      time: '14:32'
    },
    {
      id: 3,
      sender: 'contact',
      text: 'Tu peux me donner ton code de carte bleue ? Je te rembourserai ce soir promis !',
      time: '14:33'
    },
    {
      id: 4,
      sender: 'contact',
      text: 'C\'est urgent, il y a une file d\'attente derrière moi...',
      time: '14:33'
    }
  ];
  messageSent.value = false;
  scamRevealed.value = false;
  userChoice.value = null;
  userMessage.value = '';
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
    <div class="max-w-5xl mx-auto">
      
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
          <Phone :size="48" class="text-[#00C16A]" />
          <h1 class="text-4xl font-bold">Arnaque Téléphonique</h1>
        </div>
        <p class="text-gray-300 text-lg">Sauras-tu détecter cette arnaque par SMS ?</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        
        <!-- Phone Simulation -->
        <div class="flex justify-center lg:sticky lg:top-8">
          <div class="w-full max-w-sm">
            <!-- Phone Frame -->
            <div class="bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border-[12px] border-gray-900 relative">
              <!-- Volume buttons -->
              <div class="absolute -left-1 top-24 w-1 h-12 bg-gray-800 rounded-l"></div>
              <div class="absolute -left-1 top-40 w-1 h-8 bg-gray-800 rounded-l"></div>
              <div class="absolute -right-1 top-32 w-1 h-16 bg-gray-800 rounded-r"></div>
              
              <!-- Notch -->
              <div class="bg-black h-7 rounded-b-3xl mb-1 flex items-center justify-center relative">
                <div class="w-20 h-5 bg-gray-900 rounded-full flex items-center justify-around px-2">
                  <div class="w-12 h-1 bg-gray-700 rounded-full"></div>
                  <div class="w-2 h-2 bg-gray-700 rounded-full"></div>
                </div>
              </div>
              
              <!-- Screen -->
              <div class="bg-gradient-to-b from-gray-50 to-white rounded-[1.5rem] overflow-hidden h-[620px] flex flex-col shadow-inner">
                
                <!-- Status Bar -->
                <div class="bg-white px-6 py-2 flex justify-between items-center text-xs text-gray-900 font-medium">
                  <span>14:34</span>
                  <div class="flex gap-1 items-center">
                    <div class="flex gap-[2px]">
                      <div class="w-1 h-3 bg-gray-900 rounded-sm"></div>
                      <div class="w-1 h-3 bg-gray-900 rounded-sm"></div>
                      <div class="w-1 h-3 bg-gray-400 rounded-sm"></div>
                      <div class="w-1 h-3 bg-gray-400 rounded-sm"></div>
                    </div>
                    <span class="ml-1">100%</span>
                  </div>
                </div>

                <!-- Header -->
                <div class="bg-gradient-to-r from-white to-gray-50 px-4 py-4 flex items-center gap-3 border-b-2 border-gray-200 shadow-md">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-pink-100">
                    M
                  </div>
                  <div class="flex-1 relative z-10">
                    <h3 class="font-bold text-xl tracking-tight" style="color: #000000;">Maman ❤️</h3>
                    <p class="text-sm text-gray-600 flex items-center gap-1.5 font-medium mt-0.5">
                      <span class="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-sm"></span>
                      En ligne
                    </p>
                  </div>
                  <button 
                    @click="callMother"
                    class="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center hover:scale-110 transition-all shadow-xl hover:shadow-2xl active:scale-95 ring-4 ring-green-100"
                  >
                    <Phone :size="22" class="text-white" />
                  </button>
                </div>

                <!-- Messages Area -->
                <div class="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 via-blue-50/30 to-purple-50/20">
                  <div
                    v-for="message in messages"
                    :key="message.id"
                    :class="[
                      'flex',
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    ]"
                  >
                    <div
                      :class="[
                        'max-w-[80%] rounded-2xl px-4 py-3 shadow-md transition-all duration-300 hover:shadow-lg',
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md'
                          : 'bg-white text-gray-900 rounded-bl-md border border-gray-100'
                      ]"
                    >
                      <p class="text-[15px] leading-relaxed">{{ message.text }}</p>
                      <p :class="[
                        'text-[11px] mt-1.5 flex items-center gap-1',
                        message.sender === 'user' ? 'text-blue-100 justify-end' : 'text-gray-400'
                      ]">
                        {{ message.time }}
                        <span v-if="message.sender === 'user'" class="text-blue-200">✓✓</span>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Input Area -->
                <div v-if="!messageSent" class="border-t border-gray-200 p-4 bg-white shadow-lg">
                  <div class="flex gap-2 mb-3">
                    <input
                      v-model="userMessage"
                      @keyup.enter="sendMessage"
                      type="text"
                      placeholder="Message..."
                      class="flex-1 px-4 py-3 bg-gray-100 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    />
                    <button
                      @click="sendMessage"
                      :disabled="!userMessage.trim()"
                      :class="[
                        'w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-md',
                        userMessage.trim() 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:scale-105 active:scale-95' 
                          : 'bg-gray-300 cursor-not-allowed'
                      ]"
                    >
                      <Send :size="18" class="text-white" />
                    </button>
                  </div>
                  
                  <!-- Quick Actions -->
                  <div class="flex gap-2">
                    <button
                      @click="giveCode"
                      class="flex-1 px-4 py-2.5 bg-gradient-to-r from-red-50 to-red-100 text-red-700 text-sm font-medium rounded-xl hover:from-red-100 hover:to-red-200 transition-all border border-red-200 shadow-sm hover:shadow active:scale-95"
                    >
                      💳 Donner mon code
                    </button>
                    <button
                      @click="refuseToGive"
                      class="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-50 to-green-100 text-green-700 text-sm font-medium rounded-xl hover:from-green-100 hover:to-green-200 transition-all border border-green-200 shadow-sm hover:shadow active:scale-95"
                    >
                      🛡️ Refuser
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Information Panel -->
        <div class="space-y-6">
          
          <!-- Instructions -->
          <div v-if="!scamRevealed" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 class="text-xl font-bold mb-4 text-[#00C16A]">📱 Situation</h3>
            <p class="text-gray-300 mb-4">
              Vous recevez ces messages de quelqu'un qui prétend être votre mère. Elle vous demande votre code de carte bancaire.
            </p>
            <p class="text-gray-300 mb-4">
              <strong>Que faites-vous ?</strong>
            </p>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-[#00C16A] mt-1">•</span>
                <span>Vous pouvez taper votre propre réponse dans le téléphone</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#00C16A] mt-1">•</span>
                <span>Ou utiliser les boutons de réponse rapide</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#00C16A] mt-1">•</span>
                <span>Vous pouvez aussi cliquer sur l'icône téléphone pour "appeler"</span>
              </li>
            </ul>
          </div>

          <!-- Scam Revealed - GAVE CODE -->
          <div v-if="scamRevealed && userChoice === 'gave-code'" class="space-y-6">
            <div class="bg-red-900 border-4 border-red-500 rounded-xl p-8 animate-pulse">
              <div class="flex items-center gap-4 mb-4">
                <XCircle :size="48" class="text-red-300 flex-shrink-0" />
                <h2 class="text-3xl font-bold text-red-100">TU T'ES FAIT AVOIR !</h2>
              </div>
              <p class="text-xl text-red-100 mb-4">
                ⚠️ CE N'ÉTAIT PAS TA MÈRE !
              </p>
              <p class="text-lg text-red-200">
                C'était un arnaqueur qui a usurpé son identité. Ton argent a été volé !
              </p>
            </div>

            <div class="bg-yellow-900/30 border border-yellow-600 rounded-xl p-6">
              <h3 class="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <AlertTriangle :size="24" />
                Ce que tu aurais dû faire
              </h3>
              <ul class="space-y-3 text-gray-200">
                <li class="flex items-start gap-2">
                  <span class="text-yellow-400 text-xl">1.</span>
                  <span><strong>APPELER</strong> ta mère directement pour vérifier</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-400 text-xl">2.</span>
                  <span><strong>JAMAIS</strong> donner de code bancaire par message</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-400 text-xl">3.</span>
                  <span>Se méfier des demandes urgentes d'argent</span>
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

          <!-- Scam Revealed - REFUSED -->
          <div v-if="scamRevealed && userChoice === 'refused'" class="space-y-6">
            <div class="bg-yellow-900/30 border-2 border-yellow-600 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <AlertTriangle :size="32" class="text-yellow-400" />
                <h2 class="text-2xl font-bold text-yellow-400">Bien joué... mais pas parfait !</h2>
              </div>
              <p class="text-lg text-gray-200 mb-3">
                Tu as refusé de donner ton code, c'est bien ! Mais ce n'était pas ta vraie mère.
              </p>
              <p class="text-gray-300">
                La meilleure réaction aurait été d'<strong class="text-[#00C16A]">APPELER</strong> directement pour vérifier l'identité.
              </p>
            </div>

            <div class="bg-green-900/30 border border-green-600 rounded-xl p-6">
              <h3 class="font-bold text-green-400 mb-3 flex items-center gap-2">
                <CheckCircle :size="24" />
                Ce que tu as bien fait
              </h3>
              <ul class="space-y-2 text-gray-200">
                <li class="flex items-start gap-2">
                  <CheckCircle :size="20" class="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Refuser de donner des informations bancaires par message</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle :size="20" class="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Se méfier de la demande urgente</span>
                </li>
              </ul>
            </div>

            <button
              @click="completeLevel"
              class="w-full py-3 px-6 bg-[#00C16A] hover:bg-[#00d175] rounded-lg font-semibold transition-colors"
            >
              Continuer vers le niveau suivant
            </button>
          </div>

          <!-- Scam Revealed - CALLED -->
          <div v-if="scamRevealed && userChoice === 'called'" class="space-y-6">
            <div class="bg-green-900/30 border-4 border-green-500 rounded-xl p-8">
              <div class="flex items-center gap-4 mb-4">
                <CheckCircle :size="48" class="text-green-300 flex-shrink-0" />
                <h2 class="text-3xl font-bold text-green-100">PARFAIT !</h2>
              </div>
              <p class="text-xl text-green-100 mb-4">
                ✅ Tu as pris la bonne décision !
              </p>
              <p class="text-lg text-green-200">
                En appelant ta mère, tu as découvert que ce n'était pas elle. Tu as évité l'arnaque !
              </p>
            </div>

            <div class="bg-gray-800/50 border border-gray-600 rounded-xl p-6">
              <h3 class="font-bold text-[#00C16A] mb-3">🎯 Leçon retenue</h3>
              <p class="text-gray-200 mb-3">
                Face à une demande suspecte, même de la part d'un proche :
              </p>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="text-[#00C16A]">✓</span>
                  <span>Toujours vérifier par un autre canal (appel, vidéo)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#00C16A]">✓</span>
                  <span>Ne jamais partager de codes bancaires</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#00C16A]">✓</span>
                  <span>Se méfier des urgences artificielles</span>
                </li>
              </ul>
            </div>

            <button
              @click="completeLevel"
              class="w-full py-3 px-6 bg-[#00C16A] hover:bg-[#00d175] rounded-lg font-semibold transition-colors"
            >
              Continuer vers le niveau suivant
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>
