// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
//{
var win,doc;
(function(){win=this;var d="document";doc=win[d];}());
var canvas=doc.getElementsByTagName("canvas")[0];
canvas.requestPointerLock=canvas.requestPointerLock||canvas.mozRequestPointerLock;
var locked=false;
var mousex=0,mousey=0;//not the actual variables
var xSpeed=0,ySpeed=0;
canvas.onclick=function(){
    canvas.requestPointerLock();
};
doc.addEventListener("pointerlockchange",function(){
  if(doc.pointerLockElement===canvas){locked=true;}else{locked=false;}
  mousex=mouseX;mousey=mouseY;
});
canvas.onmousemove=function(e){
  if(locked){
    xSpeed=e.movementX;
    ySpeed=e.movementY;
    mousex+=xSpeed;
    mousey+=ySpeed;
    
    if(mousex<0){mousex=0;}
    if(mousey<0){mousey=0;}
    if(mousex>width){mousex=width;}
    if(mousey>height){mousey=height;}
    
    mouseX=mousex;
    mouseY=mousey;
  }
};
function renderPointer(){
  xSpeed=0;
  ySpeed=0;
  if(locked){
    strokeWeight(2);
    stroke(0, 0, 255);
    fill(150, 150, 255);
    ellipse(mouseX,mouseY,20,20);
    noStroke();
  }
}
//}

var slide=1;
var clk=false;

var flash=100;var flashs=1;
var toggle=false;

var wordTog=false;

var x=0,y;

var clicked=false;
mouseClicked=function(){
  clicked=true;
};


