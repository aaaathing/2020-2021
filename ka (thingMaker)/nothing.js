// From thingmaker ka account. https://www.khanacademy.org/profile/kaid_30538885139931647243460
var pixelSize = 10;

function generateHash(input) {
    //perform an xor operation to the input
    input ^= 43673267531;
    //multiply the input
    input *= 3109693265;
    //shift the input bits to the right 16 times, then perform xor
    input ^= input>>16;
    input *= 3654275742;
    //doing a second time will completely remove original bits of input from output
    input ^= input>>16;
    input *= 3616434425;
    //remove negative sign (while losing the first bit)
    input = input>>>1;
    //doule the number now that it is only 2^31 instead of 2^32
    input = input*2;
    //reduce to a double from 0 to 1
    return input/4294967295;
}

noStroke();

function nothing(i){
    i*=4294967295;
    i/=2;
    i<<=1;
    i/=3616434425;
    i^=i<<16;
    i/=3109693265;
    i^=43673267531;
    return i;
}

/*for (var x = 0; x < width; x += pixelSize) {
    for (var y = 0; y < height; y += pixelSize) {
        fill(generateHash((x+y*width)*3)*255,   //red
            generateHash((x+y*width)*3+1)*255,  //green
            generateHash((x+y*width)*3+2)*255); //blue
        rect(x, y, pixelSize, pixelSize);
    }
}*/
var thing=generateHash(12),thing2=nothing(thing),thing3=generateHash(thing2);
println(thing+"  "+thing2+"  "+thing3);

random();