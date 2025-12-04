// Service pour le chatbot (peut être connecté à une API de chatbot ou IA)
const CHATBOT_API_URL = import.meta.env.VITE_CHATBOT_API_URL || 'http://localhost:3000/api/chatbot';

/**
 * Envoie un message au chatbot et récupère la réponse
 */
export const sendMessage = async (message) => {
  try {
    const response = await fetch(`${CHATBOT_API_URL}/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du message');
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur sendMessage:', error);
    // Retourner une réponse par défaut en cas d'erreur
    return {
      response: 'Désolé, je rencontre des difficultés techniques. Veuillez réessayer plus tard.',
      timestamp: new Date().toISOString()
    };
  }
};

/**
 * Récupère l'historique de conversation
 */
export const getChatHistory = async (sessionId) => {
  try {
    const response = await fetch(`${CHATBOT_API_URL}/history/${sessionId}`);
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de l\'historique');
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur getChatHistory:', error);
    return { messages: [] };
  }
};

/**
 * Crée une nouvelle session de chat
 */
export const createChatSession = async () => {
  try {
    const response = await fetch(`${CHATBOT_API_URL}/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création de la session');
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur createChatSession:', error);
    // Générer un ID de session local en cas d'erreur
    return {
      sessionId: `local-${Date.now()}`,
      timestamp: new Date().toISOString()
    };
  }
};
