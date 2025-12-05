import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '../layouts/DefaultLayout.vue';

// Pages principales
import Home from '../pages/Home.vue';
import Awareness from '../pages/Awareness.vue';
import PhishingSimulator from '../pages/PhishingSimulator.vue';
import Quiz from '../pages/Quiz.vue';
import Chatbot from '../pages/Chatbot.vue';
import About from '../pages/About.vue';

// Autres pages
import VideoDemos from '../pages/VideoDemos.vue';
import QuizSelection from '../pages/QuizSelection.vue';
import EmailSimulation from '../pages/EmailSimulation.vue';
import PhishingQuiz from '../pages/PhishingQuiz.vue';
import OnlineShopping from '../pages/OnlineShopping.vue';
import PhoneScam from '../pages/PhoneScam.vue';
import FinalExam from '../pages/FinalExam.vue';
import  MDPRobuste from '../pages/QuizMotsDePasseRobustes.vue';
import QuizMedium from '../pages/QuizMedium.vue';
import EmailSimulationMedium from '../pages/EmailSimulationMedium.vue';
import PhishingQuizMedium from '../pages/PhishingQuizMedium.vue';
import PhoneScamMedium from '../pages/PhoneScamMedium.vue';
import OnlineShoppingMedium from '../pages/OnlineShoppingMedium.vue';
import FinalExamMedium from '../pages/FinalExamMedium.vue';
import CookieTrap from '../pages/CookieTrap.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'parcours',
        name: 'Parcours',
        component: () => import('../pages/Parcours.vue')
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
        path: '/cours/1',
        component: () => import('../pages/cours/Cours1.vue')
      },
      {
        path: '/cours/2',
        component: () => import('../pages/cours/Cours2.vue')
      },
      {
        path: '/cours/3',
        component: () => import('../pages/cours/Cours3.vue')
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
        path: '/quiz-passwords-robustes',
        name: 'QuizMotsDePasseRobustes',
        component: MDPRobuste
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
      path: '/cookie-trap',
      name: 'CookieTrap',
      component: CookieTrap
    }
      
      }

      // Accueil
      { path: '', name: 'Home', component: Home },

      // Parcours / Cours
      { path: 'parcours', name: 'Parcours', component: () => import('../pages/Parcours.vue') },
      { path: 'cours/1', component: () => import('../pages/cours/Cours1.vue') },
      { path: 'cours/2', component: () => import('../pages/cours/Cours2.vue') },
      { path: 'cours/3', component: () => import('../pages/cours/Cours3.vue') },

      // Pages principales
      { path: 'awareness', name: 'Awareness', component: Awareness },
      { path: 'phishing', name: 'PhishingSimulator', component: PhishingSimulator },
      { path: 'quiz', name: 'Quiz', component: Quiz },
      { path: 'chatbot', name: 'Chatbot', component: Chatbot },
      { path: 'about', name: 'About', component: About },

      // Quiz avancés
      { path: 'quiz-selection', name: 'QuizSelection', component: QuizSelection },
      { path: 'email-simulation', name: 'EmailSimulation', component: EmailSimulation },
      { path: 'phishing-quiz', name: 'PhishingQuiz', component: PhishingQuiz },
      { path: 'online-shopping', name: 'OnlineShopping', component: OnlineShopping },
      { path: 'phone-scam', name: 'PhoneScam', component: PhoneScam },
      { path: 'final-exam', name: 'FinalExam', component: FinalExam },

      // Démos vidéo
      { path: 'demos', name: 'Demos', component: VideoDemos },
    ]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
