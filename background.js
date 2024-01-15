function stockerLangue(langue) {
    chrome.storage.local.set({ langue: langue }, function() {
      console.log("Langue de traduction stockée avec succès : " + langue);
    });
  }
  
  // Exemple d'utilisation de la fonction pour stocker la langue
  stockerLangue("fr"); // Remplacez "fr" par la langue de votre choix

chrome.storage.local.get("langues", function(result) {
    var selectedLanguage = result.langues;
    console.log("Langue de traduction récupérée : " + selectedLanguage);
  
    // Utiliser la langue de traduction dans votre appel à l'API de traduction
    // ...
  });