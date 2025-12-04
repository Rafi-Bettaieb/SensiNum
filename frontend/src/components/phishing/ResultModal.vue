<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="close">
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4" @click.stop>
      <div class="text-center">
        <div :class="iconClass" class="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path v-if="isCorrect" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            <path v-else fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-2" :class="titleClass">{{ title }}</h3>
        <p class="text-gray-600 mb-4">{{ message }}</p>
        <div v-if="explanation" class="bg-gray-50 p-4 rounded-lg text-left mb-4">
          <p class="text-sm text-gray-700">{{ explanation }}</p>
        </div>
        <Button @click="close" variant="primary" size="lg" class="w-full">
          Continuer
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Button from '../ui/Button.vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);

const close = () => emit('close');

const iconClass = computed(() => 
  props.isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
);

const titleClass = computed(() => 
  props.isCorrect ? 'text-green-600' : 'text-red-600'
);
</script>
