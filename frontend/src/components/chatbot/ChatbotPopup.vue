<script setup>
import { ref, watch, onMounted, nextTick } from "vue";
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";
import { marked } from "marked";
import { getCookie, setCookie } from "./cookies";

// Props
const props = defineProps({
  isOpen: Boolean
});

// Emits
const emit = defineEmits(["close"]);

// State
const messages = ref([]);
const input = ref("");
const showEmojiPicker = ref(false);

const chatBody = ref(null);
const inputRef = ref(null);

// ---------------- SESSION ----------------
onMounted(async () => {
  let sessionId = getCookie("session_id");
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    setCookie("session_id", sessionId, 7);
  }
});

// ---------------- BODY CLASS ----------------
watch(
  () => props.isOpen,
  (v) => {
    document.body.classList.toggle("show-chatbot", v);
    if(v) scrollBottom();
  }
);

// ---------------- SCROLL ----------------
const scrollBottom = () => {
  nextTick(() => {
    if (chatBody.value)
      chatBody.value.scrollTop = chatBody.value.scrollHeight;
  });
};

// ---------------- SEND ----------------
const sendMessage = async () => {
  const text = input.value.trim();
  if (!text) return;

  const sessionId = getCookie("session_id");

  // 1. AFFICHER MESSAGE UTILISATEUR
  messages.value.push({ text, sender: "user" });
  input.value = "";
  showEmojiPicker.value = false;
  scrollBottom();

  // 2. AFFICHER "THINKING..." (Les trois petits points)
  // On ajoute un message spécial avec la propriété { thinking: true }
  messages.value.push({ sender: "bot", thinking: true });
  scrollBottom();

  try {
    // Petit délai esthétique (0.5s) pour voir l'animation même si le serveur est rapide
    await new Promise(r => setTimeout(r, 500));

    // 3. APPEL AU SERVEUR (BACKEND NODE.JS)
    const res = await fetch("http://localhost:3000/chatbot/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Important: On envoie "message" car ton backend fait: const { message } = req.body
      body: JSON.stringify({ message: text, session_id: sessionId })
    });

    const data = await res.json();
    
    // 4. TRAITEMENT DE LA RÉPONSE
    let botResponse = "";
    
    // Ton backend renvoie { success: true, response: "..." }
    if (data.response) {
        botResponse = data.response;
    } else if (data.error) {
        botResponse = "⚠️ Erreur : " + data.error;
    } else {
        botResponse = JSON.stringify(data, null, 2);
    }

    // 5. REMPLACEMENT : On retire "thinking" ET on ajoute la réponse finale
    messages.value = [
      ...messages.value.filter((m) => !m.thinking), // On garde tout sauf le thinking
      { text: botResponse, sender: "bot" }          // On ajoute la réponse
    ];

  } catch (err) {
    console.error(err);
    // En cas d'erreur, on retire aussi le thinking
    messages.value = [
      ...messages.value.filter((m) => !m.thinking),
      { text: "⚠️ Erreur de connexion au serveur.", sender: "bot" }
    ];
  }

  scrollBottom();
};

// ENTER key
const handleKey = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
};

// Emoji
const addEmoji = (emoji) => {
  input.value += emoji.i; 
  inputRef.value.focus();
};

// ---------------- MARKDOWN RENDERING ----------------
const renderMD = (txt) => {
  return marked.parse(txt || "");
};
</script>

<template>
  <div class="chatbot-popup" v-if="isOpen">
    <div class="chat-header">
      <div class="header-info">
        <span class="material-symbols-rounded chat-logo">smart_toy</span>
        <h2 class="logo-text">Assistant SensiNum</h2>
      </div>
      <button @click="$emit('close')" id="close-chatbot" class="material-symbols-rounded">
        keyboard_arrow_down
      </button>
    </div>

    <div class="chat-body" ref="chatBody">
      <div v-if="messages.length === 0" class="message bot-message">
        <span class="material-symbols-rounded bot-avatar">smart_toy</span>
        <div class="message-text">
            Bonjour ! Je suis l'assistant cybersécurité. 🛡️<br>
            Posez-moi vos questions.
        </div>
      </div>

      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['message', msg.sender + '-message']"
      >
        <span
          v-if="msg.sender === 'bot'"
          class="material-symbols-rounded bot-avatar"
        >
          smart_toy
        </span>

        <div v-if="msg.thinking" class="thinking-indicator">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>

        <div v-else class="message-text" v-html="renderMD(msg.text)"></div>
      </div>
    </div>

    <div class="chat-footer">
      <div class="chat-form">
        <textarea
          ref="inputRef"
          v-model="input"
          class="message-input"
          placeholder="Votre message..."
          @keydown="handleKey"
          rows="1"
        ></textarea>

        <div class="chat-controls">
          <button
            type="button"
            class="material-symbols-rounded"
            @click="showEmojiPicker = !showEmojiPicker"
          >
            sentiment_satisfied
          </button>
          
          <button
            type="button"
            id="send-message"
            class="material-symbols-rounded"
            @click="sendMessage"
          >
            arrow_upward
          </button>
        </div>
      </div>

      <div class="emoji-picker-container" v-if="showEmojiPicker">
        <EmojiPicker @select="addEmoji" />
      </div>
    </div>
  </div>
</template>

<style src="./style.css"></style>