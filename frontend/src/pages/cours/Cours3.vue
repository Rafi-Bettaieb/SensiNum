<template>
  <div class="min-h-screen bg-[#0d1117] text-white py-16 px-6">

    <div class="max-w-3xl mx-auto">

      <h1 class="text-4xl font-bold mb-6 text-[#00c853]">
        Sécuriser vos données personnelles
      </h1>

      <p class="text-gray-300 mb-6">
        Chaque jour, des applications et sites internet collectent des informations sur vous.
      </p>

      <h2 class="text-2xl font-semibold mb-4 text-white">Bonnes pratiques essentielles</h2>

      <ul class="list-disc pl-6 text-gray-300 space-y-2 mb-6">
        <li>Limiter les permissions accordées aux applications</li>
        <li>Activer l’authentification à deux facteurs (2FA)</li>
        <li>Utiliser des connexions sécurisées (HTTPS uniquement)</li>
        <li>Configurer la confidentialité sur les réseaux sociaux</li>
        <li>Éviter de partager des informations sensibles publiquement</li>
      </ul>

      <h2 class="text-2xl font-semibold mb-4 text-white">Exemple de bonne pratique</h2>

      <div class="bg-[#161b22] p-4 rounded-lg border border-gray-700 mb-10">
        <p class="text-gray-300">
          Désactiver le suivi publicitaire et limiter l’accès à la localisation.
        </p>
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
  completeCourse(3);
  router.push("/parcours");
}
</script>
