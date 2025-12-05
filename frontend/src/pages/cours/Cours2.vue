<template>
  <div class="min-h-screen bg-[#0d1117] text-white py-16 px-6">

    <div class="max-w-3xl mx-auto">

      <h1 class="text-4xl font-bold mb-6 text-[#00c853]">
        Reconnaître un email frauduleux (Phishing)
      </h1>

      <p class="text-gray-300 mb-6">
        Le phishing est une technique utilisée par les cybercriminels pour vous tromper et
        vous faire révéler vos données personnelles ou bancaires.
      </p>

      <h2 class="text-2xl font-semibold mb-4 text-white">Indices d’un email frauduleux</h2>

      <ul class="list-disc pl-6 text-gray-300 space-y-2 mb-6">
        <li>Adresse d’expéditeur suspecte ou inhabituelle</li>
        <li>Fautes d’orthographe ou formulation étrange</li>
        <li>Message qui crée une urgence ou une menace</li>
        <li>Lien masqué qui redirige vers un faux site</li>
        <li>Pièces jointes inattendues</li>
      </ul>

      <h2 class="text-2xl font-semibold mb-4 text-white">Exemple typique</h2>

      <div class="bg-[#161b22] p-4 rounded-lg border border-gray-700 mb-10">
        <p class="text-gray-300">"⚠ Votre compte sera désactivé sous 24h. Cliquez ici pour le réactiver."</p>
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
  completeCourse(2);
  router.push("/parcours");
}
</script>
