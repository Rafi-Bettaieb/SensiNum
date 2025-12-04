<template>
  <Card>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900">{{ subject }}</h3>
        <span :class="badgeClass">{{ sender }}</span>
      </div>
    </template>
    <div class="space-y-3">
      <div class="text-sm text-gray-600">
        <p><strong>De:</strong> {{ senderEmail }}</p>
        <p><strong>Date:</strong> {{ date }}</p>
      </div>
      <div class="border-t pt-3">
        <p class="text-gray-800 whitespace-pre-line">{{ content }}</p>
      </div>
      <div v-if="hasAttachment" class="flex items-center text-sm text-gray-600">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
        </svg>
        Pièce jointe
      </div>
    </div>
  </Card>
</template>

<script setup>
import { computed } from 'vue';
import Card from '../ui/Card.vue';

const props = defineProps({
  subject: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  senderEmail: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  hasAttachment: {
    type: Boolean,
    default: false
  },
  isPhishing: {
    type: Boolean,
    default: false
  }
});

const badgeClass = computed(() => {
  return props.isPhishing 
    ? 'px-2 py-1 text-xs font-semibold rounded bg-red-100 text-red-800'
    : 'px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-800';
});
</script>
