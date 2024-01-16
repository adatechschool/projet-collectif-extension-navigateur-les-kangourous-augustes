// Sauvegarder les options dans chrome.storage
const saveOptions = () => {
    const langue = document.getElementById('langues').value;
    //Va chercher l'info dans options.html
  
    chrome.storage.sync.set(
      //Enregistre l'info dans chrome.storage qu'on a choisi en sync pour harmoniser 
      //nos différents appareils
      //.set : envoyer
      { langueDeTraduction: langue },
      () => {
        // Met à jour 'status' dans html pour que l'utilisateur sache que l'option est enregistrée
        const status = document.getElementById('status');
        status.textContent = 'Langue de traduction enregistrée';
        //S'affiche lors du clic sur le bouton Save
      }
    );
  };
  
  // Réaffiche dans la liste le choix sélectionné et stocké dans chrome.storage
  const restoreOptions = () => {
    chrome.storage.sync.get(
      //.get : récupère l'info dans chrome.storage
      { langueDeTraduction: 'FR' },
      //langueDeTraduction : clé dans le stockage (chrome.storage)/ 'FR' est l'objet (ou valeur) associé
      (items) => {
        document.getElementById('langues').value = items.langueDeTraduction; 
        //récupère dans le tableau 'langues' dans html l'info et la transfère comme valeur de 
        //la clé langueDeTraduction dans le stockage
        // : modifie la valeur stockée.
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  //Analyse le DOM de la page html et appelle restoreOptions
  document.getElementById('save').addEventListener('click', saveOptions);
  //Appelle saveOptions lors du 'click' sur le bouton 'save'
  