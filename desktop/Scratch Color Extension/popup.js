var checkboxes = {
  dark:document.getElementById("darkCheckbox")
}

chrome.runtime.sendMessage({getSettings:true}, function(response) {
  checkboxes.dark.checked = response.darkMode;
});



checkboxes.dark.onchange = function(){
  chrome.runtime.sendMessage({darkMode:this.checked}, function(response) {
    
  });
}