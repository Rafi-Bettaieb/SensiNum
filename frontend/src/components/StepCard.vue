<template>
  <div
    :class="[
      'relative p-6 rounded-xl transition border',
      step.status === 'current'
        ? 'bg-[#11161c] border-[#00c853]'
        : step.status === 'done'
        ? 'bg-[#11161c] border-[#00c853]'
        : 'bg-[#161b22] border-gray-700 opacity-60'
    ]"
  >
    <!-- Pastille -->
    <div
      class="absolute -left-4 top-6 w-8 h-8 rounded-full flex items-center justify-center text-xl"
      :class="{
        'bg-[#00c853] text-white': step.status === 'done',
        'bg-[#00e676] text-white animate-pulse': step.status === 'current',
        'bg-gray-700 text-gray-500': step.status === 'locked'
      }"
    >
      <span v-if="step.status === 'done'">✔</span>
      <span v-else-if="step.status === 'current'">▶</span>
      <span v-else>🔒</span>
    </div>

    <!-- Content -->
    <h3 class="text-2xl font-bold mb-1 text-white">{{ step.title }}</h3>
    <p class="text-gray-300 mb-4">{{ step.description }}</p>

    <!-- Boutons -->
    <button
      v-if="step.status === 'current'"
      @click="$emit('open-course', step.id)"
      class="bg-[#00c853] hover:bg-[#00e676] px-5 py-3 rounded-lg w-full font-medium transition text-white"
    >
      Commencer
    </button>

    <button
      v-else-if="step.status === 'done'"
      @click="$emit('open-course', step.id)"
      class="bg-[#0b4020] border border-[#00c853] hover:bg-[#0e5329] px-5 py-3 rounded-lg w-full font-medium transition text-white"
    >
      Revoir
    </button>

    <button
      v-else
      class="bg-[#1b1f24] border border-gray-700 px-5 py-3 rounded-lg w-full font-medium text-gray-400 cursor-not-allowed"
    >
      Verrouillé
    </button>
  </div>
</template>

<script setup>
defineProps({
  step: Object
});
</script>
