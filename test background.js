function save_options() {
    let langue= document.getElementById("langue").value;
    localStorage.setItem("langue", langue);

    if (localStorage.getItem("langue") === null) {
        langue = "FR";
    } else {
        langue = localStorage.getItem("langue")
    }

    console.log("1")
    console.log(langue)
    return langue
}

save_options()


    document.getElementById("save").addEventListener("click", save_options);



// const langue = chrome.runtime.sendMessage({ message: "langue de traduction" });
        // communication background-options pour demander l'info de la langue de traduction
  



// chrome.browserAction.onClicked.addListener(function(tab) {

    // if (localStorage.getItem("langue") == null) {
    //     langue = "FR";
    // } else {
    //     langue = localStorage.getItem("langue")
    // }

    // chrome.runtime.onMessage.addListener(
    //     function (request, sender, sendResponse) {
    //       console.log(request)
      
    //       if (request.message === "quelle langue") {
    //         sendResponse(save_options())
    //       }
    //     });
        // communication background-popup pour envoyer l'info de la langue de traduction

// });


