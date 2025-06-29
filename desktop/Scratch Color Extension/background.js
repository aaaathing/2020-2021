var settings={
  darkMode:false
};

function makeAllTabsMode(mode){
  chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(window){
      window.tabs.forEach(function(tab){
        if(tab.url.indexOf("https://scratch.mit.edu") === 0){
          if(mode){
            chrome.tabs.insertCSS(tab.id, {file:"darkMode.css"})
          }else{
            chrome.tabs.removeCSS(tab.id, {file:"darkMode.css"})
          }
        }
      });
    });
  });
}
function colorThisTab(){
  if(settings.darkMode){
    chrome.tabs.insertCSS(null, {file:"darkMode.css"})
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(!sender.id === "idnnenmeakigpaelopjhdmbnjenmniee")return;
    if (request.darkMode === true){
      settings.darkMode=true;
      makeAllTabsMode(true)
    }else if (request.darkMode === false){
      settings.darkMode=false;
      makeAllTabsMode(false)
    }
    
    if(request.colorCurrentTab){
      colorThisTab();
    }

    if(request.getSettings){
      sendResponse(settings);
      return;
    }
    
    sendResponse({farewell: "goodbye"});
  }
);