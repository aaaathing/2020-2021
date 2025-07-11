// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
var g = createGraphics(width,height,WEBGL);
g.angleMode="degrees";

var externals;

g.pointLight(100, 100, 100,  400, -200, 0);
g.lights();


draw = function() {
  g.background(126, 224, 219);
  
  var xtraX = (sin(frameCount/5)*600);
  var xtraZ = (cos(frameCount/5)*600);
  //camera
  g.camera(400-xtraX,-100, 200-xtraZ,  400,100,100,  0,1,0);
  
  g.pushMatrix();
  //make 0,0 in center
  g.translate(width/2, height/2,0);
  
  //ground
  g.fill(0, 255, 0);
  g.translate(0,100,0);
  g.rotateX(90);
  g.ellipse(0,0,6000,6000);
  g.rotateX(-90);
  g.translate(0,-100,0);
  
  //house
  g.translate(1000,0,200);
  g.fill(255, 241, 168);
  g.box(500);
  
  
  //door
  g.translate(-251,0,0);
  g.rotateY(90);
  g.fill(255, 0, 0);
  g.rect(0,-100,100,210);
  g.rotateY(-90);
  g.translate(251,0,0);
  
  g.translate(-1000,0,-200);
  
  
  //lamp post
  g.stroke(0, 0, 0);
  g.strokeWeight(10);
  g.line(400,-200,400,100);
  
  //light bulb on lamp
  g.fill(255, 255, 0);
  g.translate(400,-200);
  g.noStroke();
  g.sphere(40);
  g.translate(-400,200);
  
  //table top
  g.rotateX(90);
  g.noStroke();
  g.fill(255, 179, 87);
  g.rect(0,100,400,100);
  
  //table front
  g.rotateX(90);
  g.translate(0,0,-200);
  g.rect(0,-100,400,100);
  
  //table back
  g.translate(0,0,100);
  g.rect(0,-100,400,100);
  
  g.translate(0,0,100);
  g.rotateX(-90);
  
  //person head
  g.rotateX(-90);
  g.fill(255, 234, 209);
  g.translate(200,-100+(sin(frameCount*10)*10),0);
  g.sphere(60);
  
  //person neck
  g.translate(0,60,0);
  g.box(50);
  
  //persons body
  g.fill(255, 0, 0);
  g.translate(0,40,0);
  g.box(80);
  
  
  g.popMatrix();

  externals.context.drawImage(g.externals.canvas, 0, 0);
};