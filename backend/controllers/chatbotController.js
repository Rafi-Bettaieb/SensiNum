exports.handleMessage = (req, res) => {
  const message = req.body.message?.toLowerCase() || "";

  let reply = "Je n’ai pas compris. Essaie de reformuler 🙂";

  if (message.includes("phishing")) reply = "Le phishing est une attaque...";
  if (message.includes("mot de passe")) reply = "Choisis un mot de passe long...";
  if (message.includes("2fa") || message.includes("double")) reply = "Active la double authentification !";

  res.json({ reply });
};
