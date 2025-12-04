<template>
  <div class="container mx-auto px-4 py-8">
    <SectionTitle 
      title="Assistant Cybersécurité" 
      subtitle="Posez vos questions sur la sécurité informatique"
      :level="1"
      align="center"
      class="mb-8"
    />

    <div class="max-w-4xl mx-auto">
      <Card variant="elevated">
        <div class="h-[600px]">
          <ChatWindow
            :messages="messages"
            :is-typing="isTyping"
            @send="sendMessage"
          />
        </div>
      </Card>

      <div class="mt-6 bg-blue-50 rounded-lg p-4">
        <h3 class="font-semibold text-blue-900 mb-2">Questions suggérées :</h3>
        <div class="flex flex-wrap gap-2">
          <Button
            v-for="suggestion in suggestions"
            :key="suggestion"
            variant="outline"
            size="sm"
            @click="sendMessage(suggestion)"
          >
            {{ suggestion }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitle from '../components/ui/SectionTitle.vue';
import Card from '../components/ui/Card.vue';
import Button from '../components/ui/Button.vue';
import ChatWindow from '../components/chatbot/ChatWindow.vue';

const messages = ref([
  {
    text: 'Bonjour ! Je suis votre assistant en cybersécurité. Comment puis-je vous aider aujourd\'hui ?',
    isUser: false,
    timestamp: new Date().toISOString()
  }
]);

const isTyping = ref(false);

const suggestions = ref([
  'Comment créer un mot de passe sécurisé ?',
  'Qu\'est-ce que le phishing ?',
  'Comment protéger mes données personnelles ?',
  'C\'est quoi l\'authentification à deux facteurs ?'
]);

const sendMessage = async (message) => {
  // Ajouter le message de l'utilisateur
  messages.value.push({
    text: message,
    isUser: true,
    timestamp: new Date().toISOString()
  });

  // Simuler une réponse (à connecter avec votre API backend)
  isTyping.value = true;

  setTimeout(() => {
    const response = getBotResponse(message);
    messages.value.push({
      text: response,
      isUser: false,
      timestamp: new Date().toISOString()
    });
    isTyping.value = false;
  }, 1500);
};

const getBotResponse = (message) => {
  const messageLower = message.toLowerCase();
  
  if (messageLower.includes('mot de passe')) {
    return 'Pour créer un mot de passe sécurisé :\n\n1. Utilisez au moins 12 caractères\n2. Mélangez majuscules, minuscules, chiffres et symboles\n3. Évitez les informations personnelles\n4. Utilisez un mot de passe différent pour chaque compte\n5. Utilisez un gestionnaire de mots de passe';
  }
  
  if (messageLower.includes('phishing')) {
    return 'Le phishing est une technique d\'escroquerie par email ou SMS visant à voler vos informations personnelles.\n\nSignes d\'alerte :\n- Adresse email suspecte\n- Fautes d\'orthographe\n- Demande urgente\n- Liens suspects\n- Demande d\'informations sensibles';
  }
  
  if (messageLower.includes('données') || messageLower.includes('personnel')) {
    return 'Pour protéger vos données personnelles :\n\n1. Utilisez des mots de passe forts\n2. Activez l\'authentification à deux facteurs\n3. Méfiez-vous du phishing\n4. Utilisez un VPN sur les réseaux publics\n5. Vérifiez les paramètres de confidentialité\n6. Mettez à jour vos logiciels régulièrement';
  }
  
  if (messageLower.includes('authentification') || messageLower.includes('2fa')) {
    return 'L\'authentification à deux facteurs (2FA) ajoute une couche de sécurité supplémentaire à vos comptes.\n\nElle nécessite deux éléments :\n1. Quelque chose que vous savez (mot de passe)\n2. Quelque chose que vous possédez (code SMS, application, clé physique)\n\nCela empêche les pirates d\'accéder à vos comptes même s\'ils ont votre mot de passe.';
  }
  
  return 'Je suis là pour répondre à vos questions sur la cybersécurité. N\'hésitez pas à me poser des questions sur les mots de passe, le phishing, la protection des données, etc.';
};
</script>
