var selectedLanguage = document.getElementById("langues").value;

chrome.storage.local.set({ "langues": selectedLanguage }, function() {
    console.log("Langue de traduction enregistrée : " + selectedLanguage);
  });

  function stockerLangue(langue) {
    chrome.storage.local.set({ langue: langue }, function() {
      console.log("Langue de traduction stockée avec succès : " + langue);
    });
  }
  
  // Exemple d'utilisation de la fonction pour stocker la langue
  stockerLangue("fr"); // Remplacez "fr" par la langue de votre choix