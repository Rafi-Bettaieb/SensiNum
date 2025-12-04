<template>
  <div class="container mx-auto px-4 py-8">
    <SectionTitle 
      title="Page de Sensibilisation" 
      subtitle="Découvrez les informations que vous exposez en ligne"
      :level="1"
      align="center"
      class="mb-8"
    />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <IpDisplay :ip-address="ipAddress" :ip-type="ipType" />
      <MetadataCard 
        title="Informations de connexion"
        :metadata="metadata"
      />
    </div>

    <RiskBanner
      title="Attention à votre empreinte numérique"
      message="Ces informations peuvent être utilisées pour vous identifier. Soyez prudent avec les sites que vous visitez et les informations que vous partagez."
      level="warning"
      class="mb-8"
    />

    <Card>
      <template #header>
        <h3 class="text-xl font-semibold">Conseils de sécurité</h3>
      </template>
      <ul class="space-y-3">
        <li class="flex items-start">
          <span class="text-green-500 mr-2">✓</span>
          <span>Utilisez un VPN pour masquer votre adresse IP</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 mr-2">✓</span>
          <span>Désactivez la géolocalisation quand elle n'est pas nécessaire</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 mr-2">✓</span>
          <span>Utilisez des navigateurs respectueux de la vie privée</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 mr-2">✓</span>
          <span>Vérifiez les permissions des applications</span>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SectionTitle from '../components/ui/SectionTitle.vue';
import Card from '../components/ui/Card.vue';
import IpDisplay from '../components/awareness/IpDisplay.vue';
import MetadataCard from '../components/awareness/MetadataCard.vue';
import RiskBanner from '../components/awareness/RiskBanner.vue';

const ipAddress = ref('Chargement...');
const ipType = ref('IPv4');
const metadata = ref({
  navigateur: 'Chargement...',
  langue: 'Chargement...',
  timezone: 'Chargement...'
});

onMounted(async () => {
  // Récupération des métadonnées du navigateur
  metadata.value = {
    navigateur: navigator.userAgent.split(' ').slice(-2).join(' '),
    langue: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    plateforme: navigator.platform
  };

  // Récupération de l'IP (à connecter avec votre API backend)
  try {
    const response = await fetch('http://localhost:3000/api/ip');
    const data = await response.json();
    ipAddress.value = data.ip || 'Non disponible';
  } catch (error) {
    ipAddress.value = 'Erreur de récupération';
  }
});
</script>
