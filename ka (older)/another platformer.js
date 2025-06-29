// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
/**
The original is here: https://www.khanacademy.org/computer-programming/platformer-tutorial/6532143895756800

*/

var levels=[
  [
    "-------l",
    "|p ||||",
    "|-  || ",
    "||  |  ",
    "|| -|---",
    "|| ||||",
    "||  ||",
    "|     ",
    "|-    ",
    "||----@"
  ],
  [
    "p",
    "-----------",
    " ||||||||||",
    "  ||||||||",
    "  |||||||",
    "   |||||",
    "   ||||",
    "    ||",
    "     |"
  ]
];
var blocks; //define later
var update; //define later

var level = 0; //level number
var level_map; //used in update()

var block_size = 45;
var current_level=0;

function collide(obj1, obj2) {
    return  obj1.x - obj2.x < obj2.w &&
        obj2.x - obj1.x < obj1.w &&
        obj1.y - obj2.y < obj2.h &&
        obj2.y - obj1.y < obj1.h;// Calculates whether or not the objects are touching eachother.
}


var input = {};
keyPressed=function(){
    input[keyCode] = true;
};
keyReleased=function(){
    input[keyCode] = false;
};


var player = {
  x:0,
  y:0,
  prevX:this.x,
  prevY:this.y,
  w:30,
  h:30,
  yVel:0,
  xVel:0,
  canJump:false,
  
  
  display: function() {
    // Draw the Player
    fill(255, 158, 158);
    rect(this.x, this.y, this.w, this.h);
  },
  update: function() {
    // Updates the previous x & y of the player pf the player
    this.prevX = this.x;
    this.prevY = this.y;
    
    this.y += this.yVel;// Move the player down according to how much gravity there is.
    this.yVel += 0.5;// Accelerate the gravity
    
    /**Y Collsions*/
    for(var i = 0; i < blocks.length; i ++) {
        
        if(collide(this, blocks[i]) && blocks[i].type === 'lava') {
            update();// Reset Level
        }
            
        // If the player and the block make contact, then handle y collisions
        if(collide(this, blocks[i])) {
            
            this.yVel = 0;// Set gravity to zero.
            
            if(this.prevY < blocks[i].prevY) {
                // If the player is on top of the block, tell the computer the player can jump.
                this.canJump = true;
                
                // If the blocks is a trampoline, make the player jump.
                if(blocks[i].type === "trampoline") {
                    this.yVel -= 10;
                }
            }
            
            
            this.y = (this.prevY < blocks[i].prevY) ? blocks[i].y - this.h : blocks[i].y + blocks[i].h;
            
        }
    }
    
    /**IMPORTANT! Do left & right movement BEFORE handling x collisions**/
    if(input[LEFT]) {
        // Fairly simple, if the player is pressing the left arrow key, move left
        this.xVel -= 1;
    }
    if(input[RIGHT]) {
        // If the right arroy key is being pressed, move right.
        this.xVel += 1;
    }
    this.xVel *= 0.85;
    this.x += this.xVel;
    
    /* Okay, do x collisions basically the same as y collisions, subsituting 'x' for 'y' and 'w' for 'h'
    Don't set the "gravity" to zero, and don't set canJump to true.
    */
    for(var i = 0; i < blocks.length; ++ i) { 
        if(collide(this, blocks[i]) && blocks[i].type === 'lava') {
            update();// Reset the level
        }
        
        if(collide(this, blocks[i])) {
            this.x = (this.prevX < blocks[i].prevX) ? blocks[i].x - this.w : blocks[i].x + blocks[i].h;
        }
    }
    // If the player is pressing the up key, and if "this.canJump" is true, then jump.
    if(input[UP] && this.canJump) {
        this.yVel = -10;// Set the gravity to a negative number.
    }
    this.canJump = false;// Set "canJump" to false(the player could fly, and do air-jumps, otherwise)
  }
};


