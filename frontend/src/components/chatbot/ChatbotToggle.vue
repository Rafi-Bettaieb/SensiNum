<script setup>
defineProps({
  isOpen: Boolean
})
defineEmits(["toggle"])
</script>

<template>
  <button id="chatbot-toggler" @click="$emit('toggle')">
    <span class="material-symbols-rounded" v-if="!isOpen">forum</span>
    <span class="material-symbols-rounded" v-else>close</span>
  </button>
</template>

<style scoped>
/* Les styles sont maintenant dans style.css pour éviter les doublons */
</style>