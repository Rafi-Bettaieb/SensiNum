<template>
  <div class="min-h-screen bg-[#0d1117] text-white py-16 px-6">

    <div class="max-w-3xl mx-auto">
      
      <h1 class="text-4xl font-bold mb-6 text-[#00c853]">
        Créer un mot de passe solide
      </h1>

      <p class="text-gray-300 mb-6">
        Les mots de passe sont la première barrière entre vos données et les pirates.
        Pourtant, la majorité des internautes utilise encore des mots de passe faibles ou réutilisés.
      </p>

      <h2 class="text-2xl font-semibold mb-4 text-white">Comment créer un mot de passe robuste</h2>

      <ul class="list-disc pl-6 text-gray-300 space-y-2 mb-6">
        <li>Utilisez au moins <strong>12 caractères</strong></li>
        <li>Privilégiez une <strong>phrase longue</strong> plutôt qu’un mot</li>
        <li>Mélangez lettres, chiffres et symboles</li>
        <li>Évitez les informations personnelles</li>
        <li>Utilisez un <strong>gestionnaire de mots de passe</strong></li>
      </ul>

      <h2 class="text-2xl font-semibold mb-4 text-white">Exemple de bon mot de passe</h2>

      <div class="bg-[#161b22] p-4 rounded-lg border border-gray-700 mb-10">
        <p class="text-green-400 font-mono text-lg">CaféDuMatin!À7hC'estSacré</p>
      </div>

      <!-- Bouton Terminer -->
      <button
        class="mt-8 px-6 py-3 bg-[#00c853] hover:bg-[#00e676] text-white text-lg rounded-lg transition"
        @click="finishCourse"
      >
        ✔ J'ai terminé ce cours
      </button>

    </div>

  </div>
</template>

<script setup>
import { completeCourse } from "../../utils/progress.js";
import { useRouter } from "vue-router";

const router = useRouter();
function finishCourse() {
  completeCourse(1);
  router.push("/parcours");
}
</script>
