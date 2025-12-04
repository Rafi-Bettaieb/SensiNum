<template>
  <div :class="cardClass">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-gray-200">
      <slot name="header" />
    </div>
    <div class="px-6 py-4">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'elevated', 'bordered'].includes(value)
  },
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'small', 'normal', 'large'].includes(value)
  }
});

const cardClass = computed(() => {
  const base = 'bg-white rounded-lg overflow-hidden';
  
  const variants = {
    default: 'shadow',
    elevated: 'shadow-lg',
    bordered: 'border border-gray-200'
  };
  
  return `${base} ${variants[props.variant]}`;
});
</script>
