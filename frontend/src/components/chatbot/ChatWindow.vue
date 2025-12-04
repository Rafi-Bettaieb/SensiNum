<template>
  <div class="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="bg-blue-600 text-white px-6 py-4">
      <h3 class="text-xl font-semibold">Assistant Cybersécurité</h3>
    </div>
    <div class="flex-1 overflow-y-auto p-6 space-y-4">
      <ChatMessage
        v-for="(message, index) in messages"
        :key="index"
        :message="message.text"
        :is-user="message.isUser"
        :timestamp="message.timestamp"
      />
      <div v-if="isTyping" class="flex items-center space-x-2 text-gray-500">
        <div class="flex space-x-1">
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
        </div>
      </div>
    </div>
    <div class="border-t p-4">
      <ChatInput @send="handleSend" :disabled="isTyping" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChatMessage from './ChatMessage.vue';
import ChatInput from './ChatInput.vue';

const props = defineProps({
  messages: {
    type: Array,
    default: () => []
  },
  isTyping: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['send']);

const handleSend = (message) => {
  emit('send', message);
};
</script>
