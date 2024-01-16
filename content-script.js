//Selection du mot/phrase qu'on veut traduire
function selection() {
  let select = window.getSelection().toString().trim();
  //selection grâce à des fonctions intégrées :
  //toString : en chaine de caractères; trim : retire les espaces au début et à la fin
  console.log(select)
  return select
}


chrome.runtime.onMessage.addListener(
  //Communication depuis popup pour demander l'info du mot sélectionné, écoute le message
  function (request, sender, sendResponse) {
    //request : qu'est-ce que tu attends ? message envoyé par popup
    //sender : de qui ? (jamais lu) ici : popup
    //sendResponse : qu'est ce que tu fais ?
    console.log(request)

    if (request.action === "declenche") {
      //Vérifie l'exactitude du message envoyé par popup pour déclencher la fonction
      let mot = selection()
      sendResponse(mot)
      //Envoie la réponse à popup
    }
  });


