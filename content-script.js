function selection() {
  let select = window.getSelection().toString().trim();
  //console.log(select)
  return select
}


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request)

    if (request.action === "declenche") {
      let mot = selection()
      sendResponse(mot)
    }
  });


