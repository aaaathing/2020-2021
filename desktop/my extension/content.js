/*
alert("Meany says: \"Hello\" ")
alert("You are supposed to say hello, not ok, ok?")
alert("Hey!!!! Why are you not saying hello, but saing <OK>?")
alert("UUUUUUUUUUUUUUUUUUUUUUUUUUUGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
alert("err")
*/

//all auto clicker stuff
{
  var container=document.createElement("div");
  container.id = "Nicey_AutoClick"

  var br=()=>document.createElement("br");
  var hr=()=>document.createElement("hr");
  hr.style="margin:0; padding:0; ";

  var closeBtn=document.createElement("div");
  closeBtn.innerHTML="&times;";
  closeBtn.id = "Nicey_AutoClickClose"
  closeBtn.onclick=function(){
    container.remove();
  }
  container.appendChild(closeBtn);

  var heading=document.createElement("h4");
  heading.innerHTML="Auto click";
  heading.style="display:inline;"
  container.appendChild(heading);

  window.play=document.createElement("div");
  play.innerHTML="Start";
  play.setAttribute("class", "optionStyle");
  play.onclick = function(){
    toggleAutoClick(this.innerHTML === "Start");
  }
  container.appendChild(play);

  container.appendChild(hr());

  var speedInfo=document.createElement("div");
  speedInfo.id="Nicey_AutoClickSpeedInfo"
  speedInfo.innerHTML=`
  <span style="float:left;">Fast</span>
  <span style="float:right;">Slow</span>
  `;
  container.appendChild(speedInfo);


  var speed=document.createElement("input");
  speed.type="range";
  speed.min="1";
  speed.max="10";
  speed.oninput=function(){
    rickroll.playbackRate = ((10-speed.value)/4)+0.3
  }
  speed.id = "Nicey_AutoClickSpeedSlider"
  container.appendChild(speed);

  container.appendChild(hr())
  var dontClick = document.createElement("a")
  dontClick.style = "color:blue;text-decortion:underline;cursor:pointer;"
  dontClick.onclick = function(){imageStuff()}
  dontClick.innerHTML = "Don't click"
  container.appendChild(dontClick)

  document.body.appendChild(container);
}

var autoClick=false;
function toggleAutoClick(){
  if(arguments.length===1){
    autoClick = arguments[0];
  }else{
    autoClick=!autoClick;
  }
  if(autoClick){
    play.innerHTML="Stop";
    rickroll.play()
    rickroll.playbackRate = ((10-speed.value)/4)+0.3
    window.setTimeout(function(){click();}, 1000);
  }else{
    play.innerHTML="Start";
    rickroll.pause()
  }
}

var mouseX=0, mouseY=0;
document.addEventListener("mousemove",function(e){
mouseX=e.clientX;
mouseY=e.clientY;
});

var clickEvent = {}
function click(){
  var elmnt=document.elementFromPoint(mouseX, mouseY);
  if(elmnt){
    if(elmnt.focus)elmnt.focus();
    if(elmnt.click)elmnt.click();
    clickEvent.clientX = mouseX, clickEvent.clientY = mouseY
    clickEvent.x = mouseX, clickEvent.y = mouseY
    clickEvent.button = 0
    if(typeof elmnt.onmousedown === "function")elmnt.onmousedown(clickEvent);
    if(typeof elmnt.onmouseup === "function")elmnt.onmouseup(clickEvent);
  }
  if(autoClick){
    if(document.hasFocus()){
      window.setTimeout(click, speed.value*100);
      rickroll.playbackRate = ((10-speed.value)/4)+0.3
    }else{
      toggleAutoClick(false);
    }
  }
}


//your guy on your screen
var niceyDiv=document.createElement("div");
niceyDiv.id="nicey";

var niceyCanvas=document.createElement("canvas");
niceyCanvas.width=100; niceyCanvas.height=150;
niceyDiv.appendChild(niceyCanvas);

var niceyMenu = document.createElement("div");
niceyMenu.id = "niceyMenu";
niceyMenu.style.display = "none";
var hideOpt = document.createElement("div");
hideOpt.innerHTML = "Hide";
hideOpt.onclick = hideNicey;
niceyMenu.appendChild(hideOpt);
niceyDiv.appendChild(niceyMenu);

document.body.appendChild(niceyDiv);

niceyDiv.oncontextmenu = function(e){
  niceyMenu.style.display = "block";
  niceyMenu.style.left = e.clientX + "px"
  niceyMenu.style.top = e.clientY + "px"
  return false;
}
window.addEventListener("click", function(e){
  if(e.which === 1){
    niceyMenu.style.display = "none"
  }
})

