// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796


var bad=[];
var wait=0;
var waittime=150;
var speed=5;
var score=0;

var your={
yvel:0,
y:0,
dead:"start"
};

fill(0, 0, 0);

function restart(){
    your={
    yvel:0,
    y:0,
    dead:false
};
bad=[];
wait=0;
waittime=150;
speed=5;
score=0;
}

function tick() {
    background(255, 255, 255);
    
    wait++;
    if(wait>waittime){
        wait=0;
        
        bad.push(400);
    }
    
    for(var i=0;i<bad.length;i++){
        fill(255, 0, 0);
        bad[i]-=speed;
        rect(bad[i],200,30,30);
        if(bad[i]<0){
            bad.shift();
        }
        if(bad[i]<70&&your.y<15){
            your.dead=true;
        }
    }


    
    if(keyIsPressed&&keyCode===0){
        if(your.y===0){
            your.yvel=12;
        }
    }
    your.yvel-=0.5;
    your.y+=your.yvel;
    if(your.y<0){
        your.y=0;
        your.yvel=0;
    }
        
    fill(0, 0, 0);
    rect(50,200-your.y,30,30);
    
    score+=speed/50;
    speed=floor(floor(score)/100)+5;
    
    textSize(20);
    text("Score: "+floor(score),10,20);
    text("Speed: "+speed,10,50);
}

draw = function() {
    if(your.dead===false){
    tick();
    }else if(your.dead===true){
        if(mouseIsPressed){
            restart();
        }
        textSize(50);
        text("You died",100,200);
    }else if(your.dead==="start"){
        textSize(50);
        text("Click to start",50,200);
        if(mouseIsPressed){
            your.dead=false;
        }
    }
};