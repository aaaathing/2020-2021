// From thingmaker ka account. https://www.khanacademy.org/profile/kaid_30538885139931647243460
//original: https://www.khanacademy.org/computer-programming/image-capturing-wip/4945706406068224

var px = mouseX;
var py = mouseY;
var imgSz = 80;

    var img = get(0, 0, 600, 600);
    

var dead = false;

var player = {
    x: px,
    y: py,
    img: get(0, 0, 600, 600),
    draw: function(){
        
    fill(0, 13, 255);
    ellipse(this.x, this.y, 60, 60); 
    }
};

function game(){
   fill(255, 255, 255);
    rect(0, 0, width, height);
    ellipseMode(CORNER);
    stroke(255, 255, 255);
    strokeWeight(0.01);
    player.draw();
}
draw = function() {
    imageMode(CENTER);
    if (!dead){
    background(255, 255, 255);
    stroke(255, 0, 0);
    strokeWeight(20);
    if (!dead){
     px = mouseX;
     py = mouseY;
     player.x = px;
     player.y = py;
    }
    
    }
    if (dead){
        image(player.img, width/2, 300, 80, 80);
        textSize(30);
        fill(0);
        textFont(createFont("Arial Bold"));
        text("You ded lol", 113, 45);
    }
    if(!dead){game();}
    if (!dead && (px < 20 || px>width-20 || py < 20 || py > height-20)){
        dead = true;
        player.img = get(0, 0, 600, 600);
    }
    
};

    mouseX = 200;
    mouseY = 200;