var button=function(x,y,w,h,txt,r,g,b){
    fill(r,g,b);
    rect(x,y,w,h);
    
    textAlign(LEFT);
    textSize(20);
    fill(0, 0, 0);
    text(txt,x,y+(h/2));
    
    if(mouseX>x&&mouseX<(x+w)){
        if(mouseY>y&&mouseY<(y+h)){
            fill(r-50,g-50,b-50);
            rect(x,y,w,h);
            
            fill(255, 255, 255);
            text(txt,x,y+(h/2));
            
            cursor("pointer");
            
                if(mouseIsPressed&&clk===false){
                    clk=true;
                }
                if((!mouseIsPressed)&&clk===true){
                    clk=false;
                    return true;
                }
                
            
            
        }
    }
};
strokeWeight(1);
stroke(0, 0, 0);
draw = function() {
    cursor("default");
    if(slide===1){
        background(217, 217, 217);
        fill(0, 0, 0);
        textSize(50);
        text("Nothing program",10,100);
        if(button(100,200,200,100,"This won't do anything",255,100,100)){
            slide=2;
        }
        
    }
    if(slide===2){
        background(43, 255, 0);
        textSize(30);
        fill(255, 0, 0);
        text("What? You clicked it???",50,100);
        if(button(100,200,200,100," You shouldn't click it\n It won't do anything")){
            slide=3;
        }
    }
    if(slide===3){
        background(255, 255, 255);
        fill(255, 255, 0);
        strokeWeight(1);
        stroke(0, 0, 0);
        triangle(200,20,130,100,270,100);
        fill(255, 0, 0);
        textSize(60);
        text("!",192,80);
        
        textSize(40);
        fill(0, 0, 0);
        text("WARNING!!!!",100,150);
        
        textSize(20);
        text("Buttons are dangerous!!!\nDo not click the button!!!!\nAnd don't you dare touch it!!!",100,200);
        
        //no button sign
        strokeWeight(3);
        if(button(180,300,60,50,"Button",255,255,255)){
            slide=4;
        }
        noFill();
        stroke(255, 0, 0);
        ellipse(211,326,100,100);
        line(170,300,254,350);
    }
    if(slide===4){
        flash+=flashs;
        if(flash>200||flash<100){
            flashs=-flashs;
        }
        background(flash, 0, 0);
        fill(255, 255, 255);
        text("Stop clicking it!!!!!!",100,100);
        stroke(0, 0, 0);
        strokeWeight(1);
        if(button(200,200,30,30,"no",255,0,0)){
            toggle=!toggle;
        }
        if(toggle){
            if(button(200,300,30,30,"no",255,0,0)){
              slide++;
            }
        }
    }
    if(slide===5){
      background(random(255));
      
      textSize(20);
      
      pushMatrix();
      translate(random(100),random(100));
      
      fill(255, 0, 0);
      textAlign(CENTER);
      text("ARE YOU CRAZY?!?!",200,100);
      popMatrix();
      
      if(button(150,200,100,50,"",255,0,0)){
        slide++;
      }
    }
    if(slide===6){
      background(255, 0, 0);
      fill(0, 0, 0);
      textSize(20);
      textAlign(CENTER);
      text("So you are crazy, ehh?\nI need to think of a way\nto stop you from\nCLICKING THOSE BUTTONS!!!!",200,100);
      if(button(100,200,200,100,"   SO DONT CLICK\n   THIS BUTTON!!!!!!!!",255,0,0)){
        slide++;
      }
    }
    if(slide===7){
      background(255, 255, 255);
      
      fill(0, 0, 0);
      textAlign(CENTER);
      text("Hmm...\nIf I make the button invisible,\n you wouldn't click it!", 200,100);
      if(button(100,200,200,100,"   OK",255,255,0)){
        slide++;
      }
    }
    if(slide===8){
      background(255, 255, 255);
      
      textSize(50);
      textAlign(CENTER);
      fill(0, 0, 0);
      text("No more",200,50);
      
      textAlign(LEFT);
      if(wordTog){
        text("on",120,100);
        text("butts",175,100);
      }else{
        text("butt",120,100);
        text("ons",205,100);
        if(mouseIsPressed){
          if((mouseX>120)&&(mouseY>63)&&(mouseX<287)&&(mouseY<99)){
            wordTog=true;
          }
        }
      }
      textAlign(CENTER);
      text("yay!",200,150);
      
      if(wordTog){
        if(button(100,200,200,100,"   button",0,255,255)){
          slide++;
        }
      }
    }
    if(slide===9){
      background(255, 255, 255);
      textSize(20);
      textAlign(CENTER);
      fill(0, 0, 0);
      text("Where did you get that button from???",200,50);
      
      if(button(100,200,200,100,"",255,0,255)){
        slide++;
      }
    }
    if(slide===10){
      background(255, 255, 255);
      
      background(255, 255, 255);
      textSize(20);
      textAlign(CENTER);
      fill(0, 0, 0);
      text("That doesnt matter right now,\n because You\nShould\nSTOP\nCLICKING!!!",200,50);
      
      if(button(100,200,200,100,"  yeah, dont click me",150,200,300)){
        slide++;
      }
    }
    if(slide===11){
      background(255, 255, 255);
      textSize(20);
      textAlign(CENTER);
      fill(0, 0, 0);
      text("Button, Move!",200,50);
      
      x+=30;
      if(x>width){
        x=0;
      }
      if(button(x,200,200,100,"  Im moving, master",150,200,300)){
        slide++;
        x=0;
      }
    }
    if(slide===12){
      background(255, 255, 255);
      textSize(20);
      textAlign(CENTER);
      fill(0, 0, 0);
      text("Wich button is it?",200,50);
      
      for(x=0; x<8; x++){
        for(y=0; y<8; y++){
          if(button(x*50, y*50, 30,30,"Me",100,100,100)){
            if((x===2)&&(y===2)){
              slide++;
            }
          }
        }
      }
    }
    if(slide===13){
      background(255, 255, 255);
      textSize(20);
      textAlign(CENTER);
      fill(0, 0, 0);
      text("Now, dont click the button\nor everything will explode.",200,50);
      
      if(button(100,200,200,100,"  Explode",255,0,0)){
        slide++;
      }
    }
    if(slide===14){
      for(x=0; x<width; x+=20){
        for(y=0; y<width; y+=30){
          colorMode(HSB);
          noStroke();
          fill(random(0,40), 255, 255);
          rect(x,y,20,30);
        }
      }
      if(clicked){
        slide++;
        wordTog=false;
        clicked=false;
        toggle=false;
      }
    }
    if(slide===15){
      colorMode(RGB);
      background(255, 255, 255);
      textSize(20);
      textAlign(CENTER);
      fill(0, 0, 0);
      text("Well, that was just a simulation.\nBut look, there is no more button,\nit got exploded.",200,50);
      
      if(clicked){
        wordTog=true;
        if((mouseX>181)&&(mouseY>81)&&(mouseX<262)&&(mouseY<96)){
          slide--;
        }
      }
      if(wordTog){
        if(button(100,200,200,100,"I didn't get exploded.",150,150,150)){
          slide++;
          mouseX=0;
        }
      }
    }
    if(slide===16){
      background(255, 255, 255);
      background(255, 255, 255);
      textSize(20);
      textAlign(CENTER);
      fill(0, 0, 0);
      text("The button is blocked,\nNOW ARE YOU HAPPY?!?",200,50);
      
      
      
      if(!toggle){
        stroke(255, 0, 0);
        strokeWeight(10);
        noFill();
        rect(80,180,240,140);
        
        if((mouseX>80)&&(mouseY>180)&&(mouseX<320)&&(mouseY<320)){
          mousex-=xSpeed*2;
          mousey-=ySpeed*2;
          
          stroke(200, 0, 0);
          strokeWeight(10);
          noFill();
          rect(80,180,240,140);
        }
        noStroke();
      }
      if(button(100,200,200,100,"You cant reach me!",255,100,0)){
        slide++;
      }
    }
    if(slide===17){
      background(255, 255, 255);
    }
    
    clicked=false;
    renderPointer();
};