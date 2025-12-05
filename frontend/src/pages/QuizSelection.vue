<script setup>
import { Lock, Check, Shield, Mail, Wifi } from 'lucide-vue-next';
</script>

<template>
  <div class="selection-page">
    
    <div class="page-container">
      
      <header class="page-header">
        <h1 class="page-title">Testez vos connaissances !</h1>
        <p class="page-subtitle">Apprenez en vous amusant avec nos quiz et mini-jeux.</p>
      </header>

      <section class="section-container">
        <h2 class="section-title">Quiz par niveau</h2>
        <p class="section-desc">Progressez à votre rythme et débloquez de nouveaux défis !</p>
        
        <div class="cards-grid">
          
          <div class="level-card-active">
            <h3 class="level-title-active">Niveau Facile</h3>
            <p class="level-subtitle">Pour bien commencer</p>
            
            <div class="level-icon-circle">
               <Check :size="32" class="text-black stroke-[3]" />
            </div>
            <p class="level-percent">100%</p>

            <router-link to="/quiz" class="btn-play">
              Jouer
            </router-link>
          </div>

          <div class="level-card-locked">
            <h3 class="level-title-locked">Niveau Moyen</h3>
            <p class="level-subtitle">Prêt pour un défi ?</p>
            
            <div class="locked-icon-wrapper">
                <Lock :size="32" class="text-gray-400" />
            </div>

            <button disabled class="btn-locked">
              Verrouillé
            </button>
          </div>

          <div class="level-card-locked">
            <h3 class="level-title-locked">Niveau Difficile</h3>
            <p class="level-subtitle">Pour les experts</p>
            
            <div class="locked-icon-wrapper">
                <Lock :size="32" class="text-gray-400" />
            </div>

            <button disabled class="btn-locked">
              Verrouillé
            </button>
          </div>

        </div>
      </section>

      <section>
        <h2 class="section-title">Nos Quiz & Mini-Jeux</h2>
        <p class="section-desc">Choisissez une carte pour commencer !</p>
        
        <div class="filter-container">
          <button class="filter-btn-active">Tous</button>
          <button class="filter-btn">Quiz</button>
          <button class="filter-btn">Mini-jeux</button>
        </div>

        <div class="cards-grid">
          
          <div class="game-card">
            <div class="game-header header-peach">
               <div class="glow-effect glow-peach"></div>
               <Shield :size="72" class="game-icon text-[#1e293b] fill-[#1e293b]" />
            </div>
            <div class="game-content">
              <h4 class="game-title text-peach">Quiz: Mots de passe robustes</h4>
              <p class="game-desc">Évaluez la force de vos mots de passe et apprenez les meilleures pratiques.</p>
            </div>
          </div>

          <div class="game-card">
            <div class="game-header header-blue">
               <div class="glow-effect glow-blue"></div>
               <Mail :size="72" class="game-icon text-[#1e293b]" />
            </div>
            <div class="game-content">
              <h4 class="game-title text-blue">Mini-jeu: Repérez le Phishing</h4>
              <p class="game-desc">Identifiez les e-mails frauduleux dans une boîte de réception simulée.</p>
            </div>
          </div>

          <div class="game-card">
            <div class="game-header header-teal">
               <div class="glow-effect glow-teal"></div>
               <Wifi :size="72" class="game-icon text-[#115e59]" />
            </div>
            <div class="game-content">
              <h4 class="game-title text-teal">Quiz: Confidentialité réseaux</h4>
              <p class="game-desc">Testez vos connaissances sur les paramètres de confidentialité essentiels.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  </div>
</template>

<style src="../assets/styles/quiz-selection.css"></style>