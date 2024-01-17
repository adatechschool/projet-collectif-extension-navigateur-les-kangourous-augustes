// Sauvegarder les options dans chrome.storage
const saveOptions = () => {
  const langue = document.getElementById('langues').value;
  const toggle = document.getElementById('toggle').checked;
  //Va chercher les infos (value de langues et checked de toggle) dans options.html
  console.log(toggle)
  
  chrome.storage.sync.set(
    //Enregistre l'info dans chrome.storage qu'on a choisi en sync pour harmoniser 
    //nos différents appareils
    //.set : envoyer
    { langueDeTraduction: langue, toggle },
    //envoie des 2 infos : langue et son
    //toggle : nom de la clé = nom de la variable, inutile de répéter
    () => {
      const status = document.getElementById('status');
      // Met à jour 'status' dans html pour que l'utilisateur sache que l'option est enregistrée
      status.textContent = 'Langue de traduction enregistrée';
      //S'affiche lors du clic sur le bouton Save
    }
  );
};
  
  // Réaffiche dans la liste le choix sélectionné et stocké dans chrome.storage
const restoreOptions = () => {
  chrome.storage.sync.get(
      //.get : récupère l'info dans chrome.storage
    { langueDeTraduction: 'FR', toggle: true },
      //langueDeTraduction : clé dans le stockage (chrome.storage)/ 'FR' est la valeur associée par défaut
      //toggle : true = checked en valuer par défaut
    (items) => {
      document.getElementById('langues').value = items.langueDeTraduction; 
        //récupère dans le tableau 'langues' dans html l'info et la transfère comme valeur de 
        //la clé langueDeTraduction dans le stockage
        // : modifie la valeur stockée.
      document.getElementById('toggle').checked = items.toggle;
        //récupère l'info true ou false du checked
    }
  );
};
    
document.addEventListener('DOMContentLoaded', restoreOptions);
    //Attends l'evenement : 'contenu(DOM) html chargé' et appelle restoreOptions
document.getElementById('save').addEventListener('click', saveOptions);
    //Appelle saveOptions lors du 'click' sur le bouton 'save'
    //Peut être remplacé par un onclick=fonction() dans le html
    
    //Peut être formulé : document.getElementById('langues').addEventListener('change', saveOptions) : 
    //changement sans avoir besoin du bouton
    
    //Enregistrement de l'état du toggle
document.getElementById('toggle').addEventListener('change', saveOptions);
    
    