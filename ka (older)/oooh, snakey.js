// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
var direction;
var player={
x:0,
y:0,
scrollX:0,
scrollY:0,
segments:[],
long:50,
radius:20,
zoom:1
};
var allFood=[];

var foodColors=[
color(255, 0, 0,   200),
color(255, 170, 0, 200),
color(255, 255, 0, 200),
color(0, 255, 0,   200),
color(0, 0, 255,   200),
color(255, 0, 255, 200)
];

var scalePos=function(x,y,howMuch){
  x-=width/2;
  y-=height/2;
  
  x*=howMuch;
  y*=howMuch;
  
  x+=width/2;
  y+=height/2;
  
  return{
    x:x,
    y:y
  };
};
var pointAt=function(x,y,myx,myy){
    
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
var calcplayer=function(){
    pointAt(mouseX,mouseY,200,200);
    player.x+=sin(direction)*2;
    player.y+=cos(direction)*2;
    
    player.scrollX=player.x-200;
    player.scrollY=player.y-200;
    
    player.segments.push(round(player.x));
    player.segments.push(round(player.y));
    if((player.segments.length/2)>player.long){
        while((player.segments.length/2)>player.long){
            player.segments.shift();
            player.segments.shift();
        }
    }
};
var renderp=function(){
    noStroke();
    
    var rad = player.radius * player.zoom;
    fill(255, 0, 0);
    var x=(player.x) - (player.scrollX);
    var y=(player.y) - (player.scrollY);
    ellipse(x, y, rad,rad);
    

    for(var i=0;i<player.segments.length;i+=2){
        var x=(player.segments[i])  - (player.scrollX);
        var y=(player.segments[i+1]) - (player.scrollY);
        
        var s=scalePos(x,y,player.zoom);
        x=s.x;
        y=s.y;
        
        ellipse(x,y, rad, rad);
    }
};
var food=function(){
    if(random(10)>9){
        allFood.push(random(-500,500));
        allFood.push(random(-500,500));
        allFood.push(foodColors[Math.floor(random(0,foodColors.length)) ]);
    }
    //remove food
    for(var b=0; b<allFood.length; b+=3){
        var x = allFood[b]-player.scrollX-200;
        var y = allFood[b+1]-player.scrollY-200;
        
        var rad=player.radius;
        if(x>-rad && x<rad){
            if(y>-rad && y<rad){
                var removed=allFood.splice(b,3);
                b-=3;
                
                player.long+=2;
                player.radius+=0.1;
                player.zoom*=0.999;
            }
        }
    }
    //draw food
    for(var a=0; a<allFood.length; a+=3){
        var col=allFood[a+2];
        var x = allFood[a]-player.scrollX;
        var y = allFood[a+1]-player.scrollY;
        
        var s = scalePos(x,y,player.zoom);
        x=s.x;
        y=s.y;
        
        fill(col);
        ellipse(x, y, 15*player.zoom, 15*player.zoom);
        ellipse(x, y, 10*player.zoom, 10*player.zoom);
        ellipse(x, y, 6*player.zoom, 6*player.zoom);
        ellipse(x, y, 3*player.zoom, 3*player.zoom);
    }
};

draw= function() {
    calcplayer();
    background(0, 0, 0);
    
    food();
    
    renderp();
};