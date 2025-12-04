import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../pages/Home.vue';
import Awareness from '../pages/Awareness.vue';
import PhishingSimulator from '../pages/PhishingSimulator.vue';
import Quiz from '../pages/Quiz.vue';
import QuizSelection from '../pages/QuizSelection.vue';
import Chatbot from '../pages/Chatbot.vue';
import About from '../pages/About.vue';

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
      { path: '/quiz-selection', component: QuizSelection }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
