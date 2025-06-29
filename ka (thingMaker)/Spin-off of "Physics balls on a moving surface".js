// From thingmaker ka account. https://www.khanacademy.org/profile/kaid_30538885139931647243460
//this is the ground. change it. It's just a equation.
var F = function(x){
    var y;
    y = 200;
    y=abs(x);
    if(y<100 && y > 10){
        y=(100-y+100);
    }
    if(y<=10){
        y-=180;
    }
    return(y);
};

//var F = function(x){var y;  y = 100*sin((x/*+random(-2,2)*/+frameCount*3)) +150 /*+random(-2,2)*/      ;return(y);};

var Ball = function(x,y,xv,yv,r,col){
    this.x = x;
    this.y = y;
    this.xv = xv; 
    this.yv = yv;
    this.r = r;
    this.col = col;
};

//draws the balls
Ball.prototype.draw = function() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, abs(this.r)*2, abs(this.r)*2);
};

//applys Velocity 
Ball.prototype.applyVel = function(){
    this.x += this.xv;
    this.y += this.yv;
};

//if the ball hits the wall, it bounces back
Ball.prototype.wallBounce = function(wallF){
    if(this.x >= width/2-this.r){
        this.x = width/2-1-this.r;
        this.xv *= -1*wallF;
        this.InteractionColor(1);
    }
    if(this.x <= -width/2+this.r){
        this.x = -width/2+1+this.r;
        this.xv *= -1*wallF;
        this.InteractionColor(1);
    }
    if(this.y >= height/2-this.r){
        this.y = height/2-1-this.r;
        this.yv *= -1*wallF;
        this.InteractionColor(1);
    }
    if(this.y <= -height/2+this.r){
        this.y =  -height/2+1+this.r;
        this.yv *= -1*wallF;
        this.InteractionColor(1);
    }
    if(dist(this.y,0,height/2,0)<this.r){
        this.applyNF();
    }
    
};

//lets you interact with the balls. this should be fun to change
Ball.prototype.mousePower = function(Power){
    if(mouseIsPressed){
        //mouseY=mouseY-height/2;
        var A = atan2(mouseY-height/2-this.y, mouseX-width/2-this.x);
        var D = dist(mouseX-width/2, mouseY-height/2, this.x, this.y);
        
        if(D < 100){
            this.xv = (mouseX-pmouseX);
            this.yv = (mouseY-pmouseY);
            
            this.yv-=0.9;
        }
        
        
        //this.xv -= cos(A)*(Power/D);
        //this.yv -= sin(A)*(Power/D);

    }
    
};

//Gravity
Ball.prototype.gravity = function(gravity,direction){
    this.xv += cos(direction)*gravity;
    this.yv += sin(direction)*gravity;
};

//floor bounce
Ball.prototype.FloorThing = function(groundFriction){
    var h = 0.0001;
    //SP = ( x-h , F(x-h) ) LP = ( x+h , F(x+h) )
    
    if(this.y >= F(this.x)-this.r){
        
        this.InteractionColor(1);
        
        var speed = sqrt(this.xv*this.xv+this.yv*this.yv);
        var dx = 2*h;
        var dy = F(this.x+h) - F(this.x-h);
        var d = sqrt(dx * dx + dy * dy);
        var xv = (dy/d)*2*speed;
        var yv = (-dx/d)*2*speed;
        this.y = F(this.x)-this.r;
        this.xv = xv*groundFriction;//xv
        this.yv = yv*groundFriction;//yv
        
    }

};

//color Manipulation
Ball.prototype.InteractionColor = function(Intensity){
    var R = red(this.col);
    var G = green(this.col);
    var B = blue(this.col);
    
    this.col = color(R,G+Intensity,B+Intensity);
};

var balls = [];
for(var i = 0; i < 300; i++){
    //this creates the parameters of the balls.(x,y,initial velocity in the x direction, initial velocity in the y direction, radius, color)
    var BV = new Ball(
        20+(i%20)*30-width/2,
        20+floor(i/20)*61-height/2,
        0,
        0, 
        6, 
        color(255,20,0,255));
    
    //some parameters you can try
    //random(-300, 300),random(-300, 200),random(-4,4), random(-4,4),random(5,15),random(0,255)
    balls.push(BV);
}

//so that balls don't just go through each other
Ball.prototype.ballBounce = function(bounceFriction){
    var I = this;
    
    
    for(var j = 0; j < balls.length; j++){
        var J = balls[j];
        if(J !== I){
            {
                if(dist(I.x,I.y,J.x,J.y) <= (I.r+J.r) ){
                    
                    I.InteractionColor(1);
                    
                    
                    var R1 = atan2(-I.yv,-I.xv);//y2-y1,x2-x1
                    var R2 = atan2( J.y-I.y,J.x-I.x);//between two Balls
                    var R3 = R2+R2-R1;
                    
                    var AV = sqrt(I.xv*I.xv+I.yv*I.yv)*bounceFriction;
                    
                    
                    I.x = J.x+cos(R2+180)*(I.r+J.r);
                    I.y = J.y+sin(R2+180)*(I.r+J.r);
                    
                    I.xv = cos(R3)*AV; 
                    I.yv = sin(R3)*AV;
                    
                }
            }//collisison
        }
    }
};


var draw = function() {
    background(161, 182, 189);
    
    pushMatrix();
    translate(width/2,height/2);
    var a = 1;
    strokeWeight(0.6);
    stroke(0);
    for(var x = -width/2; x< width/2; x+=a){
        //point(x, -F(x));
        line(x,F(x),x+a,F(x+a));
    }
    
    /*if(keyIsPressed === true){
        if(keyCode === RIGHT){
            
            
        }
    }*/
    
    //this is really important as it applys all the functions
    for(var i = 0; i < balls.length; i++){
        balls[i].InteractionColor(-1.6);
        balls[i].applyVel();
        balls[i].wallBounce(0.9);
        balls[i].ballBounce(0.9);
        balls[i].mousePower(500);
        balls[i].gravity(1,90);
        balls[i].FloorThing(0.4);
        //balls[i].field(2);
        balls[i].draw();
    }
    popMatrix();

};

