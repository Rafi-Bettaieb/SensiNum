<script setup>
import { Check, Lock, Shield, ArrowLeft } from 'lucide-vue-next';
</script>

<template>
  <div class="quiz-page">
    
    <div class="back-nav">
       <router-link to="/quiz-selection" class="back-link">
         <ArrowLeft :size="20" />
         Retour aux niveaux
       </router-link>
    </div>

    <div class="main-content">
      
      <div class="header-section">
        <h1 class="main-title">Parcours Quiz Facile</h1>
        <p class="sub-title">Suivez le chemin pour devenir un expert.</p>
      </div>

      <div class="path-container">
        
        <svg class="background-svg">
          <path d="M224,50 
                   C224,150 224,150 224,150 
                   C224,250 100,250 100,350 
                   C100,450 350,450 350,550
                   C350,650 224,650 224,750
                   C224,850 224,850 224,900" 
                fill="none" stroke="#9ca3af" stroke-width="4" stroke-dasharray="10 10" />
        </svg>

        <div class="step-item group step-center">
          <div class="card-success">
            <Check :size="48" class="text-[#0d1117] stroke-[3]" />
          </div>
          <span class="label-success">Introduction</span>
        </div>

        <div class="step-item group step-right">
          <div class="card-current">
            <span class="text-4xl font-extrabold text-[#00C16A]">2</span>
          </div>
          <span class="label-current">Phishing</span>
        </div>

        <div class="step-item step-left step-locked">
          <div class="card-locked">
            <Lock :size="32" class="text-gray-500" />
          </div>
          <span class="label-locked">Mots de passe</span>
        </div>

        <div class="step-item step-center-left step-locked">
          <div class="card-locked">
            <Lock :size="32" class="text-gray-500" />
          </div>
          <span class="label-locked">Achats en ligne</span>
        </div>

        <div class="step-item step-center pt-8 step-locked">
          <div class="card-boss">
             <Shield :size="48" class="text-yellow-600" />
          </div>
          <span class="label-locked">Examen Final</span>
        </div>

      </div>
    </div>
  </div>
</template>

<style src="../assets/styles/quiz.css"></style>