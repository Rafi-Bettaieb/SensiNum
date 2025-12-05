<script setup>
// Import du conteneur principal du chatbot
import ChatbotIndex from './components/chatbot/ChatbotIndex.vue';
import Header from './components/layout/Header.vue' 
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="app-container">
        <Header />

    <router-view />
    <ChatbotIndex />
        <Footer />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #f4f4f9;
}
</style>
