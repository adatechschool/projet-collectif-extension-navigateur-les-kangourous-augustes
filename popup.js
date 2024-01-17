//Son de l'extension
let son = new Audio("cliquetis.flac")

//Tableau des langues de l'API : permet l'affichage de la langue de la sélection
//L'API envoie le code à 2 lettres, on passe par une fonction pour afficher la langue en entier
const tableauLangue = {
  "BG" : "Bulgare",
  "DA" : "Danois",
  "CS" : "Tchèque",
  "DE" : "Allemand",
  "EL" : "Grec",
  "EN" : "Anglais",
  "ES" : "Espagnol",
  "ET" : "Estonien",
  "FI" : "Finnois",
  "FR" : "Français",
  "HU" : "Hongrois",
  "ID" : "Indonesien",
  "IT" : "Italien",
  "JA" : "Japonais",
  "KO" : "Coréen",
  "LT" : "Lituanien",
  "LV" : "Letton",
  "NB" : "Norvégien",
  "NL" : "Néerlandais",
  "PL" : "Polonais",
  "PT" : "Portugais",
  "RO" : "Roumain",
  "RU" : "Russe",
  "SK" : "Slovaque",
  "SL" : "Slovène",
  "SV" : "Suèdois",
  "TR" : "Turc",
  "UK" : "Ukrainien",
  "ZH" : "Chinois"
}

function changeLangue(lettre) {
  let language = tableauLangue[lettre]
  //lettre : colonne de gauche, info de l'API
  //language : colonne de droite
  console.log(language)
  return language
}


//Appel à l'API
(async () => {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  //Verifie l'onglet actif de chrome
  
  const response = await chrome.tabs.sendMessage(tab.id, { action: "declenche" });
  //communication popup -> content-script pour demander l'info du mot sélectionné
  //message précis
  console.log(response);

  chrome.storage.sync.get({langueDeTraduction: 'FR'}, async (items) => {
    const langueCible = items.langueDeTraduction;
  //Récupération de la valeur associée à la clé langueDeTraduction, stockée dans chrome.storage
  //grâce à la fonction restoreOptions dans options.js
  //Valeur par défaut : FR (français) 
  console.log(langueCible);
  
  
    //API
    const translationResponse = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': 'DeepL-Auth-Key b36b1d4d-3421-06bc-ac98-82b672da6d3c:fx',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: [response],
        //response = envoyée par content-script
        target_lang: langueCible
        //langueCible = envoyée par options
      })
    });

    const translationData = await translationResponse.json();
    //réponse de l'API en format json, non exploitable en l'état
    const translatedResponse = translationData.translations[0].text;
    //extrait du json, mis en tableau à plusieurs entrées : text = la traduction
    const codeLanguage = translationData.translations[0].detected_source_language;
    //detected_source_language = langue de la sélection

    console.log(codeLanguage)
    console.log(translationData)

    let language = changeLangue(codeLanguage)
    //Transformation de la langue de la sélection
<<<<<<< Updated upstream
    document.getElementById('lang').innerHTML = `Langue : ${language}`;
=======
    document.getElementById('lang').innerHTML = `<span class = "bold-text">Langage :</span> ${language}`;
>>>>>>> Stashed changes
    //Affichage de la langue de la sélection
    document.getElementById('trad').innerHTML = `<span class = "bold-text">Traduction :</span> ${translatedResponse}`;
    //Affichage de la traduction
  })

  //Son de l'extension, joué au clic
  chrome.storage.sync.get({toggle: true}, async (items) => {
    //Récupération de l'info 'checked' du toggle, envoyée par options
    if (items.toggle) {   
      son.play()
    }
  })
})();
//executée immédiatement : ()
//intérêt de tout mettre dans une fonction (ça fonctionnerai sans) : isole le code et donc les variables



