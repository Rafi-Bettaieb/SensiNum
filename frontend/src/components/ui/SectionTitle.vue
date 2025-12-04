<template>
  <div :class="containerClass">
    <component :is="tag" :class="titleClass">
      {{ title }}
    </component>
    <p v-if="subtitle" class="mt-2 text-gray-600">{{ subtitle }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  level: {
    type: Number,
    default: 2,
    validator: (value) => [1, 2, 3, 4, 5, 6].includes(value)
  },
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
});

const tag = computed(() => `h${props.level}`);

const containerClass = computed(() => {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return alignment[props.align];
});

const titleClass = computed(() => {
  const sizes = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-semibold',
    4: 'text-xl font-semibold',
    5: 'text-lg font-medium',
    6: 'text-base font-medium'
  };
  return `text-gray-900 ${sizes[props.level]}`;
});
</script>
