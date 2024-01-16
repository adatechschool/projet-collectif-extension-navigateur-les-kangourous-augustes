//Tableau des langues de l'API : permet l'affichage de la langue de la sélection
//L'API envoie le code à 2 lettres, on passe par une fonction pour afficher la langue en entier

const tableauLangue = {
<<<<<<< HEAD
  BG: "Bulgare",
  DA: "Danois",
  CS: "Tchèque",
  DE: "Allemand",
  EL: "Grec",
  EN: "Anglais",
  ES: "Espagnol",
  ET: "Estonien",
  FI: "Finnois",
  FR: "Français",
  HU: "Hongrois",
  ID: "Indonesien",
  IT: "Italien",
  JA: "Japonais",
  KO: "Coréen",
  LT: "Lituanien",
  LV: "Letton",
  NB: "Norvégien",
  NL: "Néerlandais",
  PL: "Polonais",
  PT: "Portugais",
  RO: "Roumain",
  RU: "Russe",
  SK: "Slovaque",
  SL: "Slovène",
  SV: "Suèdois",
  TR: "Turc",
  UK: "Ukrainien",
  ZH: "Chinois",
};

function changeLangue(lettre) {
  let language = tableauLangue[lettre];
  console.log(language);
  return language;
=======
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
>>>>>>> 27ccb5f (enregistrement de la langue dans les options, OK. pas encore retransmis pour la traduction. +commentaires partout.)
}


//Appel à l'API

(async () => {
<<<<<<< HEAD
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, {
    action: "declenche",
  });

  console.log(response);
  //traduire response avant de l'envoyer

  //traduire response avant de l'envoyer

  const translationResponse = await fetch(
    "https://api-free.deepl.com/v2/translate",
    {
      method: "POST",
      headers: {
        Authorization: "DeepL-Auth-Key votreClefApi:fx",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: [response],
        target_lang: "FR",
      }),
    }
  );
=======
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  //Verifier l'onglet actif de chrome
  const response = await chrome.tabs.sendMessage(tab.id, { action: "declenche" });
  //communication popup -> content-script pour demander l'info du mot sélectionné
  //message précis
    
  console.log(response);
  
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
      target_lang: 'FR'
    })
  });
>>>>>>> 27ccb5f (enregistrement de la langue dans les options, OK. pas encore retransmis pour la traduction. +commentaires partout.)

  const translationData = await translationResponse.json();
  //traduction en format json, non exploitable en l'état
  const translatedResponse = translationData.translations[0].text;
  //extrait du json, mis en tableau à plusieurs entrées : text = la traduction
  const codeLanguage = translationData.translations[0].detected_source_language;
  //detected_source_language = langue de la sélection

  console.log(codeLanguage);
  console.log(translationData);

<<<<<<< HEAD
  let language = changeLangue(codeLanguage);
  document.getElementById("lang").innerHTML = `Langage : ${language}`;
  document.getElementById(
    "trad"
  ).innerHTML = `Traduction : ${translatedResponse}`;
})();

let son = new Audio("cliquetis.flac");
son.play();
=======
  let language = changeLangue(codeLanguage)
  //Transformation de la langue de la sélection
  document.getElementById('lang').innerHTML = `Langage : ${language}`;
  //Affichage de la langue de la sélection
  document.getElementById('trad').innerHTML = `Traduction : ${translatedResponse}`;
  //Affichage de la traduction
})();

//Son de l'extension, joué au clic
let son = new Audio("cliquetis.flac")
son.play()
>>>>>>> 27ccb5f (enregistrement de la langue dans les options, OK. pas encore retransmis pour la traduction. +commentaires partout.)
