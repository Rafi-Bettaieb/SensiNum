<template>
  <div class="w-full">
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-gray-700">
        Question {{ currentQuestion }} sur {{ totalQuestions }}
      </span>
      <span class="text-sm font-medium text-gray-700">
        {{ score }} / {{ totalQuestions }} points
      </span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div
        class="bg-blue-600 h-2 rounded-full transition-all duration-300"
        :style="{ width: progressPercentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentQuestion: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    default: 0
  }
});

const progressPercentage = computed(() => {
  return (props.currentQuestion / props.totalQuestions) * 100;
});
</script>
