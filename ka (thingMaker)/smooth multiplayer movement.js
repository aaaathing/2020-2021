// From thingmaker ka account. https://www.khanacademy.org/profile/kaid_30538885139931647243460
var thing={x:0,y:0,nx:0,ny:0,vx:0,vy:0,s:0};
var lastUpdate=0;
draw= function() {
    lastUpdate++;
    if(lastUpdate>30){
        lastUpdate=0;
        thing.nx=mouseX;
        thing.ny=mouseY;
    }
    var dist = Math.hypot(thing.nx-thing.x,thing.ny-thing.y);
    //if(thing.s<dist){thing.s+=0.01;if(thing.s>dist){thing.s=dist;}}
    //if(thing.s>dist){thing.s-=0.01;if(thing.s<dist){thing.s=dist;}}
    thing.s=dist;
    if(thing.s){
        thing.vx=(thing.nx-thing.x)/thing.s;
        thing.vy=(thing.ny-thing.y)/thing.s;
    }
    thing.x+=thing.vx;
    thing.y+=thing.vy;
    background(255, 255, 255);
    fill(255, 0, 0);
    rect(thing.x,thing.y,10,10);
};
