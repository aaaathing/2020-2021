// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
/*
not done
*/
angleMode="degrees";

var bloons=[];
var towers=[
  {
    type:"dartMonkey",
    x:250,
    y:200
  },
  {
    type:"dartMonkey",
    x:350,
    y:300
  },
  {
    type:"spikeFactory",
    x:50,
    y:150
  },
  {
    type:"dartMonkey",
    x:50,
    y:350
  }
];
var projectiles=[];

var bloonInfo={
  redBloon:{
    speed:1,
    lives:1,
    width:20,
    height:20,
    render:function(x,y){
      noStroke();
      fill(255, 0, 0);
      rectMode(CENTER);
      rect(x,y,20,20);
    }
  },
  blueBloon:{
    speed:1.2,
    lives:2,
    width:20,
    height:20,
    render:function(x,y){
      noStroke();
      fill(0, 150, 255);
      rectMode(CENTER);
      rect(x,y,20,20);
    }
  },
  greenBloon:{
    speed:1.5,
    lives:3,
    width:20,
    height:20,
    render:function(x,y){
      noStroke();
      fill(0, 220, 0);
      rectMode(CENTER);
      rect(x,y,20,20);
    }
  },
  yellowBloon:{
    speed:2,
    lives:4,
    width:20,
    height:20,
    render:function(x,y){
      noStroke();
      fill(255, 255, 0);
      rectMode(CENTER);
      rect(x,y,20,20);
    }
  }
};
var projectileInfo={
  dart:{
    speed:10,
    lives:1,
    damage:1,
    render:function(projectile){
      noStroke();
      stroke(0, 0, 0);
      strokeWeight(4);
      var x=projectile.x, y=projectile.y, mySin=projectile.Sin, myCos=projectile.Cos;
      line(-mySin*4+x, -myCos*4+y, mySin*4+x, myCos*4+y);
    }
  },
  spike:{
    speed:0,
    lives:1,
    damage:1,
    render:function(projectile){
      noStroke();
      stroke(0, 0, 0);
      
      strokeWeight(5);
      stroke(0,0,0);
      point(projectile.x, projectile.y);
    }
  }
};
var towerInfo={
  dartMonkey:{
    cooldownTime:120,
    render:function(x,y){
      noStroke();
      fill(166, 102, 0);
      
      rectMode(CENTER);
      rect(x,y,30,30);
    }
  },
  spikeFactory:{
    cooldownTime:120,
    render:function(x,y){
      noStroke();
      fill(166, 144, 0);
      
      rectMode(CENTER);
      rect(x,y,30,30);
    }
  }
};

var path=[
  [0,100],
  [100,100],
  [200,100],
  [200,200],
  [100,200],
  [100,300],
  [200,300],
  [300,300],
  [300,200],
  [300,100],
  [400,100]
];

function posBetween(x1,y1,x2,y2,dec){
  //dec is a decimal number between 0 and 1
  
  var distX = x2 - x1;
  var distY = y2 - y1;
  distX*=dec;
  distY*=dec;
  x1+=distX;
  y1+=distY;
  return{
    x:x1,
    y:y1
  };
}

function pointAt(myx, myy, x,y){
    var direction=0;    
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
    
    return direction;
}

function collide(obj1, obj2) {
    return  obj1.x - obj2.x < obj2.w &&
        obj2.x - obj1.x < obj1.w &&
        obj1.y - obj2.y < obj2.h &&
        obj2.y - obj1.y < obj1.h;// Calculates whether or not the objects are touching eachother.
}

function searchForBloon(how){
    if(how === "first"){
      return bloons[0];
    }
    if(how === "last"){
      return bloons[bloons.length - 1];
    }
}

function updateBloons(){
  for(var i=0; i<bloons.length; i++){
    //update a balloon
    var bloon = bloons[i];
    var thisBloonInfo = bloonInfo[bloon.type];
    
    if((!bloon.lives)&&(bloon.lives !== 0)){
        bloon.lives = thisBloonInfo.lives;
    }
    
    bloon.pathPartPercent += 0.01*thisBloonInfo.speed;
    if(bloon.pathPartPercent>1){
      bloon.pathPartPercent=0;
      bloon.pathPart++;
    }
    
    if(path[bloon.pathPart+1]){
      var x = path[bloon.pathPart][0];
      var y = path[bloon.pathPart][1];
      var nx = path[bloon.pathPart+1][0];
      var ny = path[bloon.pathPart+1][1];
      
      var bloonPos = posBetween(x,y,nx,ny, bloon.pathPartPercent);
      
      thisBloonInfo.render(bloonPos.x, bloonPos.y);
      
      bloon.x = bloonPos.x;
      bloon.y = bloonPos.y;
      
      if(bloon.lives<1){
        //get previous balloon
        var crctBloon;
        var prevBloon;
        for(crctBloon in bloonInfo){
          if(crctBloon === bloon.type){
            break;
          }
          prevBloon = crctBloon;
        }
        
        //switch to previous
        if(prevBloon){
          bloon.lives = false;
          bloon.type = prevBloon;
        }else{
          bloons.splice(i,1);
          i--;
        }
        
      }
    }else{
      bloons.splice(i,1);
      i--;
    }
  }
}

