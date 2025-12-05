<template>
  <div class="quiz-page px-6 py-10 max-w-3xl mx-auto">
    <header class="quiz-header text-center mb-8">
      <h1 class="page-title text-3xl font-bold text-white">Quiz : Mots de passe robustes</h1>
      <p class="page-subtitle mt-2 text-gray-300">Classez les mots de passe du plus sûr au moins sûr.</p>
    </header>

    <section class="quiz-card bg-[#0f1724] p-6 rounded-lg shadow-md">
      <p class="mb-4 text-gray-400">Utilisez les boutons ↑/↓ pour déplacer un mot de passe dans le classement. Le mot de passe le plus sûr doit être en haut. Puis appuyez sur <strong>Valider</strong>.</p>

      <ul class="space-y-3" role="list">
        <li v-for="(item, index) in items" :key="item.id" class="bg-[#0b1220] border border-gray-800 rounded p-3 flex items-center justify-between" :class="{'ring-2 ring-green-400': showResult && item.correctPosition}">
          <div class="flex items-center gap-3">
            <div>
              <div class="font-mono text-sm text-white">{{ item.password }}</div>
              <div class="text-xs text-gray-500">Indice: {{ item.hint }}</div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button class="px-2 py-1 bg-gray-700 text-xs rounded" @click="moveUp(index)" :disabled="index===0">↑</button>
            <button class="px-2 py-1 bg-gray-700 text-xs rounded" @click="moveDown(index)" :disabled="index===items.length-1">↓</button>
          </div>
        </li>
      </ul>

      <div class="mt-6 flex gap-3">
        <button class="px-4 py-2 bg-green-500 rounded text-white" @click="checkAnswer">Valider</button>
        <button class="px-4 py-2 bg-gray-600 rounded text-white" @click="resetQuiz">Réinitialiser</button>
        <div v-if="showResult" class="ml-auto text-sm text-gray-200">Score: <strong class="text-white">{{ score }}/{{ items.length }}</strong></div>
      </div>

      <div v-if="showResult" class="mt-4 text-sm text-gray-300">
        <p v-if="score === items.length" class="text-green-400">Bravo — vous avez totalement classé correctement.</p>
        <p v-else class="text-yellow-300">Voici l'ordre correct (du plus sûr au moins sûr) :</p>
        <ol class="mt-2 list-decimal ml-6 text-gray-200">
          <li v-for="p in correctOrder" :key="p.id" class="font-mono">{{ p.password }} <span class="text-xs text-gray-400">({{ formatStrength(p.strength) }})</span></li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

// Les données et la logique JavaScript sont conservées
const initialItems = [
  { id: 1, password: 'correcthorsebatterystaple', hint: 'Long et phrase', },
  { id: 2, password: 'P@ssw0rd!', hint: 'Contient majuscule, chiffre, symbole', },
  { id: 3, password: '12345678', hint: 'Séquentiel numérique', },
  { id: 4, password: 'Tr0ub4dor&3', hint: 'Complexe mais court', },
  { id: 5, password: 'password', hint: 'Mot commun', },
]

function passwordStrength(pw) {
  let score = 0
  if (!pw) return 0
  score += Math.min(40, pw.length * 4)
  const classes = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/]
  let count = 0
  classes.forEach(rx => { if (rx.test(pw)) count++ })
  score += count * 15
  const commons = ['password', '1234', '123456', 'qwerty', 'letmein']
  const lower = pw.toLowerCase()
  commons.forEach(c => { if (lower.includes(c)) score -= 30 })
  if (score < 0) score = 0
  if (score > 100) score = 100
  return Math.round(score)
}

function formatStrength(s) {
  if (s >= 80) return 'Très fort'
  if (s >= 60) return 'Fort'
  if (s >= 40) return 'Moyen'
  return 'Faible'
}

function prepare(items) {
  return items.map(it => ({ ...it, strength: passwordStrength(it.password), correctPosition: false }))
}

const items = reactive(prepare(shuffleArray(initialItems)))
const showResult = ref(false)
const score = ref(0)

const correctOrder = computed(() => {
  return [...items].slice().sort((a, b) => b.strength - a.strength)
})

function shuffleArray(arr) {
  const copy = JSON.parse(JSON.stringify(arr))
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function moveUp(index) {
  if (index === 0) return
  const tmp = items[index - 1]
  items[index - 1] = items[index]
  items[index] = tmp
}

function moveDown(index) {
  if (index === items.length - 1) return
  const tmp = items[index + 1]
  items[index + 1] = items[index]
  items[index] = tmp
}

function resetQuiz() {
  const prepared = prepare(shuffleArray(initialItems))
  items.splice(0, items.length, ...prepared)
  showResult.value = false
  score.value = 0
}

function checkAnswer() {
  const correct = [...items].slice().sort((a, b) => b.strength - a.strength)
  let s = 0
  items.forEach(it => (it.correctPosition = false))
  items.forEach((it, idx) => {
    if (it.id === correct[idx].id) {
      s++
      it.correctPosition = true
    }
  })
  score.value = s
  showResult.value = true
}
</script>

<style scoped>
.quiz-page { color: #e6eef8; }
.quiz-card { border: 1px solid rgba(255,255,255,0.03); }
/* La classe .drag-handle a été supprimée du template, cette ligne n'est plus utile */
</style>