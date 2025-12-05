const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

let llmInstance = null;

const CYBER_PROMPT = `
Tu es un assistant spécialisé UNIQUEMENT en cybersécurité pour débutants.
Tu DOIS répondre uniquement en FRANÇAIS.
Réponds uniquement aux questions sur : mots de passe, phishing, 2FA, sécurité mobile, cookies, données personnelles, Wi-Fi public, bonnes pratiques numériques.
Format strict à respecter :
Réponse : 👉 [explication simple en français]
Conseil : 💡 [astuce pratique en français]
Si la question n'est pas en rapport avec la cybersécurité, répond : "Je peux répondre uniquement aux questions de cybersécurité."
`;

// Initialisation unique de Gemini
async function initGemini() {
  if (llmInstance) return llmInstance;

  const apiKey = process.env.GOOGLE_API_KEY;

  llmInstance = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    apiKey,
    maxOutputTokens: 150,
    temperature: 0,
    systemInstruction: CYBER_PROMPT
  });

  return llmInstance;
}

// Vérification simple si la question est cybersécurité
function isCyberQuestion(message) {
  const text = message.toLowerCase();
  // mots principaux pour cybersécurité
  return /mot de passe|phishing|2fa|sécurité|cookies|données|wifi|cyber|pratiques/i.test(text);
}

async function chatWithGemini(req, res) {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message requis" });

    // Hors-scope détecté → réponse immédiate
    if (!isCyberQuestion(message)) {
      return res.json({
        success: true,
        response: "Je peux répondre uniquement aux questions de cybersécurité. Clique pour en savoir plus."
      });
    }

    // Question valide → appel Gemini
    const llm = await initGemini();
    const result = await llm.invoke(message);

    let text = "";
    if (Array.isArray(result)) text = result.map(r => r.content).join(" ");
    else if (result && result.content) text = result.content;
    else text = JSON.stringify(result);

    return res.json({ success: true, response: text });

  } catch (error) {
    console.error("Erreur Gemini :", error.message);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}

module.exports = { chatWithGemini };
