var blues=[1,2,3,4,5,6,7,8,9,0,"function","for","var"];
var purples=["return"];
var grays=["&lt;","&gt;"]

var editor=document.getElementById("editor");
var overlay=document.getElementById("overlay");


editor.addEventListener("input",color);
color();
function color(){
  var txt=editor.innerHTML;
  for(var i=0;i<blues.length;i++){
    var regex=new RegExp(blues[i], "gi")
    txt=txt.replace(regex, "<span style='color:blue;'>"+blues[i]+"</span>")
  }

  for(var i=0;i<purples.length;i++){
    var regex=new RegExp(purples[i], "gi")
    txt=txt.replace(regex, "<span style='color:#a0a;'>"+purples[i]+"</span>")
  }

  for(var i=0;i<grays.length;i++){
    var regex=new RegExp(grays[i], "gi")
    txt=txt.replace(regex, "<span style='color:gray;'>"+grays[i]+"</span>")
  }

  var quoteToggle=false;
  for(var i=0;i<txt.length;i++){
    if(txt[i]==='"'){
      quoteToggle=!quoteToggle;

      if(quoteToggle){
        var spart="<span style='color:green;'>";
        txt=setCharAt(txt,i,spart+txt[i]);
        i+=(spart.length);
      }else{
        var epart="</span>"
        txt=setCharAt(txt,i,txt[i]+epart);
        i+=(epart.length);
      }
    }
  }



  overlay.innerHTML=txt;
}
function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index+1);
}