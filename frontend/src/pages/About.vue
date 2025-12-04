<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <SectionTitle 
        title="À propos de SensiNum" 
        subtitle="Notre mission : sensibiliser à la cybersécurité"
        :level="1"
        align="center"
        class="mb-8"
      />

      <Card variant="elevated" class="mb-8">
        <template #header>
          <h3 class="text-2xl font-semibold">Notre Mission</h3>
        </template>
        <p class="text-gray-700 leading-relaxed mb-4">
          SensiNum est une plateforme éducative dédiée à la sensibilisation à la cybersécurité. 
          Notre objectif est de rendre les bonnes pratiques de sécurité informatique accessibles 
          à tous, de manière interactive et ludique.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Dans un monde de plus en plus connecté, il est essentiel de comprendre les risques 
          en ligne et de savoir comment se protéger. Nous offrons des outils pratiques pour 
          vous aider à développer ces compétences essentielles.
        </p>
      </Card>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <template #header>
            <h3 class="text-xl font-semibold">🎯 Nos Objectifs</h3>
          </template>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              <span>Former aux bonnes pratiques de cybersécurité</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              <span>Sensibiliser aux risques en ligne</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              <span>Proposer des outils pratiques et interactifs</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              <span>Rendre la sécurité accessible à tous</span>
            </li>
          </ul>
        </Card>

        <Card>
          <template #header>
            <h3 class="text-xl font-semibold">🛠️ Nos Outils</h3>
          </template>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>Page de sensibilisation interactive</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>Simulateur de phishing</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>Quiz de connaissances</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>Chatbot d'assistance</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card variant="bordered">
        <template #header>
          <h3 class="text-xl font-semibold">💡 Pourquoi la cybersécurité est importante ?</h3>
        </template>
        <div class="space-y-4 text-gray-700">
          <p>
            <strong>Protection des données personnelles :</strong> Vos informations personnelles 
            sont précieuses et doivent être protégées contre le vol et l'utilisation abusive.
          </p>
          <p>
            <strong>Prévention de la fraude :</strong> Les cybercriminels utilisent diverses 
            techniques pour voler de l'argent et des identités. La sensibilisation est votre 
            première ligne de défense.
          </p>
          <p>
            <strong>Sécurité professionnelle :</strong> Les compétences en cybersécurité sont 
            essentielles dans le monde professionnel moderne pour protéger les entreprises et 
            leurs clients.
          </p>
          <p>
            <strong>Culture numérique :</strong> Comprendre les risques en ligne fait partie 
            de la culture numérique moderne que chacun devrait posséder.
          </p>
        </div>
      </Card>

      <div class="text-center mt-8">
        <Button variant="primary" size="lg" @click="$router.push('/')">
          Retour à l'accueil
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '../components/ui/SectionTitle.vue';
import Card from '../components/ui/Card.vue';
import Button from '../components/ui/Button.vue';
</script>
