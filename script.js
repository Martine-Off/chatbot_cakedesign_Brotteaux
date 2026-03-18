console.log("Tentative d'envoi vers :", WEBHOOK_URL);
console.log("Données envoyées :", payloadFinal);

try {
    const response = await fetch(WEBHOOK_URL, { 
        method: 'POST', 
        mode: 'cors', // Ajoute ceci pour forcer le mode CORS
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadFinal)
    });
    // ... reste du code
} catch (e) {
    console.error("Le navigateur a bloqué la requête :", e);
}
