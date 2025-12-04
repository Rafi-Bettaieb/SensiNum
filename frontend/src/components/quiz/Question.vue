<template>
  <Card>
    <div class="space-y-4">
      <div class="flex items-start space-x-4">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
          {{ questionNumber }}
        </div>
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ question }}</h3>
          <div class="space-y-2">
            <div
              v-for="(option, index) in options"
              :key="index"
              class="option-item"
              :class="{ 'selected': selectedAnswer === index }"
              @click="selectAnswer(index)"
            >
              <input
                type="radio"
                :id="`option-${questionNumber}-${index}`"
                :name="`question-${questionNumber}`"
                :value="index"
                v-model="selectedAnswer"
                class="mr-3"
              />
              <label :for="`option-${questionNumber}-${index}`" class="flex-1 cursor-pointer">
                {{ option }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showFeedback" :class="feedbackClass" class="p-3 rounded-lg">
        <p class="font-semibold">{{ feedbackTitle }}</p>
        <p class="text-sm mt-1">{{ explanation }}</p>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref, computed } from 'vue';
import Card from '../ui/Card.vue';

const props = defineProps({
  questionNumber: {
    type: Number,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  correctAnswer: {
    type: Number,
    required: true
  },
  explanation: {
    type: String,
    default: ''
  },
  showFeedback: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['answer']);

const selectedAnswer = ref(null);

const selectAnswer = (index) => {
  selectedAnswer.value = index;
  emit('answer', index);
};

const feedbackClass = computed(() => {
  return selectedAnswer.value === props.correctAnswer
    ? 'bg-green-50 border border-green-200 text-green-800'
    : 'bg-red-50 border border-red-200 text-red-800';
});

const feedbackTitle = computed(() => {
  return selectedAnswer.value === props.correctAnswer
    ? '✓ Bonne réponse !'
    : '✗ Mauvaise réponse';
});
</script>

<style scoped>
.option-item {
  @apply flex items-center p-3 rounded-lg border border-gray-200 cursor-pointer transition-all duration-200 hover:bg-gray-50;
}

.option-item.selected {
  @apply border-blue-500 bg-blue-50;
}
</style>
