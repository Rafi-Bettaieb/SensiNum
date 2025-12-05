import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../pages/Home.vue';
import Awareness from '../pages/Awareness.vue';
import PhishingSimulator from '../pages/PhishingSimulator.vue';
import Quiz from '../pages/Quiz.vue';
import QuizSelection from '../pages/QuizSelection.vue';
import Chatbot from '../pages/Chatbot.vue';
import About from '../pages/About.vue';
import Parcours from '../pages/Parcours.vue';
import Videos from '../pages/Videos.vue';
import EmailSimulation from '../pages/EmailSimulation.vue';
import PhishingQuiz from '../pages/PhishingQuiz.vue';
import OnlineShopping from '../pages/OnlineShopping.vue';
import PhoneScam from '../pages/PhoneScam.vue';
import FinalExam from '../pages/FinalExam.vue';

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
        path: '/quiz-selection', 
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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
