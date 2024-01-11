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

//traduire response avant de l'envoyer


const translationResponse = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Authorization': 'DeepL-Auth-Key votreClefAPI:fx',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: [response],
      target_lang: 'FR'
    })
  });


  const translationData = await translationResponse.json();
  const translatedResponse = translationData.translations[0].text;
  const language = translationData.translations[0].detected_source_language;

  console.log(translationData)

  document.getElementById('trad').innerHTML = `Langue détectée : ${language} Traduction : ${translatedResponse}`;
})();
//executée immédiatement : ()
//intérêt de tout mettre dans une fonction (ça fonctionnerai sans) : isole le code et donc les variables




