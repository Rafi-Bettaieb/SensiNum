<template>
  <Card variant="elevated">
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900">Votre Adresse IP</h3>
    </template>
    <div class="text-center py-4">
      <p class="text-3xl font-bold text-blue-600">{{ ipAddress }}</p>
      <p class="text-sm text-gray-500 mt-2">{{ ipType }}</p>
    </div>
  </Card>
</template>

<script setup>
import Card from '../ui/Card.vue';

defineProps({
  ipAddress: {
    type: String,
    required: true
  },
  ipType: {
    type: String,
    default: 'IPv4'
  }
});
</script>