function Block(x, y, type) {
    this.x = x;// Transfer the x argument into the object
    this.y = y;// Transfer the y argument into the object
    this.w = block_size + 0.5;// Defines the block width
    this.h = block_size + 0.5;// Defines the block height
    this.type = type;// Transfer the type argument into the object
    this.prevX = x;// Defines the previous x
    this.prevY = y;// Defines the previous y
    this.shade = random(0, 100);// Decides randomly the shade of each block
}
Block.prototype.display = function() {
        this.prevX = this.x;// Updates the previous x
        this.prevY = this.y;// Updates the previous y    
        
        // Draw the block according to the type.(Note: If the only way you distinguish between blocks is color, then using case and break isn't the most effecient way to do it.)        
        noStroke();
        switch(this.type) {
            case "grass":
                fill(13, 255, 0, this.shade+155);
                rect(this.x, this.y, this.w, this.h);
                break;
            case "dirt":
                fill(148, 118, 0);
                rect(this.x, this.y, this.w, this.h);
                break;
            case "lava":
                fill(255, 0, 0, this.shade + 155);
                rect(this.x, this.y, this.w, this.h);
                break;
            case "trampoline":
                fill(250, 10 + this.shade, 250);
                rect(this.x, this.y, this.w, this.h);
        }
};


var portal = {
    x: 0,
    y: 0,
    w: 30, 
    h: 30,
    display: function() {
        // Draw the portal
        fill(sin(frameCount * 2) * 255, cos(frameCount * 5) * 255, 255);
        rect(this.x, this.y, this.w, this.h);
        // Handle Collisions
        if(collide(this, player)) {
            if(level < levels.length-1) {
                level ++;// Change the level number
                update();// Update the level map.
            } else {
                // The go to win scene code.
            }
        }
    },
};


// Create an object to store the character to name for each game item/entity.
var level_key_index = {
    '-':'grass',
    '|':'dirt',
    'l':'lava',
    'p':'player',
    '@':'portal',
    '_': 'trampoline',
};


update = function(){
    /**Convert the level array into the actual level**/
    blocks = [];// Clear the blocks array
    level_map = levels[level];// Update the 'level_map' to the current level
    
    // Create a nested for loop
    for(var i = 0; i < level_map.length; ++ i) {
        for(var j = 0; j < level_map[i].length; ++ j) {
            switch(level_key_index[level_map[i][j]]) {
                case "player":
                    player.x = 15/2 + j * block_size;// Set the x location of the player
                    player.y = 15/2 + i * block_size;// Set the y location of the player
                    player.xVel=0;
                    player.yVel=0;
                break;
                case "portal":
                    portal.x = 15 / 2 + j * block_size;// Set the x location of the portal
                    portal.y = i* block_size;// Set the y location of the portal
                break;
                default:
                    // If level_map[i][j] isn't a space, don't push a block into the array
                    if(level_map[i][j] !== " ") {
                        blocks.push(new Block(j * block_size, i * block_size, level_key_index[level_map[i][j]]));// Add in a new block.
                    }
            }
        }
    }

};

var cam={
    x:0,
    y:0
};


update();


draw = function() {
    background(255);
    cam.x = lerp(cam.x, width/2-20/2 - player.x, 0.1);// Update the camera's x position
    cam.y = lerp(cam.y, height/2-20/2 - player.y, 0.1);// Update the camera's y position
    pushMatrix();
    translate(cam.x, cam.y);// Translate the screen based off the camera's x and y
    for(var i = 0; i < blocks.length; ++ i) {
        blocks[i].display();// Draw all the blocks
    }
    player.display();// Draw the player
    player.update();// Update the player
    
    portal.display();// Display the portal.
    popMatrix();
    
    /* Have the level reload when the player falls down too far */
    if(player.y > 2000) {
        update();
    }
    
    textFont(createFont("monospace"), 12);
    // Some stats
    fill(200, 200, 0);
    text("x: "+floor(player.x)+" | y:"+floor(player.y)+" | y-vel: " + floor(player.yVel)+" | x-vel: " + floor(player.xVel)+" | \nlevel " + (level+1)+"/"+levels.length+" | FPS: "+floor(this.__frameRate), 4, 17);  
    // The level map
    textSize(20);

};