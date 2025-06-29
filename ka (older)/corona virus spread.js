// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
/*
Colors{
  red: infected
  green: vaccinated
  blue: has a mask
}
*/

var spreadRadius = 20;

var chances = {
  vaccinated:0.6,
  masked:0.8,
  infected:0.05
};
var infectChances = {
  masked:{
    true:{
      vaccinated:{
        true:0.05,
        false:0.3
      }
    },
    false:{
      vaccinated:{
        true:0.07,
        false:0.8
      }
    }
  }
};

var Walker = function(minX, maxX, x, y, speedY, infected, masked, vaccinated){
  this.minX = minX || 0;
  this.maxX = maxX || 0;
  this.x = x || 0;
  this.y = y || 0;
  
  this.infected = infected || false;
  this.masked = masked || false;
  this.vaccinated = vaccinated || false;
  
  this.speedX = 0;
  this.speedY = speedY || 0;
};
Walker.prototype.update = function(){
  if(round(random(1,4)) === 4){
    this.speedX += round(random(-1,1));
  }
  this.x += this.speedX;
  
  if(this.x > this.maxX){
    this.x = this.maxX;
    this.speedX = round(random(-1,0));
  }
  if(this.x < this.minX){
    this.x = this.minX;
    this.speedX = round(random(0,1));
  }
  
  this.y += this.speedY;
};
Walker.prototype.render = function(){
  fill(0,0,0,0);
  stroke(0);
  if(this.masked){stroke(0, 255, 247);}
  if(this.vaccinated){stroke(0,200,0);}
  if(this.infected){stroke(255,0,0);}
  strokeWeight(6);
  point(this.x, this.y);
  
  if(this.infected){
    strokeWeight(2);
    ellipse(this.x, this.y, spreadRadius*2, spreadRadius*2);
  }
};
Walker.prototype.tryInfect = function(otherWalker){
  if(otherWalker.infected && !this.infected){
    if(spreadRadius >= dist(this.x,this.y, otherWalker.x, otherWalker.y)){
      var chance = infectChances.masked[this.masked].vaccinated[this.vaccinated];
      this.infected = round(random(0, 1-chance)*100)/100;
    }
  }
};

var walkers = [new Walker(0,100, 0,0, 1, true,false,false)];
draw = function(){
  background(255);
  
  if(round(random(1,10)) === 1){
    var masked = (round(random(0,1-chances.masked)*100)/100) === 0;
    var vaccinated = (round(random(0,1-chances.vaccinated)*100)/100) === 0;
    var infected = (round(random(0,1-chances.infected)*100)/100) === 0;
    walkers.push(new Walker(0,100, 0,0, random(1, 2), infected,masked,vaccinated));
  }
  
  for(var w=0; w<walkers.length; w++){
    walkers[w].update();
  }
  for(var w=0; w<walkers.length; w++){
    walkers[w].render();
  }
  
  for(var w=0; w<walkers.length; w++){
    for(var o=0; o<walkers.length; o++){
      walkers[w].tryInfect(walkers[o]);
    }
  }
};