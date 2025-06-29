var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString)



var inp = urlParams.get("url") || "";
var res = "";
for(var i=0; i<inp.length; i+=2){
  var n = inp[i] + inp[i+1];
  n = parseInt(n)
  res += String.fromCharCode(n+31)
}

document.getElementById("demo").innerHTML = res;


var noBlock = document.getElementById("noBlock");
noBlock.style.color = "blue"; noBlock.style.cursor = "pointer"
noBlock.onclick = () => window.location.replace("https://" + res)