<script setup>
import { ArrowLeft, Lock, CheckCircle, XCircle, Eye, EyeOff, AlertCircle } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();
const password = ref('');
const showPassword = ref(false);
const submitted = ref(false);
const attempts = ref(0);

// Critères cachés (non affichés à l'utilisateur)
const hiddenCriteria = [
  { id: 1, test: (p) => p.length >= 12, hint: 'Au moins 12 caractères' },
  { id: 2, test: (p) => /[A-Z]/.test(p), hint: 'Au moins une majuscule' },
  { id: 3, test: (p) => /[a-z]/.test(p), hint: 'Au moins une minuscule' },
  { id: 4, test: (p) => /[0-9]/.test(p), hint: 'Au moins un chiffre' },
  { id: 5, test: (p) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(p), hint: 'Au moins un caractère spécial (!@#$%...)' },
  { id: 6, test: (p) => !/(.)\1{2,}/.test(p), hint: 'Pas de caractères répétés 3 fois de suite' },
  { id: 7, test: (p) => !/(123|234|345|456|567|678|789|abc|bcd|cde|def)/i.test(p), hint: 'Pas de séquences évidentes (123, abc, etc.)' },
  { id: 8, test: (p) => !/(password|motdepasse|azerty|qwerty|admin|user)/i.test(p), hint: 'Pas de mots courants (password, azerty, etc.)' }
];

const checkCriteria = computed(() => {
  return hiddenCriteria.map(criterion => ({
    ...criterion,
    passed: criterion.test(password.value)
  }));
});

const allCriteriaMet = computed(() => {
  return checkCriteria.value.every(c => c.passed);
});

const failedCriteria = computed(() => {
  return checkCriteria.value.filter(c => !c.passed);
});

const passwordStrength = computed(() => {
  const passedCount = checkCriteria.value.filter(c => c.passed).length;
  const total = checkCriteria.value.length;
  const percentage = (passedCount / total) * 100;
  
  if (percentage === 100) return { label: 'Excellent', color: 'text-green-400', bg: 'bg-green-500' };
  if (percentage >= 75) return { label: 'Bon', color: 'text-yellow-400', bg: 'bg-yellow-500' };
  if (percentage >= 50) return { label: 'Moyen', color: 'text-orange-400', bg: 'bg-orange-500' };
  return { label: 'Faible', color: 'text-red-400', bg: 'bg-red-500' };
});

const submitPassword = () => {
  submitted.value = true;
  attempts.value++;
};

const resetPassword = () => {
  password.value = '';
  submitted.value = false;
};

