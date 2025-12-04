<template>
  <footer class="bg-gray-800 text-white mt-auto">
    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-3">SensiNum</h3>
          <p class="text-gray-400 text-sm">
            Plateforme de sensibilisation à la cybersécurité
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Liens rapides</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/" class="text-gray-400 hover:text-white transition">Accueil</router-link></li>
            <li><router-link to="/awareness" class="text-gray-400 hover:text-white transition">Sensibilisation</router-link></li>
            <li><router-link to="/quiz" class="text-gray-400 hover:text-white transition">Quiz</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-white transition">À propos</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Contact</h3>
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} SensiNum. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
