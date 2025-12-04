<template>
  <div :class="messageClass">
    <div :class="bubbleClass">
      <p class="text-sm whitespace-pre-line">{{ message }}</p>
      <span class="text-xs opacity-75 mt-1 block">{{ formattedTime }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  isUser: {
    type: Boolean,
    default: false
  },
  timestamp: {
    type: String,
    default: () => new Date().toISOString()
  }
});

const messageClass = computed(() => 
  props.isUser ? 'flex justify-end' : 'flex justify-start'
);

const bubbleClass = computed(() => {
  const base = 'max-w-xs lg:max-w-md px-4 py-2 rounded-lg';
  return props.isUser
    ? `${base} bg-blue-600 text-white rounded-br-none`
    : `${base} bg-gray-200 text-gray-900 rounded-bl-none`;
});

const formattedTime = computed(() => {
  const date = new Date(props.timestamp);
  return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
});
</script>
