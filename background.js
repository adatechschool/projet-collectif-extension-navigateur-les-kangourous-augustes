chrome.browserAction.onClicked.addListener(function(tab) {

    if (localStorage.getItem("langue") == null) {
        const langue = "FR";
    } else {
        let langue = localStorage.getItem("langue")
    }

chrome.tabs.executeScript({
    


});

});