function hideNicey(){
  niceyDiv.style.display = "none"
}

var nctx = niceyCanvas.getContext("2d");
var niceyImages={
  head:makeImg("/nicey/head.png"),
  body:makeImg("/nicey/body.png"),
  pants:makeImg("/nicey/pants.png"),
  shoes:makeImg("/nicey/shoes.png"),
}
function makeImg(url){
  var img = new Image();
  img.src = chrome.runtime.getURL(url);
  return img;
}

var target={
  x:100,
  y:100
};
var current={
  x:0,
  y:0
};
var upParts={
  timer:0,
  head:0,
  body:0
};

var niceyDragged=false;
var mouseX=0,mouseY=0;
niceyDiv.onmousedown=function(){
  niceyDragged=true;
}
niceyDiv.onmouseup=function(){
  niceyDragged=false;
}
niceyDiv.onmousemove=function(e){
  mouseX=e.clientX;
  mouseY=e.clientY;
}

function centerImg(img,w,h,x,y){
  //draw a centered image on canvas
  if(!w)w = img.width;
  if(!h)h = img.height;

  if((!x)&&(x !== 0))x = niceyCanvas.width/2 - w/2;
  if((!y)&&(y !== 0))y = niceyCanvas.height/2 - h/2;
  nctx.drawImage(img, x,y,w,h);
}


//60 fps
var lastTick = 0, tickTime = 16.6666667, tick
function allUpdt(){
  tick = false
  var now = performance.now()
  if(now - lastTick > tickTime){
    lastTick = now
    tick = true
  }
  if(tick) nupdt();
  requestAnimationFrame(allUpdt);
}
allUpdt();


var nmove=setInterval(niceyMove,10000);

nctx.imageSmoothingEnabled = false;
function nupdt(){
  if(niceyDragged){
    var cnvW=niceyCanvas.width/2;
    var cnvH=niceyCanvas.height/2;
    current.x = mouseX - cnvW;
    current.y = mouseY - cnvH;
    target.x = mouseX - cnvW;
    target.y = mouseY - cnvH;
  }
  
  if(target.x > current.x){
    current.x++;
  }
  if(target.x < current.x){
    current.x--;
  }
  if(target.y > current.y){
    current.y++;
  }
  if(target.y < current.y){
    current.y--;
  }
  niceyDiv.style.left = current.x+"px";
  niceyDiv.style.top = current.y+"px";

  
  upParts.timer++;
  if(upParts.timer>50){
    upParts.timer=0;
  }
  if((upParts.timer < 20)||(upParts.timer > 30)){
    upParts.body = 2;
  }else{
    upParts.body = 0;
  }
  if((upParts.timer < 10)||(upParts.timer > 40)){
    upParts.head = 2;
  }else{
    upParts.head = 0;
  }
  if(upParts.timer > 45){
    upParts.pants = 2;
  }else{
    upParts.pants = 0;
  }
  
  nctx.clearRect(0,0, niceyCanvas.width, niceyCanvas.height);

  centerImg(niceyImages.head, 40,40, false, 2-upParts.head);
  centerImg(niceyImages.body, 30,46, false, 42-upParts.body);
  centerImg(niceyImages.pants, 30,37, false, 88-upParts.pants);
  centerImg(niceyImages.shoes, 50,14, false, 125-upParts.pants);
}
function niceyMove(){
  target.x = Math.floor(Math.random()*(window.innerWidth));  
  target.y = Math.floor(Math.random()*(window.innerHeight)); 
}



//blocked
if(window.location.origin === "https://block.opendns.com"){
  window.location.replace("chrome-extension://cegcaaajbgeoocpofhcnbcfgljcmpbef/app/blocked.html"+window.location.search)
}

//rickroll
var rickroll = document.createElement("audio")
rickroll.src = "https://picturelements.github.io/images/nggyu.mp3"

//something
function imageStuff(){
  var imgs = document.getElementsByTagName("img");
  for(var i=0; i<imgs.length; i++){
    var rect = imgs[i].getBoundingClientRect()
    imgs[i].src = "http://tinypic.com/images/goodbye.jpg"//"https://static.wikia.nocookie.net/hypixel-skyblock/images/1/16/Game_Breaker.png/revision/latest?cb=20191125085113";
    imgs[i].style.imageRendering = "pixelated";
    imgs[i].width = rect.width
    imgs[i].height = rect.height
  }
}