(function(){
  function random(min,max){
    return Math.round((Math.random()*(max-min))+min);
  }
  var interval = setInterval(function(){
    var x = p2.x+random(-16,16);
    var y = p2.y+random(-16,16);
    var z = p2.z+random(-16,16);
    
    world.setBlock(x,y,z,random(0,80));
  },50);
})()