<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <SectionTitle 
        title="Bienvenue sur SensiNum" 
        subtitle="Votre plateforme de sensibilisation à la cybersécurité"
        :level="1"
        align="center"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <Card 
        v-for="feature in features" 
        :key="feature.title"
        variant="elevated"
        class="hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        @click="navigateTo(feature.path)"
      >
        <template #header>
          <div class="flex items-center space-x-3">
            <div class="text-3xl">{{ feature.icon }}</div>
            <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
          </div>
        </template>
        <p class="text-gray-600">{{ feature.description }}</p>
        <template #footer>
          <Button variant="outline" class="w-full">
            Découvrir →
          </Button>
        </template>
      </Card>
    </div>

    <div class="bg-blue-50 rounded-lg p-8 text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">
        Protégez-vous contre les menaces en ligne
      </h2>
      <p class="text-gray-700 mb-6">
        Apprenez les bonnes pratiques de sécurité informatique de manière interactive et ludique.
      </p>
      <Button variant="primary" size="lg" @click="navigateTo('/awareness')">
        Commencer maintenant
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SectionTitle from '../components/ui/SectionTitle.vue';
import Card from '../components/ui/Card.vue';
import Button from '../components/ui/Button.vue';

const router = useRouter();

const features = ref([
  {
    icon: '🛡️',
    title: 'Sensibilisation',
    description: 'Découvrez les informations que vous exposez en ligne et comment vous protéger.',
    path: '/awareness'
  },
  {
    icon: '🎣',
    title: 'Simulation Phishing',
    description: 'Testez votre capacité à identifier les emails frauduleux.',
    path: '/phishing'
  },
  {
    icon: '📝',
    title: 'Quiz',
    description: 'Évaluez vos connaissances en cybersécurité.',
    path: '/quiz'
  },
  {
    icon: '💬',
    title: 'Chatbot',
    description: 'Posez vos questions sur la sécurité informatique.',
    path: '/chatbot'
  },
  {
    icon: 'ℹ️',
    title: 'À propos',
    description: 'En savoir plus sur notre mission et notre plateforme.',
    path: '/about'
  }
]);

const navigateTo = (path) => {
  router.push(path);
};
</script>
