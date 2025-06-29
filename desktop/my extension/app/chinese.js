window.onload=function(){
  var utterSpeech = new SpeechSynthesisUtterance();
  utterSpeech.voice = speechSynthesis.getVoices()[12];
  utterSpeech.lang="zh"
  
  var tit = document.getElementById("tit");
  var txt = document.getElementById("text");
  
  var storySelect=document.getElementById("storySelect");
  for(var i = 0; i<storys.length; i++){
    var story = storys[i];
    var option = document.createElement("option");
    option.innerHTML=story.name;
    option.value = i;
    storySelect.appendChild(option);
  }
  var story;
  storySelect.onchange=function(){
    story = storys[storySelect.value];
    
    tit.innerHTML=""; txt.innerHTML="";

    //title
    for(var tI=0; tI < story.name.length; tI++){
      var cv = story.name[tI];
      var c = document.createElement("c");
      c.innerHTML=cv;
      tit.appendChild(c);
    }

    tit.innerHTML += "<c></c>"

    //story
    for(var sI=0; sI < story.content.length; sI++){
      var cv = story.content[sI];
      if(cv === "\n"){
        var br = document.createElement("br");
        txt.appendChild(br);
      }else{
        var c = document.createElement("c");
        c.innerHTML=cv;
        txt.appendChild(c);
      }
    }
  }
  storySelect.onchange();
  
  var btn=document.getElementById("strtBtn");
  var cTimeout;

  btn.onclick=function(){
    var chars=document.getElementsByTagName("c");
    var charN=0;
    for(charN=0; charN<chars.length; charN++){
      chars[charN].style.color="gray";
    }
    
    utterSpeech.text = story.name +" "+ story.content.replace("\n","");
    utterSpeech.lang = story.lang
    utterSpeech.rate = 0.5;
    utterSpeech.onboundary = function(e){
      readChar(e)
    }
    speechSynthesis.speak(utterSpeech);

    var lastCharIndex=0;
    var readChar=function(e){
      charN = e.charIndex;
      if(chars[charN]){
        if((charN - lastCharIndex) > 1){
          for(var i = lastCharIndex; i<charN; i++){
            chars[i].style.color="blue";
          }
        }
        chars[charN].style.color="blue";
        lastCharIndex = charN;
      }
    }
 
    utterSpeech.onend=function(){
      btn.disabled=false;

      for(var i = 0; i<chars.length; i++){
        chars[i].style.color="blue";
      }
    }

    //console.log("started");
    btn.disabled=true;
  }
  
  //stop
  var btn2=document.getElementById("stopBtn");
  var btn=document.getElementById("strtBtn");
  btn2.onclick=function(){
    speechSynthesis.cancel()
    
    var chars=document.getElementsByTagName("c");
    var charN=0;
    for(charN=0; charN<chars.length; charN++){
      chars[charN].style.color="black";
    }
    btn.disabled=false;
  }
}