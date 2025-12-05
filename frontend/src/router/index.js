import { createRouter, createWebHistory } from 'vue-router';

// Imports des layouts
// Vérifie que ce fichier existe bien dans src/layouts/
// Sinon, change pour un composant existant ou supprime la ligne si inutile
import DefaultLayout from '../layouts/DefaultLayout.vue'; 

// Imports des pages (Uniquement celles qui existent vraiment dans ton dossier src/pages)
import Home from '../pages/Home.vue';
import Awareness from '../pages/Awareness.vue';
import PhishingSimulator from '../pages/PhishingSimulator.vue';
import Quiz from '../pages/Quiz.vue';
import QuizSelection from '../pages/QuizSelection.vue';
import Chatbot from '../pages/Chatbot.vue';
import About from '../pages/About.vue';
import VideoDemos from '../pages/VideoDemos.vue';
import EmailSimulation from '../pages/EmailSimulation.vue';
import PhishingQuiz from '../pages/PhishingQuiz.vue';
import OnlineShopping from '../pages/OnlineShopping.vue';
import PhoneScam from '../pages/PhoneScam.vue';
import FinalExam from '../pages/FinalExam.vue';
import QuizMedium from '../pages/QuizMedium.vue';
import EmailSimulationMedium from '../pages/EmailSimulationMedium.vue';
import PhishingQuizMedium from '../pages/PhishingQuizMedium.vue';
import PhoneScamMedium from '../pages/PhoneScamMedium.vue';
import OnlineShoppingMedium from '../pages/OnlineShoppingMedium.vue';
import FinalExamMedium from '../pages/FinalExamMedium.vue';

const routes = [
  {
    path: '/',
    // Si DefaultLayout n'existe pas, retire "component: DefaultLayout," 
    // et retire les "children: [...]" pour mettre les routes à plat.
    // Mais supposons qu'il existe pour l'instant.
    component: DefaultLayout, 
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'awareness',
        name: 'Awareness',
        component: Awareness
      },
      {
        path: 'phishing',
        name: 'PhishingSimulator',
        component: PhishingSimulator
      },
      {
        path: 'quiz',
        name: 'Quiz',
        component: Quiz
      },
      {
        path: 'chatbot',
        name: 'Chatbot',
        component: Chatbot
      },
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'demos',
        name: 'Demos',
        component: VideoDemos
      },
      {
        path: 'quiz-selection',
        name: 'QuizSelection',
        component: QuizSelection
      },
      {
        path: 'email-simulation',
        name: 'EmailSimulation',
        component: EmailSimulation
      },
      {
        path: 'phishing-quiz',
        name: 'PhishingQuiz',
        component: PhishingQuiz
      },
      {
        path: 'online-shopping',
        name: 'OnlineShopping',
        component: OnlineShopping
      },
      {
        path: 'phone-scam',
        name: 'PhoneScam',
        component: PhoneScam
      },
      {
        path: 'final-exam',
        name: 'FinalExam',
        component: FinalExam
      },
      {
        path: 'quiz-medium',
        name: 'QuizMedium',
        component: QuizMedium
      },
      {
        path: 'email-simulation-medium',
        name: 'EmailSimulationMedium',
        component: EmailSimulationMedium
      },
      {
        path: 'phishing-quiz-medium',
        name: 'PhishingQuizMedium',
        component: PhishingQuizMedium
      },
      {
        path: 'phone-scam-medium',
        name: 'PhoneScamMedium',
        component: PhoneScamMedium
      },
      {
        path: 'online-shopping-medium',
        name: 'OnlineShoppingMedium',
        component: OnlineShoppingMedium
      },
      {
        path: 'final-exam-medium',
        name: 'FinalExamMedium',
        component: FinalExamMedium
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;