function updateProjectiles(){
  for(var i=0; i<projectiles.length; i++){
    var projectile = projectiles[i];
    var thisInfo = projectileInfo[projectile.type];
    
    
    if( ((!projectile.Sin) && (projectile.Sin !== 0)) || ((!projectile.Cos) && (projectile.Cos !== 0)) ){
      projectile.Sin = sin(projectile.direction);
      projectile.Cos = cos(projectile.direction);
    }
    
    if((!projectile.lives)&&(projectile.lives !== 0)){
        projectile.lives = thisInfo.lives;
    }
    
    projectile.x += projectile.Sin*thisInfo.speed;
    projectile.y += projectile.Cos*thisInfo.speed;
    
    if(projectile.type === "spike"){
      if((!projectile.timer) && (projectile.timer !== 0)){
        projectile.timer=0;
      }
      
      projectile.timer++;
    }
    
    //detect if touching balloon, if it is touching then remove the balloon{
    var projectileObj={
        x:projectile.x,
        y:projectile.y,
        w:1,
        h:1
    };
    for(var bloonN=0; bloonN<bloons.length; bloonN++){
        var bloon = bloons[bloonN];
        var ThisBloonInfo = bloonInfo[bloon.type];
        
        var bloonObj={
            x:bloon.x - (ThisBloonInfo.width/2),
            y:bloon.y - (ThisBloonInfo.height/2),
            w:ThisBloonInfo.width,
            h:ThisBloonInfo.height
        };
        
        
        if(collide(bloonObj, projectileObj)){
            bloon.lives -= thisInfo.damage;
            projectile.lives -= 1;
        }
    }
    //}
    
    
    if((projectile.x < 0)||(projectile.y<0)||(projectile.x > width)||(projectile.y>height)|| (projectile.lives<1)||(projectile.timer && (projectile.timer>1800)) ){
      projectiles.splice(i,1);
      i--;
    }else{
      thisInfo.render(projectile);
    }
  }
}

function updateTowers(){
  for(var i=0; i<towers.length; i++){
    var tower = towers[i];
    var thisTowerInfo = towerInfo[tower.type];
    
    if((!tower.cooldown)&&(tower.cooldown !== 0)){
      tower.cooldown=0;
    }
    
    tower.cooldown++;
    if(tower.cooldown > thisTowerInfo.cooldownTime){
      tower.cooldown=0;
      
      var bloonToShoot = searchForBloon("first");
      if(bloonToShoot){
        var direction = pointAt(tower.x, tower.y, bloonToShoot.x, bloonToShoot.y);
        
        if(tower.type === "dartMonkey"){
          projectiles.push({
            direction:direction,
            x:tower.x,
            y:tower.y,
            type:"dart"
          });
        }
      }
      
      if(tower.type === "spikeFactory"){
        projectiles.push({
          direction:0,
          x:tower.x + (sin(random(360))*60),
          y:tower.y + (cos(random(360))*60),
          type:"spike"
        });
      }
      
    }
    
    thisTowerInfo.render(tower.x, tower.y);
  }
}

function renderPath(){
  stroke(158, 132, 0);
  strokeWeight(50);
  for(var i=0; i<path.length; i++){
    var px,py,x,y;
    if(path[i-1]){
      px = path[i-1][0];
      py = path[i-1][1];
    }
    x = path[i][0];
    y = path[i][1];
    
    if(path[i-1]){
      line(px,py,x,y);
    }else{
      //no previous part of path
    }
  }
}

draw = function() {
    background(255, 255, 255);
    
    renderPath();
    updateBloons();
    updateTowers();
    updateProjectiles();
};

mouseClicked=function(){
  bloons.push({
    pathPart:0,
    pathPartPercent:0,
    type:"yellowBloon"
  });
};
