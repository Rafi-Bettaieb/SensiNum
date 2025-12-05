<script setup>
// Import du conteneur principal du chatbot
import ChatbotIndex from './components/chatbot/ChatbotIndex.vue';
</script>

<template>
  <div class="app-container">
    <router-view />
    <ChatbotIndex />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #f4f4f9;
}
</style>
