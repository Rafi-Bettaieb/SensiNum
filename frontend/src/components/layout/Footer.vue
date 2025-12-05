<script setup>
import { Shield, Twitter, Github, Linkedin } from 'lucide-vue-next';
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      
      <div class="footer-grid">
        <div class="brand-column">
          <div class="footer-logo">
            <Shield :size="24" class="text-[#00C16A]" fill="currentColor" />
            <span>SécuritéNumérique</span>
          </div>
          <p class="brand-desc">
            Votre allié cybersécurité. Apprenez et protégez-vous simplement.
          </p>
          <div class="social-links">
            <a href="#" class="social-icon"><Twitter :size="18" /></a>
            <a href="#" class="social-icon"><Github :size="18" /></a>
            <a href="#" class="social-icon"><Linkedin :size="18" /></a>
          </div>
        </div>

        <div class="links-column">
          <h4 class="column-title">Navigation</h4>
          <router-link to="/" class="footer-link">Accueil</router-link>
          <router-link to="/quiz-selection" class="footer-link">Cours & Quiz</router-link>
        </div>

        <div class="links-column">
          <h4 class="column-title">Aide</h4>
          <a href="#" class="footer-link">FAQ</a>
          <a href="#" class="footer-link">Contact</a>
        </div>

        <div class="links-column">
          <h4 class="column-title">Légal</h4>
          <a href="#" class="footer-link">Mentions légales</a>
          <a href="#" class="footer-link">Confidentialité</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 SécuritéNumérique.</p>
        <div class="legal-links">
          <a href="#" class="legal-link">Confidentialité</a>
          <a href="#" class="legal-link">Cookies</a>
        </div>
      </div>

    </div>
  </footer>
</template>
