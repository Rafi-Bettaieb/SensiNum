<script setup>
defineProps({
  messages: Array
});
</script>

<template>
  <div class="chat-window">
    <div v-for="(msg, idx) in messages" :key="idx" :class="msg.sender">
      {{ msg.text }}
    </div>
  </div>
</template>

<style scoped>
.user { text-align: right; }
.bot { text-align: left; }
</style>
