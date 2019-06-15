chrome.browserAction.onClicked.addListener(function(activeTab){
  var curURL = activeTab.url;
  var el = document.createElement('textarea');
  document.body.appendChild(el);
  el.value=  curURL;
  el.select();
  document.execCommand('copy');
  chrome.tabs.create({ url: "http://downfbvideos.com"}, function (tab) {
	  chrome.tabs.executeScript(null,  {code: "document.getElementById('input').focus();document.execCommand('paste'); document.getElementById('dlb').click();"});
  });
});
