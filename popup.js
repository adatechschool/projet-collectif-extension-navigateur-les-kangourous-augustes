(async () => {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, { action: "declenche" });

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

  document.getElementById('lang').innerHTML = `Langage : ${language}`;
  document.getElementById('trad').innerHTML = `Traduction : ${translatedResponse}`;
})();



