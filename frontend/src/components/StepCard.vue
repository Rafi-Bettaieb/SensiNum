<template>
  <div class="relative">

    <!-- Timeline icon -->
    <div
      class="absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
      :class="iconBg"
      :aria-hidden="true"
    >
      <!-- Render the right SVG component -->
      <span v-if="step.status === 'done'" class="w-4 h-4" v-html="checkSvg"></span>
      <span v-else-if="step.status === 'current'" class="w-4 h-4" v-html="playSvg"></span>
      <span v-else class="w-4 h-4" v-html="lockSvg"></span>
    </div>

    <!-- Card -->
    <div
      class="p-6 rounded-xl border bg-gray-900 border-gray-700 shadow-md transition"
      :class="{ 'opacity-40': step.status === 'locked' }"
    >
      <p class="text-sm font-semibold mb-1" :class="labelColor">
        {{ step.label }}
      </p>

      <h3 class="text-xl font-semibold mb-2">
        {{ step.title }}
      </h3>

      <p class="text-gray-400 mb-6">
        {{ step.description }}
      </p>

      <!-- Buttons -->
      <button
        v-if="step.status !== 'locked'"
        :class="buttonStyle"
        :aria-label="step.status === 'done' ? 'Refaire le cours' : 'Commencer le cours'"
      >
        {{ step.status === 'done' ? 'Refaire le cours' : 'Commencer' }}
      </button>

      <button
        v-else
        disabled
        class="px-4 py-2 rounded bg-gray-800 text-gray-500 cursor-not-allowed"
        aria-disabled="true"
      >
        Verrouillé
      </button>
    </div>

  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  step: Object
});

/* -------------------- SVG ICONS (inline) --------------------
   They are small, accessible and styled via currentColor.
   We use v-html to inject the SVG markup so Tailwind classes on the wrapper apply.
   Each SVG includes a <title> for screen readers.
--------------------------------------------------------------*/

// Check (done) - a filled check mark
const checkSvg = `
<svg role="img" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" focusable="false">
  <title>Étape terminée</title>
  <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`;

// Play (current) - triangle
const playSvg = `
<svg role="img" width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" focusable="false">
  <title>Étape en cours</title>
  <path d="M5 3.868C5 2.854 6.319 2.227 7.159 2.852L19.159 12.184C20.067 12.846 20.067 14.154 19.159 14.816L7.159 24.148C6.319 24.773 5 24.146 5 23.132V3.868Z"></path>
</svg>
`;

// Lock (locked) - padlock
const lockSvg = `
<svg role="img" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" focusable="false">
  <title>Étape verrouillée</title>
  <rect x="3" y="11" width="18" height="10" rx="2" stroke="white" stroke-width="1.6" />
  <path d="M7 11V7a5 5 0 1 1 10 0v4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

/* -------------------- computed classes -------------------- */
const iconBg = computed(() => ({
  "bg-green-600": props.step.status === "done",
  "bg-green-500": props.step.status === "current",
  "bg-gray-700": props.step.status === "locked"
}));

const labelColor = computed(() => ({
  "text-green-500": props.step.status === "done",
  "text-green-400": props.step.status === "current",
  "text-gray-500": props.step.status === "locked"
}));

const buttonStyle = computed(() => {
  if (props.step.status === "done") {
    return "px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-200 focus:ring-2 focus:ring-green-300 focus:outline-none";
  }
  return "px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-300 focus:outline-none";
});
</script>

<style scoped>
/* Ensure SVG uses the wrapper size and is crisp */
svg { display: block; width: 100%; height: 100%; }
</style>
