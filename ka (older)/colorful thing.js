// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
var s = 1;
var camX = 0, camY = 0;

var Y = 0, X = 0;
var ymax = height;
var w2 = width/2, h2 = height/2;
var first = true;

var Key = {};
var KCode = {};
keyPressed = function(){
    Key[key] = true;
    KCode[keyCode] = true;
};
keyReleased = function(){
    Key[key] = false;
    KCode[keyCode] = false;
};
draw = function() {
    if(Key.q){s -= s/10;}
    if(Key.w){s += s/10;}
    if(KCode[LEFT]){camX -= 10;}
    if(KCode[RIGHT]){camX += 10;}
    if(KCode[UP]){camY -= 10;}
    if(KCode[DOWN]){camY += 10;}
    if(first || Key.q || Key.w || KCode[LEFT] || KCode[RIGHT] || KCode[UP] || KCode[DOWN]){
        first = false;
        for(var Y=0; Y<ymax; Y++){
            for(var X = 0; X<width; X++){
                var x = (X+camX-w2)*s;
                var y = (Y+camY-h2)*s;
                var n = (x-y)*x*(x-y*y)*x-y*(x*y-x-y);
                n = round(n);
                set(X, Y, color(-abs(n) ) );
            }
        }
    }
};
