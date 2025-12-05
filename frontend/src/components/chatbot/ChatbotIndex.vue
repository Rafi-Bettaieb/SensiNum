<script setup>
import { ref } from "vue";
import ChatbotToggle from "./ChatbotToggle.vue";
import ChatbotPopup from "./ChatbotPopup.vue";

const open = ref(false);
</script>

<template>
  <ChatbotToggle :isOpen="open" @toggle="open = !open" />
  <ChatbotPopup :isOpen="open" @close="open = false" />
</template>
