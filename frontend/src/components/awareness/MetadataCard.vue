<template>
  <Card>
    <template #header>
      <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
    </template>
    <div class="space-y-2">
      <div v-for="(value, key) in metadata" :key="key" class="flex justify-between items-center">
        <span class="text-sm font-medium text-gray-600">{{ formatLabel(key) }}</span>
        <span class="text-sm text-gray-900">{{ value }}</span>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from '../ui/Card.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  metadata: {
    type: Object,
    required: true
  }
});

const formatLabel = (key) => {
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
};
</script>
