// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
var textbox="Type anything here\n";
var what=0;
textFont(createFont("monospace"));
var speed=1;
var flash=function(){
        if(what>10){
            return String.fromCharCode(9644);
        }else{
            return"";
        }
    };
    
draw = function() {
    what+=speed;
    if(what>20){
        speed=-1;
    }if(what<1){
        speed=1;
    }
    
    
    
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(30);
    text(textbox+flash(),10,10,350,600);
};

var removeLastChar=function(string,n){
    var newstr="";
    for(var i=0;i<string.length-n;i++){
        newstr=newstr+string[i]+"";
    }
    return newstr;
};

keyPressed=function(){
    what=10;
    speed=1;
    
    textbox=textbox+""+String.fromCharCode(key);
    
    //println(keyCode);
    
    if(keyCode===8/*backspace*/){
        textbox=removeLastChar(textbox,2);
    }
    if(keyCode===16/*shift*/){
        textbox=removeLastChar(textbox,1);/*prevent the character for shift appearing*/
    }
};