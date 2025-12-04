/**
 * Formate une date au format français
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };

  return new Date(date).toLocaleDateString('fr-FR', defaultOptions);
};

/**
 * Formate une heure au format français
 */
export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Formate un nombre en pourcentage
 */
export const formatPercentage = (value, total) => {
  if (total === 0) return '0%';
  const percentage = (value / total) * 100;
  return `${Math.round(percentage)}%`;
};

/**
 * Tronque un texte à une longueur donnée
 */
export const truncate = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Capitalise la première lettre d'une chaîne
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Génère un ID unique
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Valide une adresse email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Vérifie la force d'un mot de passe
 */
export const checkPasswordStrength = (password) => {
  const strength = {
    score: 0,
    feedback: []
  };

  if (password.length >= 8) strength.score++;
  if (password.length >= 12) strength.score++;
  if (/[a-z]/.test(password)) strength.score++;
  if (/[A-Z]/.test(password)) strength.score++;
  if (/[0-9]/.test(password)) strength.score++;
  if (/[^a-zA-Z0-9]/.test(password)) strength.score++;

  if (password.length < 8) strength.feedback.push('Au moins 8 caractères');
  if (!/[a-z]/.test(password)) strength.feedback.push('Une lettre minuscule');
  if (!/[A-Z]/.test(password)) strength.feedback.push('Une lettre majuscule');
  if (!/[0-9]/.test(password)) strength.feedback.push('Un chiffre');
  if (!/[^a-zA-Z0-9]/.test(password)) strength.feedback.push('Un caractère spécial');

  return {
    score: strength.score,
    level: strength.score < 3 ? 'faible' : strength.score < 5 ? 'moyen' : 'fort',
    feedback: strength.feedback
  };
};

/**
 * Debounce une fonction
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
