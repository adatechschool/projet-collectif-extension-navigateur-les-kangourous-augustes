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
  "ZH" : "Chinois",

}

function changeLangue(lettre) {
  let language = tableauLangue[lettre]
  console.log(language)
  return language
}

(async () => {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, { action: "declenche" });
  const langue = await chrome.runtime.sendMessage({ message: "quelle langue" });
      // communication popup-background pour demander l'info de la langue de traduction
  
  console.log(response);
  //traduire response avant de l'envoyer

  
const translationResponse = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Authorization': 'DeepL-Auth-Key b36b1d4d-3421-06bc-ac98-82b672da6d3c:fx',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: [response],
      target_lang: [langue]
    })
  });

  const translationData = await translationResponse.json();
  const translatedResponse = translationData.translations[0].text;
  const codeLanguage = translationData.translations[0].detected_source_language;

  console.log(codeLanguage)
  console.log(translationData)

  let language = changeLangue(codeLanguage)
  document.getElementById('lang').innerHTML = `Langage : ${language}`;
  document.getElementById('trad').innerHTML = `Traduction : ${translatedResponse}`;
})();

let son = new Audio("cliquetis.flac")
son.play()
