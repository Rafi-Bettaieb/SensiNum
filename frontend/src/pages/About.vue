<script setup>
import { Github, Code, Users, Shield, Send, Mail, MessageSquare } from 'lucide-vue-next';

// Fonction factice pour l'envoi du formulaire
const submitForm = () => {
  alert("Message envoyé ! (Simulation)");
};
</script>

<template>
  <div class="about-page">
    <div class="page-container">
      
      <div class="about-header">
        <h1 class="page-title">À propos du projet</h1>
        <p class="page-subtitle">
          SécuritéNumérique est une initiative communautaire pour rendre la cybersécurité accessible à tous.
        </p>
      </div>

      <div class="about-grid">
        
        <div class="info-card">
          <div class="icon-wrapper">
            <Shield :size="40" class="icon-green" />
          </div>
          <h3>Notre Mission</h3>
          <p>
            Nous croyons que la sécurité en ligne ne doit pas être réservée aux experts. 
            Notre plateforme propose des cours interactifs pour apprendre à se protéger.
          </p>
        </div>

        <div class="info-card highlight-card">
          <div class="icon-wrapper">
            <Code :size="40" class="icon-green" />
          </div>
          <h3>100% Open Source</h3>
          <p>
            Ce projet est transparent. Le code est accessible et améliorable par tous. 
            Nous encourageons les contributions.
          </p>
          <a href="https://github.com/Rafi-Bettaieb/SensiNum" target="_blank" class="github-btn">
            <Github :size="20" />
            Voir le GitHub
          </a>
        </div>

        <div class="info-card">
          <div class="icon-wrapper">
            <Users :size="40" class="icon-green" />
          </div>
          <h3>Par la communauté</h3>
          <p>
            Le contenu est vérifié par des passionnés pour coller aux dernières actualités 
            (Phishing, RGPD, Mots de passe, etc.).
          </p>
        </div>
      </div>

      <div class="contact-section">
        <h2 class="section-title">Nous contacter</h2>
        <p class="section-subtitle">Une idée, un bug ou une question ? Écrivez-nous.</p>

        <div class="form-wrapper">
          <form @submit.prevent="submitForm" class="contact-form">
            
            <div class="input-group">
              <div class="input-field">
                <label>Nom</label>
                <input type="text" placeholder="Votre nom" required />
              </div>
              <div class="input-field">
                <label>Email</label>
                <input type="email" placeholder="email@exemple.com" required />
              </div>
            </div>

            <div class="input-field">
              <label>Message</label>
              <textarea placeholder="Votre message..." rows="4" required></textarea>
            </div>

            <button type="submit" class="submit-btn">
              <Send :size="18" />
              Envoyer
            </button>
          </form>

          <div class="contact-links">
             <div class="link-item">
                <Mail :size="16" class="icon-green"/> support@securitenumerique.org
             </div>
             <div class="link-item">
                <MessageSquare :size="16" class="icon-green"/> Discord Communautaire
             </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style src="../assets/styles/about.css"></style>