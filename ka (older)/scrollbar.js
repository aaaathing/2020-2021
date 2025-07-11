// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
var scrollY = 0;
var maxScrollY = 1000;
var scrollWidth = 8;

var scrollbarDragOffset=0;
var prevMousedn = false;
var scrollbarDragged;

var scrollKeyVelocity = 0;

var content = createGraphics(400,maxScrollY+400,P2D);
content.draw = function(){
  content.background(255);
  content.fill(255,0,0);
  content.rect(100,100,200,400);
  content.textSize(20);
  content.text("Hello", 100,600);
  content.ellipse(mouseX, mouseY+scrollY, 40,40);
};


function scrollYBy(n){
  scrollY += n;
  if(scrollY > maxScrollY){
    scrollY = maxScrollY;
  }
  if(scrollY < 0){
    scrollY = 0;
  }
}
function setScrollY(n){
  scrollY = n;
  if(scrollY > maxScrollY){
    scrollY = maxScrollY;
  }
  if(scrollY < 0){
    scrollY = 0;
  }
}

draw = function(){
  background(255);
  fill(0);
  content.draw();
  image(content, 0, -scrollY);
  
  scrollKeyVelocity *= 0.8;
  scrollYBy(scrollKeyVelocity);
  
  var scrollBarHeight = 400 * (400/maxScrollY);
  var scrollBarYCent = map(scrollY, 0, maxScrollY, (scrollBarHeight/2) + (scrollWidth/2), 400-(scrollBarHeight/2)-(scrollWidth/2));
  var scrollBarY1 = scrollBarYCent - (scrollBarHeight/2);
  var scrollBarY2 = scrollBarYCent + (scrollBarHeight/2);
  
  var hover = mouseX > 400 - (scrollWidth/2) - (scrollWidth/4) - (scrollWidth/2) &&
              mouseY > scrollBarY1 - (scrollWidth/2)    &&
              mouseY < scrollBarY2 + (scrollWidth/2);
  
  if(mouseIsPressed !== prevMousedn){
    if(mouseIsPressed && hover){
      scrollbarDragged = true;
      scrollbarDragOffset = scrollBarYCent - mouseY;
    }
    if(!mouseIsPressed){
      scrollbarDragged = false;
    }
    prevMousedn = mouseIsPressed;
  }
  if(scrollbarDragged){
    setScrollY(map(mouseY+scrollbarDragOffset, (scrollBarHeight/2) + (scrollWidth/2), 400-(scrollBarHeight/2)-(scrollWidth/2), 0, maxScrollY));
    
  }
  
  strokeWeight(scrollWidth * 2);
  stroke(100);
  line(400-(scrollWidth/2), 0, 400-(scrollWidth/2), 400);
  strokeWeight((scrollWidth * 2)-1);
  stroke(200);
  line(400-(scrollWidth/2), 0, 400-(scrollWidth/2), 400);
  strokeWeight(scrollWidth);
  stroke(hover||scrollbarDragged ? 120 : 140);
  line(400 - (scrollWidth/2) - (scrollWidth/4), scrollBarY1, 400 - (scrollWidth/2) - (scrollWidth/4), scrollBarY2);
};

keyPressed = function(e){
  if(keyCode === 40){
    scrollKeyVelocity += 10;
  }
  if(keyCode === 38){
    scrollKeyVelocity -= 10;
  }
};

var externals;
var canvas = externals.canvas;
canvas.onwheel=function(event){
    event.preventDefault();
    scrollYBy(event.deltaY);
    scrollKeyVelocity = 0;
};