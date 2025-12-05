<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">

    <section class="container mx-auto px-4 py-16">
      <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-white">Parcours d’apprentissage</h1>

      <p class="text-gray-300 text-lg max-w-2xl mb-12">
        Explorez les étapes essentielles pour renforcer vos compétences en cybersécurité.
        Suivez votre progression et débloquez de nouveaux modules.
      </p>

      <!-- TIMELINE -->
      <div class="relative border-l border-gray-700 pl-10 space-y-12">

        <StepCard 
          v-for="step in steps"
          :key="step.id"
          :step="step"
        />

      </div>
    </section>

  </div>
</template>

<script setup>
import StepCard from "../components/StepCard.vue";
import { ref } from "vue";

const steps = ref([
  {
    id: 1,
    title: "Créer un mot de passe solide",
    description: "Apprenez comment rendre vos comptes plus difficiles à pirater.",
    status: "done",
    label: "Étape 1 — Terminée"
  },
  {
    id: 2,
    title: "Reconnaître un email frauduleux",
    description: "Comprenez les signes qui trahissent une tentative de phishing.",
    status: "current",
    label: "Étape 2 — En cours"
  },
  {
    id: 3,
    title: "Sécuriser vos données personnelles",
    description: "Découvrez comment protéger vos informations sensibles.",
    status: "locked",
    label: "Étape 3 — Verrouillée"
  },
]);
</script>
