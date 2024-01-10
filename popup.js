(async () => {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, { action: "declenche" });

  console.log(response);

  document.getElementById('trad').innerHTML = response;
})();


