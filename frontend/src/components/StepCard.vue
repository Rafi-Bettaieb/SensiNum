<template>
  <div class="relative">

    <div
      class="absolute -left-12 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-gray-700"
      :class="iconBg"
    >
      <span v-if="step.status === 'done'" v-html="checkSvg" class="w-5"></span>
      <span v-else-if="step.status === 'current'" v-html="playSvg" class="w-5"></span>
      <span v-else v-html="lockSvg" class="w-5"></span>
    </div>

    <div
      class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8
             shadow-lg hover:border-blue-500 hover:shadow-blue-500/10 backdrop-blur-sm transform 
             transition-all duration-300 group hover:-translate-y-1"
      :class="{ 'opacity-50': step.status === 'locked' }"
    >

      <p :class="labelColor" class="font-semibold mb-2">{{ step.label }}</p>

      <h3 class="text-2xl font-bold mb-3">{{ step.title }}</h3>

      <p class="text-gray-300 mb-6">{{ step.description }}</p>

      <button
        v-if="step.status !== 'locked'"
        @click="$emit('open-course', step.id)"
        :class="buttonStyle"
      >
        {{ step.status === 'done' ? 'Revoir le cours' : 'Commencer' }}
      </button>

      <button
        v-else
        disabled
        class="px-5 py-2 bg-gray-700 text-gray-500 rounded-lg cursor-not-allowed"
      >
        Verrouillé
      </button>

    </div>

  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({ step: Object });

const checkSvg = `<svg fill="none" stroke="white" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`;
const playSvg  = `<svg fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const lockSvg  = `<svg fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`;

const iconBg = computed(() => ({
  "bg-blue-600": props.step.status === "done",
  "bg-blue-500": props.step.status === "current",
  "bg-gray-600": props.step.status === "locked"
}));

const labelColor = computed(() => ({
  "text-blue-400": props.step.status === "done",
  "text-blue-300": props.step.status === "current",
  "text-gray-400": props.step.status === "locked"
}));

const buttonStyle = computed(() => {
  if (props.step.status === "done") {
    return "px-5 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition";
  }
  return "px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition";
});
</script>
