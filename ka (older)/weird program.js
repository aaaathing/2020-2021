// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
/*
 ██████╗ ██╗   ██╗██╗   ██╗███████╗
██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝
██║  ███╗██║   ██║ ╚████╔╝ ███████╗
██║   ██║██║   ██║  ╚██╔╝  ╚════██║
╚██████╔╝╚██████╔╝   ██║   ███████║
 ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝
*//**
▄█▄    █▄▄▄▄ ████▄ ▄█▄        ████▄    ▄    
█▀ ▀▄  █  ▄▀ █   █ █▀ ▀▄      █   █     █   
█   ▀  █▀▀▌  █   █ █   ▀      █   █ ██   █  
█▄  ▄▀ █  █  ▀████ █▄  ▄▀     ▀████ █ █  █  
▀███▀    █         ▀███▀            █  █ █  
        ▀                           █   ██  
                                            
██       ███   █▄▄▄▄ ▄█ ██▄     ▄▀  ▄███▄   
█ █      █  █  █  ▄▀ ██ █  █  ▄▀    █▀   ▀  
█▄▄█     █ ▀ ▄ █▀▀▌  ██ █   █ █ ▀▄  ██▄▄    
█  █     █  ▄▀ █  █  ▐█ █  █  █   █ █▄   ▄▀ 
   █     ███     █    ▐ ███▀   ███  ▀███▀   
  █             ▀                           
 ▀  
                _ ___                 /^^\ /^\  /^^\_
    _          _@)@) \            ,,/ '` ~ `'~~ ', `\.
  _/o\_ _ _ _/~`.`...'~\        ./~~..,'`','',.,' '  ~:
 / `,'.~,~.~  .   , . , ~|,   ,/ .,' , ,. .. ,,.   `,  ~\_
( ' _' _ '_` _  '  .    , `\_/ .' ..' '  `  `   `..  `,   \_
 ~V~ V~ V~ V~ ~\ `   ' .  '    , ' .,.,''`.,.''`.,.``. ',   \_
  _/\ /\ /\ /\_/, . ' ,   `_/~\_ .' .,. ,, , _/~\_ `. `. '.,  \_
 < ~ ~ '~`'~'`, .,  .   `_: ::: \_ '      `_/ ::: \_ `.,' . ',  \_
  \ ' `_  '`_    _    ',/ _::_::_ \ _    _/ _::_::_ \   `.,'.,`., \-,-,-,_,_,
   `'~~ `'~~ `'~~ `'~~  \(_)(_)(_)/  `~~' \(_)(_)(_)/ ~'`\_.._,._,'_;_;_;_;_;
*//*
_|"""""|_|"""""|_| """"|_|"""""|_|"""""|_|"""""|_| """"|_|"""""|_| """"|_|"""""|
"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'
*/
{var mySize=1;var direction;var myx=0;var myy=0;var pointAt=function(x,y){
direction=0;    
if(y-myy===0){
    if(x-myx>0){
        direction=90;
    }else{
        direction=-90;
    }
}else{
    direction=(atan((x-myx)/(y-myy)));
    if(y-myy<0){
        if(x-myx>0){
            direction=direction+180;
        }else{
            if(x-myx<0){
                direction=direction-180;
            }else{
                direction=180;
            }
        }
    }
}

};

var drawHouse=function(){
    image(getImage("cute/PlainBlock"),200,200);
    image(getImage("cute/WallBlockTall"),200,155);
    image(getImage("cute/RoofEast"),200,69);
    image(getImage("cute/PlainBlock"),100,200);
    image(getImage("cute/StoneBlock"),100,280);
    image(getImage("cute/DoorTallClosed"),100,170);
    image(getImage("cute/RoofWest"),100,69);
    image(getImage("cute/GrassBlock"),300,200);
    image(getImage("cute/TreeTall"),300,160);
    image(getImage("cute/GrassBlock"),200,280);
    image(getImage("cute/GrassBlock"),300,280);
    image(getImage("cute/Selector"),118,330,70,70);
    if(mouseIsPressed){
        image(getImage("cute/Key"),118,250,70,70);}else{
            image(getImage("cute/Key"),118,330,70,70);
        }}; 
var drawpenguin = function(x,y){
    fill(255, 255, 0);
    ellipse(x-40,y,80,20);
    ellipse(x+40,y,80,20);
    ellipse(x-15,y+40,30,50);
    ellipse(x+15,y+40,30,50);
    line(x-15,y,x-15,y+65);
    line(x+15,y,x+15,y+65);
    fill(158, 158, 158);
    ellipse(x,y,100,100);
    fill(255, 255, 0);
    ellipse(x-15,y-25,30,50);
    ellipse(x+15,y-25,30,50);
    fill(255, 255, 255);
    ellipse(x,y,80,80);
    noFill();
    strokeWeight(3);
    stroke(255, 255, 0);
    ellipse(x-15,y-15,20,20);
    ellipse(x+15,y-15,20,20);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill(0, 0, 0);
    ellipse(x-15,y-15,5,5);
    ellipse(x+15,y-15,5,5);
    fill(255, 255, 0);
    quad(x-5,y-5,x,y,x+5,y-5,x,y-10);
    fill(0, 0, 0);
    text("li'l penguin",x-30,y+20);
};

draw= function() {
    
    background(255, 255, 255,225);
    
    drawHouse(1234);
    drawpenguin(250,320);
    
    fill(38, 0, 255);
    ellipse(mouseX,mouseY,20,20);
    line(0,0,mouseX,mouseY);
    
    pointAt(mouseX,mouseY);scale(mySize);rotate((0-direction)+0);image(getImage("avatars/aqualine-sapling"),0,0);rotate(direction);fill(255, 255, 255);text("im pointing at direction "+(round(direction)),130,200);
};                                         

mousePressed=function(){
if(mouseButton===37){
    playSound(getSound("rpg/giant-no"));
}else{
    playSound(getSound("rpg/giant-yah"));
}
};   
}