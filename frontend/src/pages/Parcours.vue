<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">

    <section class="container mx-auto px-4 py-16">
      <h1 class="text-4xl sm:text-5xl font-bold mb-4">Parcours d’apprentissage</h1>

      <p class="text-gray-300 text-lg max-w-2xl mb-12">
        Explorez les étapes essentielles pour renforcer vos compétences en cybersécurité.
      </p>

      <div class="relative border-l border-gray-700 pl-10 space-y-12">
        <StepCard 
          v-for="step in steps" 
          :key="step.id"
          :step="step"
          @open-course="openCourse"
        />
      </div>

    </section>

  </div>
</template>

<script setup>
import StepCard from "../components/StepCard.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { isCourseCompleted } from "../utils/progress.js";

const router = useRouter();

const openCourse = (id) => {
  router.push(`/cours/${id}`);
};

const steps = ref([
  {
    id: 1,
    title: "Créer un mot de passe solide",
    description: "Apprenez comment rendre vos comptes plus difficiles à pirater.",
    status: "locked",
    label: "Étape 1"
  },
  {
    id: 2,
    title: "Reconnaître un email frauduleux",
    description: "Comprenez les signes d'une tentative de phishing.",
    status: "locked",
    label: "Étape 2"
  },
  {
    id: 3,
    title: "Sécuriser vos données personnelles",
    description: "Protégez vos informations en ligne.",
    status: "locked",
    label: "Étape 3"
  }
]);

onMounted(() => {
  steps.value[0].status = "current"; // Cours 1 débloqué par défaut

  if (isCourseCompleted(1)) {
    steps.value[0].status = "done";
    steps.value[1].status = "current";
  }
  if (isCourseCompleted(2)) {
    steps.value[1].status = "done";
    steps.value[2].status = "current";
  }
  if (isCourseCompleted(3)) {
    steps.value[2].status = "done";
  }
});
</script>