const completeLevel = () => {
  localStorage.setItem('quiz_medium_level_2_completed', 'true');
  router.push('/quiz-medium');
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
    <div class="max-w-4xl mx-auto">
      
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
          <Lock :size="48" class="text-[#00C16A]" />
          <h1 class="text-4xl font-bold">Créateur de Mot de Passe Sécurisé</h1>
        </div>
        <p class="text-gray-300 text-lg">Créez un mot de passe qui respecte nos critères de sécurité</p>
      </div>

      <!-- Main Card -->
      <div class="bg-gray-800 rounded-xl p-8 border border-gray-700">
        
        <!-- Instructions -->
        <div class="mb-8 p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
          <div class="flex items-start gap-3">
            <AlertCircle :size="24" class="text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 class="font-bold text-blue-400 mb-2">Mission</h3>
              <p class="text-gray-300">
                Créez un mot de passe suffisamment sécurisé pour être accepté par le système. 
                Les critères exacts ne sont pas affichés - à vous de deviner ce qui rend un mot de passe fort !
              </p>
            </div>
          </div>
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-300 mb-2">
            Votre mot de passe
          </label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              :disabled="submitted && allCriteriaMet"
              class="w-full px-4 py-3 bg-gray-900 border-2 border-gray-600 rounded-lg text-white focus:border-[#00C16A] focus:outline-none transition-colors pr-12 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Entrez votre mot de passe..."
            />
            <button
              @click="showPassword = !showPassword"
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <Eye v-if="!showPassword" :size="20" />
              <EyeOff v-else :size="20" />
            </button>
          </div>
        </div>

        <!-- Strength Indicator -->
        <div v-if="password.length > 0 && !submitted" class="mb-6">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-400">Force du mot de passe</span>
            <span :class="['text-sm font-semibold', passwordStrength.color]">
              {{ passwordStrength.label }}
            </span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-2">
            <div 
              :class="['h-2 rounded-full transition-all duration-300', passwordStrength.bg]"
              :style="{ width: (checkCriteria.filter(c => c.passed).length / checkCriteria.length * 100) + '%' }"
            ></div>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          v-if="!submitted"
          @click="submitPassword"
          :disabled="password.length === 0"
          :class="[
            'w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200',
            password.length > 0
              ? 'bg-[#00C16A] hover:bg-[#00d175] cursor-pointer'
              : 'bg-gray-600 cursor-not-allowed opacity-50'
          ]"
        >
          Valider le mot de passe
        </button>

        <!-- Result Display -->
        <div v-if="submitted">
          <!-- Success -->
          <div v-if="allCriteriaMet" class="space-y-6">
            <div class="p-6 bg-green-900/30 border-2 border-green-600 rounded-lg">
              <div class="flex items-center gap-3 mb-3">
                <CheckCircle :size="32" class="text-green-400" />
                <h3 class="text-2xl font-bold text-green-400">Mot de passe accepté !</h3>
              </div>
              <p class="text-lg text-gray-200 mb-4">
                Excellent travail ! Votre mot de passe respecte tous les critères de sécurité.
              </p>
              <p class="text-gray-300">
                Tentatives nécessaires : <span class="font-bold text-[#00C16A]">{{ attempts }}</span>
              </p>
            </div>

            <!-- Reveal Criteria -->
            <div class="bg-gray-900/50 border border-gray-600 rounded-lg p-4">
              <h4 class="font-bold text-gray-300 mb-3">Critères de sécurité respectés :</h4>
              <ul class="space-y-2">
                <li v-for="criterion in checkCriteria" :key="criterion.id" class="flex items-start gap-2">
                  <CheckCircle :size="20" class="text-green-400 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-200">{{ criterion.hint }}</span>
                </li>
              </ul>
            </div>

            <button
              @click="completeLevel"
              class="w-full py-3 px-6 bg-[#00C16A] hover:bg-[#00d175] rounded-lg font-semibold transition-colors duration-200"
            >
              Continuer vers le niveau suivant
            </button>
          </div>

          <!-- Failure -->
          <div v-else class="space-y-6">
            <div class="p-6 bg-red-900/30 border-2 border-red-600 rounded-lg">
              <div class="flex items-center gap-3 mb-3">
                <XCircle :size="32" class="text-red-400" />
                <h3 class="text-2xl font-bold text-red-400">Mot de passe refusé</h3>
              </div>
              <p class="text-lg text-gray-200 mb-4">
                Votre mot de passe ne respecte pas tous les critères de sécurité requis.
              </p>
              <p class="text-gray-300">
                Tentative {{ attempts }}
              </p>
            </div>

            <!-- Show Failed Criteria -->
            <div class="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
              <h4 class="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <AlertCircle :size="20" />
                Indices - Critères non respectés :
              </h4>
              <ul class="space-y-2">
                <li v-for="criterion in failedCriteria" :key="criterion.id" class="flex items-start gap-2">
                  <XCircle :size="20" class="text-red-400 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-200">{{ criterion.hint }}</span>
                </li>
              </ul>
            </div>

            <button
              @click="resetPassword"
              class="w-full py-3 px-6 bg-[#00C16A] hover:bg-[#00d175] rounded-lg font-semibold transition-colors duration-200"
            >
              Réessayer avec un autre mot de passe
            </button>
          </div>
        </div>

      </div>

      <!-- Tips Section -->
      <div class="mt-8 bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <h3 class="font-bold text-lg mb-3 text-[#00C16A]">💡 Conseils pour créer un mot de passe fort</h3>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start gap-2">
            <span class="text-[#00C16A] mt-1">•</span>
            <span>Utilisez une phrase longue plutôt qu'un mot court</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[#00C16A] mt-1">•</span>
            <span>Mélangez majuscules, minuscules, chiffres et symboles</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[#00C16A] mt-1">•</span>
            <span>Évitez les mots du dictionnaire et les séquences évidentes</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[#00C16A] mt-1">•</span>
            <span>N'utilisez jamais d'informations personnelles (date de naissance, nom, etc.)</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
