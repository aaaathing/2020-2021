var newPatternChild = document.createElement("rect")
newPatternChild.setAttribute("width","100%")
newPatternChild.setAttribute("height","100%")
newPatternChild.setAttribute("fill","transparent")
newPatternChild.setAttribute("class","backgroundForThisPattern")

var blocklyGridPattern = document.querySelector("[id^=blocklyGridPattern]")
if(blocklyGridPattern){
  blocklyGridPattern.innerHTML = newPatternChild.outerHTML + blocklyGridPattern.innerHTML
}