// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
var randomthing=function(first,x,y){
var pt1=["Eat ","Get ","Figure out ","Tell them about ","Complain about ","Thank me for finding "];
var pt2=["dad's ","mom's ","your own ","the president's ","teacher's ","the ant's "];
var pt3=["favorite ","yummiest ","weirdest ","ugliest ","nicest ","luckiest ","worst "];
var pt4=["food","bubbles","toilet","thingy","shoes","clothes","house","hamburger","pet cat","housework","pens and pencils"];

var w1=pt1[round(random(0,pt1.length-1))];
var w2=pt2[round(random(0,pt2.length-1))];
var w3=pt3[round(random(0,pt3.length-1))];
var w4=pt4[round(random(0,pt4.length-1))];

var final=first+". "+w1+w2+w3+w4+".";

fill(0, 0, 0);
textSize(20);
text(final,x,y,400,1000);
};

fill(255, 0, 0);
textSize(50);
text("Things to do:",0,70);

for(var i=0;i<6;i++){
randomthing(i+1,10,i*50+100);
}