<template>
  <div class="max-w-4xl mx-auto p-6 text-gray-200">

    <!-- Title -->
    <h1 class="text-3xl font-bold mb-3">Votre parcours d'apprentissage</h1>
    <p class="text-gray-400 mb-8">
      Suivez les étapes dans l'ordre pour maîtriser les bases de la sécurité numérique.
      Chaque étape vous rapproche d'une meilleure hygiène numérique.
    </p>

    <!-- Timeline & Steps -->
    <div class="relative border-l border-gray-700 pl-8 space-y-6">
      <StepCard
        v-for="step in steps"
        :key="step.id"
        :step="step"
      />
    </div>

  </div>
</template>

<script setup>
import StepCard from "../components/StepCard.vue";
import { ref } from "vue";

const steps = ref([
  {
    id: 1,
    title: "Les Mots de Passe Forts",
    description: "Apprenez à créer et gérer des mots de passe impossibles à deviner.",
    status: "done", // done | current | locked
    label: "Étape 1 — Terminé"
  },
  {
    id: 2,
    title: "Reconnaître le Phishing",
    description: "Découvrez les astuces des pirates pour éviter les pièges les plus courants.",
    status: "current",
    label: "Étape 2 — En cours"
  },
  {
    id: 3,
    title: "Protéger ses Données",
    description: "Maîtrisez les bons réflexes pour garder vos informations personnelles en sécurité.",
    status: "locked",
    label: "Étape 3 — Verrouillé"
  }
]);
</script>
