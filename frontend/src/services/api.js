// Service pour les appels API vers le backend Express
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Récupère l'adresse IP de l'utilisateur
 */
export const getUserIp = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/ip`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de l\'IP');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur getUserIp:', error);
    throw error;
  }
};

/**
 * Récupère les métadonnées de l'utilisateur
 */
export const getUserMetadata = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/metadata`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des métadonnées');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur getUserMetadata:', error);
    throw error;
  }
};

/**
 * Envoie une demande générique au backend
 */
export const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur apiRequest:', error);
    throw error;
  }
};
