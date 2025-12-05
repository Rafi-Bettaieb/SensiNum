<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
    <!-- Hero Section -->
    <section class="home-hero">
      <div class="home-hero-content">
        <h1 class="home-hero-title flex items-center justify-center gap-3">
          <span class="text-5xl">🔒</span>
          Votre Bouclier Contre Toutes les Cybermenaces
        </h1>
        <p class="home-hero-subtitle max-w-3xl mx-auto">
          Face aux cyberattaques et au vol de données, protégez votre identité avec les bonnes pratiques essentielles contre toutes les menaces en ligne.
        </p>
        
        <!-- Hero Image -->
        <div class="home-hero-image-container">
          <img src="/phishing.png" alt="Cybersecurity Protection" class="home-hero-image" />
        </div>
      </div>
    </section>

    <!-- Activities Section -->
    <section class="home-activities">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="home-section-header">
          <h2 class="home-section-title">
            Nos activités pour apprendre
          </h2>
          <p class="home-section-subtitle">
            Choisissez une section pour commencer à explorer le monde de la sécurité numérique en toute simplicité.
          </p>
        </div>

        <div class="home-activities-grid">
          <!-- Cours faciles -->
          <div class="home-activity-card group" @click="navigateTo('/awareness')">
            <div class="home-activity-icon-wrapper">
              <svg class="home-activity-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 class="home-activity-title">Cours faciles</h3>
            <p class="home-activity-description">
              Apprenez les bases avec des leçons simples et claires.
            </p>
            <button class="home-activity-btn">
              Commencer les cours 
              <svg class="home-activity-btn-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!-- Quiz amusants -->
          <div class="home-activity-card group" @click="navigateTo('/quiz')">
            <div class="home-activity-icon-wrapper">
              <svg class="home-activity-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="home-activity-title">Quiz amusants</h3>
            <p class="home-activity-description">
              Testez vos connaissances en vous amusant.
            </p>
            <button class="home-activity-btn">
              Lancer un quiz 
              <svg class="home-activity-btn-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!-- Mini-Jeux -->
          <div class="home-activity-card group sm:col-span-2 lg:col-span-1" @click="navigateTo('/phishing')">
            <div class="home-activity-icon-wrapper">
              <svg class="home-activity-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
            <h3 class="home-activity-title">Mini-Jeux</h3>
            <p class="home-activity-description">
              Entraînez-vous avec des simulations de situations réelles.
            </p>
            <button class="home-activity-btn">
              Jouer maintenant 
              <svg class="home-activity-btn-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dangers Section -->
    <section class="home-dangers">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="home-section-header">
          <h2 class="home-section-title">
            Reconnaître les dangers sur internet
          </h2>
          <p class="home-section-subtitle">
            Savoir identifier les menaces est la première étape pour s'en protéger. Voici les plus courantes :
          </p>
        </div>

        <div class="home-dangers-grid">
          <!-- Phishing -->
          <div class="home-danger-card group">
            <div class="home-danger-icon-wrapper">
              <svg class="home-danger-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="home-danger-title">
              Emails frauduleux (Phishing)
            </h3>
            <p class="home-danger-description">
              Apprenez à repérer les faux messages qui tentent de voler vos informations.
            </p>
          </div>

          <!-- Weak Passwords -->
          <div class="home-danger-card group">
            <div class="home-danger-icon-wrapper">
              <svg class="home-danger-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="home-danger-title">
              Mots de passe faibles
            </h3>
            <p class="home-danger-description">
              Découvrez comment créer des mots de passe forts et faciles à retenir.
            </p>
          </div>

          <!-- Malware -->
          <div class="home-danger-card group sm:col-span-2 lg:col-span-1">
            <div class="home-danger-icon-wrapper">
              <svg class="home-danger-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="home-danger-title">
              Logiciels malveillants
            </h3>
            <p class="home-danger-description">
              Comprenez comment les virus et autres programmes dangereux peuvent infecter vos appareils.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="home-footer">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="home-footer-content">
          <div>
            <h3 class="home-footer-section-title">SensiNum</h3>
            <p class="home-footer-text">Plateforme de sensibilisation à la cybersécurité</p>
          </div>
          <div>
            <h3 class="home-footer-section-title">Contact</h3>
            <p class="home-footer-text">© 2025 SensiNum. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style scoped>
@import '../assets/styles/home.css';
</style>
