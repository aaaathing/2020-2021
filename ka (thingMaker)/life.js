// From thingmaker ka account. https://www.khanacademy.org/profile/kaid_30538885139931647243460
//jshint esnext: true
const w=40,h=40;
let grid=(new Array(w)).fill(0).map(function(){return (new Array(h)).fill(0).map(random);});
function get(x,y){
    return grid[x-Math.floor(x/w)*w][y-Math.floor(y/h)*h];
}
function run(){
    let t,u,d,l,r,n,target;
    for(let x=0;x<w;x++){
        for(let y=0;y<h;y++){
            t=grid[x][y];
            u=get(x,y-1);
            d=get(x,y+1);
            l=get(x-1,y);
            r=get(x+1,y);
            n=Math.round(u)+Math.round(d)+Math.round(l)+Math.round(r);
            if(Math.round(t)){
                if(n<2||n>3){target=0;}
            }else{
                if(n===3){target=1;}
            }
            if(t<target){t+=0.1;}
            if(t>target){t-=0.1;}
            grid[x][y]=Math.max(Math.min(t,1),0);
        }
    }
}
draw= function() {
    run();
    
    noStroke();
    for(let x=0;x<w;x++){
        for(let y=0;y<h;y++){
            fill(grid[x][y]*255);
            rect(x*10,y*10,10,10);
        }
    }
};