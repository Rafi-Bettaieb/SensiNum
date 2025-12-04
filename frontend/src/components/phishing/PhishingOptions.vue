<template>
  <div class="space-y-4">
    <p class="text-gray-700 font-medium">Pensez-vous que cet email est légitime ?</p>
    <div class="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        size="lg"
        @click="$emit('answer', true)"
      >
        ✓ Légitime
      </Button>
      <Button
        variant="danger"
        size="lg"
        @click="$emit('answer', false)"
      >
        ✗ Phishing
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../ui/Button.vue';

defineEmits(['answer']);
</script>
