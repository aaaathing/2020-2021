// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
var instructions="This is a platformer. If you know what a platformer is, you don't need to read this. Use arrow keys to move. Green is land. blue is sky. Try not to touch red blocks. It is lava. Lava won't flow. The goal is to get to the pink block which is the portal to the next level.";

var playername="Player";

var levels=[
[
"ll----------l-ll",
"l---l-l--------l",
"l-l------l---l-l",
"l----------l-l-l",
"llllllll--llllll",
"dddddddd--dddddd",
"l--d-l-d--dl----",
"--dd--l-d-ldllll",
"ldldd--ll--l--d-",
"lllllll---l---d-",
"d-------llll-ddd",
"d-lllllllll--dld",
"d--------l--dlll",
"lllllll----dll-l",
"--ll----llld---l",
"-------p-l-d----"
],[
"l----------d-l--",
"---l------l-----",
"llllllll-lll-lll",
"-d-----------d--",
"dld-----llllldp-",
"d-l---ll----dd---",
"----llddl----d-l",
"-l--ldld-ll--d--",
"--l-ld-l--l--dl-",
"-l-d-----ddd-d--",
"-----------dld-l",
"lllllllll--d-d--",
"l------------dl-",
"-ddllll----lld--",
"--------l------l",
"--------d-llllll"
],[
"--l-ll--dddd-l-l",
"ll---l--dlld---d",
"--lll----dddddd-",
"llllllll---d--l-",
"--lll---l----ll-",
"---------ll---d-",
"ddd----lll---ddd",
"---l-l--ll-l--ll",
"llllddd---d----l",
"------ll-------l",
"ddl-dld-ld-lllll",
"----------------",
"----------------",
"----------------",
"----------------",
"----------------"
]
];

//level is the current level. level number is level number.
var level;
var levelnumber=1;
var switchlevel = function (){
    level=levels[levelnumber - 1];
};
switchlevel();

//player information
var player = {
x:158,
y:0,
xvel:0,
yvel:0,
touchinglevel:false
};

var keys={};
keyPressed=function(){
    keys[keyCode]=true;
};
keyReleased=function(){
    keys[keyCode]=false;
};

function drawlevel (l,l1){
noStroke();
for(var a =0;a<l;a++){
var u=level[a]; 
for(var i=0;i<l1;i++){
if(u[i]==="l"){
    fill(13, 255, 0);
    new rect(i*25,a*25,25,25);
}
if(u[i]==="d"){
    fill(255, 0, 0);
    new rect(i*25,a*25,25,25);
}
if(u[i]==="-"){
    fill(9, 0, 255);
    new rect(i*25,a*25,25,25);
}
if(u[i]==="p"){
    fill(255, 0, 255);
    new rect(i*25,a*25,25,25);
}


}}}
function collide (l,l1){
player.touchinglevel=false;
for(var a =0;a<l;a++){
var u=level[a]; 
for(var i=0;i<l1;i++){
if((player.x+10>(i*25))&&(player.x<(i*25)+25)&&(player.y+11>(a*25))&&(player.y-10<(a*25)+25)){
    if(u[i]==="l"){
        player.touchinglevel=true;
    }
    if(u[i]==="d"){
        player.touchinglevel="lava";
    }
    if(u[i]==="p"){
        player.touchinglevel="portal";
    }
}
}}

}
function calculateplyr(){
    if(keys[39]){player.xvel+=0.5;}
    if(keys[37]){player.xvel-=0.5;}
    
    player.xvel*=0.8;
    player.x+=player.xvel;
    
    player.yvel+=0.2;
    if(player.yvel>3){player.yvel=3;}
    player.y+=player.yvel;
    
    collide(16,16);
    if(player.touchinglevel===true){
        var iterations=0;
        while(player.touchinglevel===true){
            iterations++;
            player.y--;
            collide(16,16);
            if(iterations>10){break;}
        }
        if(iterations>10){
            player.y+=7;
            player.x-=player.xvel;
        }
        player.y=Math.floor(player.y);
        player.yvel=0;
        player.y+=2;
    }
    
    collide(16,16);
    if((player.touchinglevel===true)&&keys[38]){
        player.yvel=-4;
    }
    
    
    if(player.y>410||player.touchinglevel==="lava"||player.touchinglevel==="portal"){
        if(player.touchinglevel==="portal"){levelnumber++;switchlevel();}
        player = {
            x:158,
            y:0,
            xvel:0,
            yvel:0,
            touchinglevel:false
        };
        
    }
    
    
    
}


draw = function() {
  background(0, 0, 0);
  drawlevel(16,16);
  calculateplyr();
  
  fill(255, 0, 255);
  rect(player.x,player.y,10,10);
fill(5, 5, 5);
text("Level: "+ levelnumber,0,15); 

if(mouseY>380){
    fill(255, 238, 176);
    rect(0,300,400,100);
    
    fill(0, 0, 0);
    text(instructions,10,310,370,100);
}
};

