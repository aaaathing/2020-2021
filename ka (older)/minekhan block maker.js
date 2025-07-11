// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
var pickPixelIcon = createGraphics(90,90,P2D);
pickPixelIcon.translate(10,10);
pickPixelIcon.background(0,0,0,0);
pickPixelIcon.fill(0);
pickPixelIcon.stroke(0);
pickPixelIcon.strokeWeight(5);
pickPixelIcon.beginShape();
pickPixelIcon.vertex(10,0);
pickPixelIcon.vertex(0,10);
pickPixelIcon.vertex(12,22);
pickPixelIcon.vertex(22,12);
pickPixelIcon.endShape();
pickPixelIcon.line(8,26,26,8);
pickPixelIcon.line(22,10,70,60);
pickPixelIcon.line(70,60,70,70);
pickPixelIcon.line(70,70,60,70);
pickPixelIcon.line(60,70,10,22);

var externals;

var blockPixels=[
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
  [
    color(204, 82, 204),color(204, 82, 204),color(30, 0, 255),color(204, 82, 204),color(204, 82, 204),color(84, 204, 92),color(204, 82, 204),color(204, 82, 204),color(204, 84, 114),color(204, 82, 204),color(204, 82, 204),color(255, 184, 255),color(204, 82, 204),color(204, 82, 204),color(204, 174, 84),color(204, 82, 204)
  ],
];

function resetPixels(){
  blockPixels = [];
  for(var y=0; y<16; y++){
    var row = [];
    for(var x=0; x<16; x++){
      row.push(color(0,0,0,1));
    }
    blockPixels.push(row);
  }
}

//settings
var stng={
  size:20,
  
  currentR:255,
  currentG:0,
  currentB:0,
  currentA:255,
  currentColor:color(255, 0, 0)
};

function renderBlockPixels(s, noGrid){
  rectMode(CORNER);
  if(!noGrid){
    stroke(0);
    strokeWeight(5);
    rect(0,0,16*s,16*s);
  }
  noStroke();
  for(var y=0; y<blockPixels.length; y++){
    var row = blockPixels[y];
    for(var x=0; x<row.length; x++){
      var theColor = row[x];
      if(!noGrid){
        fill((x+y) % 2 === 0 ? 230 : 255);
        rect(x*s, y*s, s,s);
      }
      
      fill(theColor);
      rect(x*s, y*s, s,s);
    }
  }
}
function calculatePixels(){
  if(mouseIsPressed){
    var size = stng.size;
    var blockX = Math.floor(mouseX/size);
    var blockY = Math.floor(mouseY/size);
    
    var block = blockPixels[blockY];
    if(block){
      if(block[blockX]){
        block[blockX] = stng.currentColor;
      }
    }
  }
}

var mouseIsClicked=false;
mouseClicked=function(){
  mouseIsClicked=true;
};
function button(x,y,w,h,label,icon){
  rectMode(CORNER);
  rect(x,y,w,h);
  
  fill(0, 0, 0);
  textAlign(CENTER,CENTER);
  text(label,x+(w/2), y+(h/2));
  if(icon){image(icon,x,y,w,h);}
  
  if((mouseX>x)&&(mouseX<(x+w))&&(mouseY>y)&&(mouseY<(y+h)) ){
    fill(0, 0, 0, 50);
    rect(x,y,w,h);
    if(icon){image(icon,x,y,w,h);}
    if(mouseIsClicked){
      mouseIsClicked=false;
      return true;
    }
  }
}

function slider(x,y,w, min,max, value){
  rectMode(CORNER);
  rect(x,y-3,w,6);
  
  var range = max-min;
  var valuePercent = value/range;
  var thumbX = (w * valuePercent) + x;
  
  if(mouseIsPressed){
    if((mouseX>x)&&(mouseX<(x+w))&&(mouseY<(y+10))&&(mouseY>(y-10)) ){
      var newX = mouseX - x - 2.5;
      var newValuePercent = newX/w;
      var newValue = Math.round(newValuePercent*range);
      
      value = newValue;
    }
  }
  
  rect(thumbX, y-10, 5, 20);
  
  return value;
}

function RGBSliders(){
  noStroke();
  
  rectMode(CORNER);
  
  fill(255, 0, 0);
  stng.currentR = slider(10,350,100, 0,255, stng.currentR);
  
  fill(0, 255, 0);
  stng.currentG = slider(130,350,100, 0,255, stng.currentG);
  
  fill(0, 0, 255);
  stng.currentB = slider(10,380,100, 0,255, stng.currentB);
  
  fill(191, 191, 191);
  stng.currentA = slider(130,380,100, 0,255, stng.currentA);
  
  if(mouseIsPressed){
    stng.currentColor = color(stng.currentR, stng.currentG, stng.currentB, stng.currentA);
  }
  
  fill(230);
  rect(240,340,25,25);
  rect(265,365,25,25);
  fill(stng.currentColor);
  rect(240,340,50,50);
}

function getPixelsAsBase36Pixel(){
  var pngString = get(0,0,16,16).toDataURL();
  
function getPixels(str) {
    var w = parseInt(str.substr(0, 2), 36);
    var h = parseInt(str.substr(2, 2), 36);
    var ccount = parseInt(str[4], 36);
    var colors = [];
    for (var i = 0; i < ccount; i++) {
        var num = parseInt(str.substr(5 + i * 7, 7), 36);
        colors.push([(num >>> 24) & 255, (num >>> 16) & 255, (num >>> 8) & 255, num & 255]);
    }

    var pixels = [];
    for (var i = 5 + ccount * 7; i < str.length; i++) {
        var num = parseInt(str[i], 36);
        pixels.push(colors[num][0], colors[num][1], colors[num][2], colors[num][3]);
    }
    return pixels;
}

var newUintArray = function(a) {
    if (typeof a === "number") {
        return new Array(a);
    } else {
        return a.slice();
    }
};

var atob = function(text) {
    /* Convert an ASCII base64 string into binary data. */
    var s = text.split(",");
    text = s[s.length - 1];  /* strip away header */
    if (false) {
        /* Avoiding some complaints on some browsers... */
        text = text.replace(/\s/g, "");
        if(!(/^[a-z0-9\+\/\s]+\={0,2}$/i.test(text)) || text.length % 4 > 0){
            throw new Error("Not a base64-encoded string.");
        }
        text = text.replace(/=/g, "");
    }
    
    var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a, b, c, x, y,
        result = [];
    for (var i = 0; i < text.length; result.push(a, b, c)){
        x = digits.indexOf(text[i++]);
        y = digits.indexOf(text[i++]);
        a = x << 2 | y >> 4;
        x = digits.indexOf(text[i++]);
        b = (y & 0x0f) << 4 | x >> 2;
        y = digits.indexOf(text[i++]);
        c = (x & 3) << 6 | y;
    }
    return result;
};

/*
 * Extracted from pdf.js
 * https://github.com/andreasgal/pdf.js
 *
 * Copyright (c) 2011 Mozilla Foundation
 *
 * Contributors: Andreas Gal <gal@mozilla.com>
 *               Chris G Jones <cjones@mozilla.com>
 *               Shaon Barman <shaon.barman@gmail.com>
 *               Vivien Nicolas <21@vingtetun.org>
 *               Justin D'Arcangelo <justindarc@gmail.com>
 *               Yury Delendik
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
var DecodeStream = (function() {

  var constructor = function() {
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = null;
  };

  constructor.prototype = {
    ensureBuffer: function /*decodestream_ensureBuffer*/(requested) {
      var buffer = this.buffer;
      //var current = buffer ? buffer.byteLength : 0;  xxxx
      var current = buffer ? buffer.length : 0;
      if (requested < current) {
        return buffer;
      }
      var size = 512;
      while (size < requested) {
        size <<= 1;
      }
      var buffer2 = newUintArray(size);
      for (var i = 0; i < current; ++i) {
        buffer2[i] = buffer[i];
      }
      this.buffer = buffer2;
      return this.buffer;
    },
    
    getBytes: function /*decodestream_getBytes*/(length) {
      var pos = this.pos;
      var end;

      if (length) {
        this.ensureBuffer(pos + length);
        var end = pos + length;

        while (!this.eof && this.bufferLength < end) {
          this.readBlock();
        }
        var bufEnd = this.bufferLength;
        if (end > bufEnd) {
          end = bufEnd;
        }
      } else {
        while (!this.eof) {
          this.readBlock();
        }
        var end = this.bufferLength;
      }

      this.pos = end;
      //return this.buffer.subarray(pos, end); xxxx
      return this.buffer.slice(pos, end);
    },
  };

  return constructor;
})();

var FlateStream = (function() {
  var error = function (e) {
    throw new Error(e);
  };
  
  var codeLenCodeMap = newUintArray( [
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
  ]);

  var lengthDecode = newUintArray( [
    0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a,
    0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f,
    0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073,
    0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102
  ]);

  var distDecode = newUintArray( [
    0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d,
    0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1,
    0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01,
    0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001
  ]);

  var fixedLitCodeTab = [newUintArray( [
    0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0,
    0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0,
    0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0,
    0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0,
    0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8,
    0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8,
    0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8,
    0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8,
    0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4,
    0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4,
    0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4,
    0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4,
    0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc,
    0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec,
    0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc,
    0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc,
    0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2,
    0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2,
    0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2,
    0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2,
    0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca,
    0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea,
    0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da,
    0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa,
    0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6,
    0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6,
    0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6,
    0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6,
    0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce,
    0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee,
    0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de,
    0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe,
    0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1,
    0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1,
    0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1,
    0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1,
    0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9,
    0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9,
    0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9,
    0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9,
    0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5,
    0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5,
    0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5,
    0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5,
    0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd,
    0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed,
    0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd,
    0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd,
    0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3,
    0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3,
    0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3,
    0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3,
    0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb,
    0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb,
    0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db,
    0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb,
    0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7,
    0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7,
    0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7,
    0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7,
    0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf,
    0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef,
    0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df,
    0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff
  ]), 9];

  var fixedDistCodeTab = [newUintArray( [
    0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c,
    0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000,
    0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d,
    0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000
  ]), 5];
  
  var constructor = function(bytes) {
    //var bytes = stream.getBytes();
    var bytesPos = 0;

    var cmf = bytes[bytesPos++];
    var flg = bytes[bytesPos++];
    if (cmf === -1 || flg === -1) {
      error('Invalid header in flate stream');
    }
    if ((cmf & 0x0f) !== 0x08) {
      error('Unknown compression method in flate stream');
    }
    if ((((cmf << 8) + flg) % 31) !== 0) {
      error('Bad FCHECK in flate stream');
    }
    if (flg & 0x20) {
      error('FDICT bit set in flate stream');
    }

    this.bytes = bytes;
    this.bytesPos = bytesPos;

    this.codeSize = 0;
    this.codeBuf = 0;

    DecodeStream.call(this);
  };

  constructor.prototype = Object.create(DecodeStream.prototype);

  constructor.prototype.getBits = function(bits) {
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var bytes = this.bytes;
    var bytesPos = this.bytesPos;

    var b;
    while (codeSize < bits) {
      if (typeof (b = bytes[bytesPos++]) === 'undefined') {
        error('Bad encoding in flate stream');
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & ((1 << bits) - 1);
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    this.bytesPos = bytesPos;
    return b;
  };

  constructor.prototype.getCode = function(table) {
    var codes = table[0];
    var maxLen = table[1];
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var bytes = this.bytes;
    var bytesPos = this.bytesPos;

    while (codeSize < maxLen) {
      var b;
      if (typeof (b = bytes[bytesPos++]) === 'undefined') {
        error('Bad encoding in flate stream');
      }
      codeBuf |= (b << codeSize);
      codeSize += 8;
    }
    var code = codes[codeBuf & ((1 << maxLen) - 1)];
    var codeLen = code >> 16;
    var codeVal = code & 0xffff;
    if (codeSize === 0 || codeSize < codeLen || codeLen === 0) {
      error('Bad encoding in flate stream');
    }
    this.codeBuf = (codeBuf >> codeLen);
    this.codeSize = (codeSize - codeLen);
    this.bytesPos = bytesPos;
    return codeVal;
  };

  constructor.prototype.generateHuffmanTable = function(lengths) {
    var n = lengths.length;

    // find max code length
    var maxLen = 0;
    for (var i = 0; i < n; ++i) {
      if (lengths[i] > maxLen) {
        maxLen = lengths[i];
      }
    }

    // build the table
    var size = 1 << maxLen;
    var codes = newUintArray(size);
    for (var len = 1, code = 0, skip = 2;
         len <= maxLen;
         ++len, code <<= 1, skip <<= 1) {
      for (var val = 0; val < n; ++val) {
        if (lengths[val] === len) {
          // bit-reverse the code
          var code2 = 0;
          var t = code;
          for (var i = 0; i < len; ++i) {
            code2 = (code2 << 1) | (t & 1);
            t >>= 1;
          }

          // fill the table entries
          for (var i = code2; i < size; i += skip) {
            codes[i] = (len << 16) | val;
          }
          ++code;
        }
      }
    }

    return [codes, maxLen];
  };

  constructor.prototype.readBlock = function() {
    var i;  /* hoisted by blyon */
    var repeat = function(stream, array, len, offset, what) {
      var repeat = stream.getBits(len) + offset;
      while (repeat-- > 0) {
        array[i++] = what;
      }
    };

    // read block header
    var hdr = this.getBits(3);
    if (hdr & 1) {
      this.eof = true;
    }
    hdr >>= 1;

    if (hdr === 0) { // uncompressed block
      var bytes = this.bytes;
      var bytesPos = this.bytesPos;
      var b;

      if (typeof (b = bytes[bytesPos++]) === 'undefined') {
        error('Bad block header in flate stream');
      }
      var blockLen = b;
      if (typeof (b = bytes[bytesPos++]) === 'undefined') {
        error('Bad block header in flate stream');
      }
      blockLen |= (b << 8);
      if (typeof (b = bytes[bytesPos++]) === 'undefined') {
        error('Bad block header in flate stream');
      }
      var check = b;
      if (typeof (b = bytes[bytesPos++]) === 'undefined') {
        error('Bad block header in flate stream');
      }
      check |= (b << 8);
      if (check !== (~blockLen & 0xffff)) {
        error('Bad uncompressed block length in flate stream');
      }
      this.codeBuf = 0;
      this.codeSize = 0;

      var bufferLength = this.bufferLength;
      var buffer = this.ensureBuffer(bufferLength + blockLen);
      var end = bufferLength + blockLen;
      this.bufferLength = end;
      for (var n = bufferLength; n < end; ++n) {
        if (typeof (b = bytes[bytesPos++]) === 'undefined') {
          this.eof = true;
          break;
        }
        buffer[n] = b;
      }
      this.bytesPos = bytesPos;
      return;
    }

    var litCodeTable;
    var distCodeTable;
    if (hdr === 1) { // compressed block, fixed codes
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr === 2) { // compressed block, dynamic codes
      var numLitCodes = this.getBits(5) + 257;
      var numDistCodes = this.getBits(5) + 1;
      var numCodeLenCodes = this.getBits(4) + 4;

      // build the code lengths code table
      var codeLenCodeLengths = Array(codeLenCodeMap.length);
      var i = 0;
      while (i < numCodeLenCodes) {
        codeLenCodeLengths[codeLenCodeMap[i++]] = this.getBits(3);
      }
      var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
      
      // build the literal and distance code tables
      var len = 0;
      var i = 0;
      var codes = numLitCodes + numDistCodes;
      var codeLengths = new Array(codes);
      while (i < codes) {
        var code = this.getCode(codeLenCodeTab);
        if (code === 16) {
          repeat(this, codeLengths, 2, 3, len);
        } else if (code === 17) {
          repeat(this, codeLengths, 3, 3, len = 0);
        } else if (code === 18) {
          repeat(this, codeLengths, 7, 11, len = 0);
        } else {
          codeLengths[i++] = len = code;
        }
      }

      litCodeTable = this.generateHuffmanTable(codeLengths.slice(0, numLitCodes));
      distCodeTable = this.generateHuffmanTable(codeLengths.slice(numLitCodes, codes));
    } else {
      error('Unknown block type in flate stream');
    }

    var buffer = this.buffer;
    var limit = buffer ? buffer.length : 0;
    var pos = this.bufferLength;
    while (true) {
      var code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 === 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      var code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      var len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      var dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (var k = 0; k < len; ++k, ++pos) {
        buffer[pos] = buffer[pos - dist];
      }
    }
  };

  return constructor;
})();
var pix = [];
var iWidth, iHeight;
/*
# MIT LICENSE
# Copyright (c) 2011 Devon Govett
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy of this 
# software and associated documentation files (the "Software"), to deal in the Software 
# without restriction, including without limitation the rights to use, copy, modify, merge, 
# publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons 
# to whom the Software is furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all copies or 
# substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
# BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
# DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var PNG = (function() {
    var APNG_BLEND_OP_OVER, APNG_BLEND_OP_SOURCE, APNG_DISPOSE_OP_BACKGROUND, APNG_DISPOSE_OP_NONE, APNG_DISPOSE_OP_PREVIOUS, makeImage, scratchCanvas, scratchCtx;
    
    var PNG = function(data) {
      var chunkSize, colors, delayDen, delayNum, frame, i, index, key, section, short, text, _i, _j, _ref;
      this.pos = 8;
      this.palette = [];
      this.imgData = [];
      this.transparency = {};
      this.animation = null;
      this.text = {};
      this.data = data = newUintArray(data);
      frame = null;
      
      var getColors = function() {
        switch (this.colorType) {
        case 0:
        case 3:
        case 4:
          return 1;
        case 2:
        case 6:
          return 3;
        }
      };
            
      var colorSpace = function() {
        switch (this.colors) {
        case 1:
          return 'DeviceGray';
        case 3:
          return 'DeviceRGB';
        }
      };
            
      var getSection = function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; _i < 4; i = ++_i) {
            _results.push(String.fromCharCode(this.data[this.pos++]));
          }
          return _results;
        };
        
      while (true) {
        chunkSize = this.readUInt32();
        section = getSection.call(this).join('');
        switch (section) {
          case 'IHDR':
            this.width = this.readUInt32();
            this.height = this.readUInt32();
            this.bits = this.data[this.pos++];
            this.colorType = this.data[this.pos++];
            this.compressionMethod = this.data[this.pos++];
            this.filterMethod = this.data[this.pos++];
            this.interlaceMethod = this.data[this.pos++];
            break;
          case 'acTL':
            this.animation = {
              numFrames: this.readUInt32(),
              numPlays: this.readUInt32() || Infinity,
              frames: []
            };
            break;
          case 'PLTE':
            this.palette = this.read(chunkSize);
            break;
          case 'fcTL':
            if (frame) {
              this.animation.frames.push(frame);
            }
            this.pos += 4;
            frame = {
              width: this.readUInt32(),
              height: this.readUInt32(),
              xOffset: this.readUInt32(),
              yOffset: this.readUInt32()
            };
            delayNum = this.readUInt16();
            delayDen = this.readUInt16() || 100;
            frame.delay = 1000 * delayNum / delayDen;
            frame.disposeOp = this.data[this.pos++];
            frame.blendOp = this.data[this.pos++];
            frame.data = [];
            break;
          case 'IDAT':
          case 'fdAT':
            if (section === 'fdAT') {
              this.pos += 4;
              chunkSize -= 4;
            }
            data = (frame ? frame.data : 0) || this.imgData;
            for (i = _i = 0; 0 <= chunkSize ? _i < chunkSize : _i > chunkSize; i = 0 <= chunkSize ? ++_i : --_i) {
              data.push(this.data[this.pos++]);
            }
            break;
          case 'tRNS':
            this.transparency = {};
            switch (this.colorType) {
              case 3:
                this.transparency.indexed = this.read(chunkSize);
                short = 255 - this.transparency.indexed.length;
                if (short > 0) {
                  for (i = _j = 0; 0 <= short ? _j < short : _j > short; i = 0 <= short ? ++_j : --_j) {
                    this.transparency.indexed.push(255);
                  }
                }
                break;
              case 0:
                this.transparency.grayscale = this.read(chunkSize)[0];
                break;
              case 2:
                this.transparency.rgb = this.read(chunkSize);
            }
            break;
          case 'tEXt':
            text = this.read(chunkSize);
            index = text.indexOf(0);
            key = String.fromCharCode.apply(String, text.slice(0, index));
            this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
            break;
          case 'IEND':
            if (frame) {
              this.animation.frames.push(frame);
            }
            this.colors = getColors.call(this);
            this.hasAlphaChannel = (_ref = this.colorType) === 4 || _ref === 6;
            colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
            this.pixelBitlength = this.bits * colors;
            this.colorSpace = colorSpace.call(this);
            this.imgData = newUintArray(this.imgData);
            return;
          default:
            this.pos += chunkSize;
        }
        this.pos += 4;
        if (this.pos > this.data.length) {
          throw new Error("Incomplete or corrupt PNG file");
        }
      }
      return;
    };

    PNG.prototype.read = function(bytes) {
      var i, _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= bytes ? _i < bytes : _i > bytes; i = 0 <= bytes ? ++_i : --_i) {
        _results.push(this.data[this.pos++]);
      }
      return _results;
    };

    APNG_DISPOSE_OP_NONE = 0;

    APNG_DISPOSE_OP_BACKGROUND = 1;

    APNG_DISPOSE_OP_PREVIOUS = 2;

    APNG_BLEND_OP_SOURCE = 0;

    APNG_BLEND_OP_OVER = 1;

    PNG.prototype.readUInt32 = function() {
      var b1, b2, b3, b4;
      b1 = this.data[this.pos++] << 24;
      b2 = this.data[this.pos++] << 16;
      b3 = this.data[this.pos++] << 8;
      b4 = this.data[this.pos++];
      return b1 | b2 | b3 | b4;
    };

    PNG.prototype.readUInt16 = function() {
      var b1, b2;
      b1 = this.data[this.pos++] << 8;
      b2 = this.data[this.pos++];
      return b1 | b2;
    };

    PNG.prototype.decodePixels = function(data) {
      var byte, c, col, i, left, length, p, pa, paeth, pb, pc, pixelBytes, pixels, pos, row, scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
      if (! data) {
        data = this.imgData;
      }
      if (data.length === 0) {
        return newUintArray(0);
      }
      data = new FlateStream(data);
      data = data.getBytes();
      pixelBytes = this.pixelBitlength / 8;
      scanlineLength = pixelBytes * this.width;
      pixels = newUintArray(scanlineLength * this.height);
      length = data.length;
      row = 0;
      pos = 0;
      c = 0;
      while (pos < length) {
        switch (data[pos++]) {
          case 0:
            for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
              pixels[c++] = data[pos++];
            }
            break;
          case 1:
            for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
              byte = data[pos++];
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              pixels[c++] = (byte + left) % 256;
            }
            break;
          case 2:
            for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              pixels[c++] = (upper + byte) % 256;
            }
            break;
          case 3:
            for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              pixels[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
            }
            break;
          case 4:
            for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              if (row === 0) {
                upper = upperLeft = 0;
              } else {
                upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
              }
              p = left + upper - upperLeft;
              pa = Math.abs(p - left);
              pb = Math.abs(p - upper);
              pc = Math.abs(p - upperLeft);
              if (pa <= pb && pa <= pc) {
                paeth = left;
              } else if (pb <= pc) {
                paeth = upper;
              } else {
                paeth = upperLeft;
              }
              pixels[c++] = (byte + paeth) % 256;
            }
            break;
          default:
          println("Oh Noes!!!");
            throw new Error("Invalid filter algorithm: " + data[pos - 1]);
        }
        row++;
      }
      return pixels;
    };

    PNG.prototype.decodePalette = function() {
      var c, i, length, palette, pos, ret, transparency, _i, _ref, _ref1;
      palette = this.palette;
      transparency = this.transparency.indexed || [];
      ret = newUintArray((transparency.length || 0) + palette.length);
      pos = 0;
      length = palette.length;
      c = 0;
      for (i = _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) {
        ret[pos++] = palette[i];
        ret[pos++] = palette[i + 1];
        ret[pos++] = palette[i + 2];
        ret[pos++] = (_ref1 = transparency[c++]) ? _ref1 : 255;
      }
      return ret;
    };

    PNG.prototype.copyToImageData = function(imageData, pixels) {
      var alpha, colors, data, i, input, j, k, length, palette, v, _ref;
      colors = this.colors;
      palette = null;
      alpha = this.hasAlphaChannel;
      if (this.palette.length) {
        palette = (_ref = this._decodedPalette) ? _ref : this._decodedPalette = this.decodePalette();
        colors = 4;
        alpha = true;
      }
      data = imageData.data || imageData;
      length = data.length;
      input = palette || pixels;
      i = j = 0;
      if (colors === 1) {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          v = input[k++];
          data[i++] = v;
          data[i++] = v;
          data[i++] = v;
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      } else {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      }
    };

    PNG.prototype.decode = function() {
      var ret = newUintArray(this.width * this.height * 4);
      this.copyToImageData(ret, this.decodePixels());
      return ret;
    };

    PNG.prototype.decodeFrames = function(ctx) {
      var frame, i, imageData, pixels, _i, _len, _ref, _results;
      if (!this.animation) {
        return;
      }
      _ref = this.animation.frames;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        frame = _ref[i];
        imageData = ctx.createImageData(frame.width, frame.height);
        pixels = this.decodePixels(newUintArray(frame.data));
        this.copyToImageData(imageData, pixels);
        frame.imageData = imageData;
        _results.push(frame.image = makeImage(imageData));
      }
      return _results;
    };

    PNG.prototype.render = function(canvas) {
      var ctx, data;
      if (canvas._png) {
        canvas._png.stopAnimation();
      }
      canvas._png = this;
      canvas.width = this.width;
      canvas.height = this.height;
      iWidth = this.width;
      iHeight = this.height;
      ctx = canvas.getContext("2d");
      if (this.animation) {
        this.decodeFrames(ctx);
        return this.animate(ctx);
      } else {
        data = ctx.createImageData(this.width, this.height);
        
        this.copyToImageData(data, this.decodePixels());
        for (var i = 0; i < data.data.length; i++) {
            var num = data.data[i];
            if ((i & 3) === 0) {
                pix.push(0);
            }
            var b = pix[i >> 2];
            num = (num >> 3) << 3; //Discord last 3 bits to reduce number of colors.
            pix[i >> 2] += num * pow(2, ((3 - (i & 3)) * 8)); 
        }
        return ctx.putImageData(data, 0, 0);
      }
    };

    /* convert this PNG into a Processing.js image */
    PNG.prototype.toImage = function() {
        var img = createGraphics(this.width,  this.height, JAVA2D);
        img.background(0, 0, 0, 0);
        var bits = img.get();
        var src = bits.sourceImg;
        this.render(src);
        img.image(bits, 0, 0);
        return img;
    };
    
    return PNG;
  })();

var binaryData = atob(pngString);
var png = new PNG(binaryData);
var img = png.toImage();

var colors = {};
pix.forEach(function(c) {
    colors[c] = true;
});
colors = Object.keys(colors).map(function(c) {
    return Number(c);
});
var comp = [];
pix.forEach(function(p, i) {
    comp[i] = colors.indexOf(p).toString(36);
});
var encodedString = iWidth.toString(36).padStart(2, "0") + iHeight.toString(36).padStart(2, "0");
encodedString += colors.length.toString(36);
encodedString += colors.map(function(c) {return c.toString(36).padStart(7, "0");}).join("");
encodedString += comp.join("");
println(encodedString);

// I am honored any time anybody uses my code for any purpose.
// Copy freely! All my programs are at
// https://www.khanacademy.org/profile/BobLyon/programs

}

function numberToColor(number) {
  var r = (number & 0xff0000) >> 16;
  var g = (number & 0x00ff00) >> 8;
  var b = (number & 0x0000ff);

 return [r,g,b];
}

var hoverColor;

var screen = "paint";

draw = function() {
  background(255, 255, 255);
  
  if(screen === "paint"){
    calculatePixels();
    renderBlockPixels(stng.size);
    
    RGBSliders();
    
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    if(button(300,350,90,40,"Generate Code")){
      background(255, 255, 255, 0);
      renderBlockPixels(1, true);
      getPixelsAsBase36Pixel();
    }
    fill(230);
    stroke(0, 0, 0);
    strokeWeight(2);
    if(button(330,300,60,40,"Erase All")){
      resetPixels();
    }
    
    fill(230);
    stroke(0, 0, 0);
    strokeWeight(2);
    if(button(360,260,30,30,"",pickPixelIcon)){
      screen = "pickPixel";
    }
  }else if(screen === "pickPixel"){
    renderBlockPixels(stng.size);
    
    var x = floor(mouseX / stng.size);
    var y = floor(mouseY / stng.size);
    
    if(blockPixels[y] && blockPixels[y][x]){
      hoverColor = blockPixels[y][x];
      if(mouseIsClicked){
        stng.currentColor = hoverColor;
        var c = numberToColor(hoverColor);
        stng.currentR = c[0];
        stng.currentG = c[1];
        stng.currentB = c[2];
        screen = "paint";
      }
    }
    
    fill(hoverColor);
    rect(20,340,40,40);
    
    fill(255);
    stroke(0, 0, 0);
    strokeWeight(2);
    if(button(310,350,80,40,"Cancel")){
      screen = "paint";
    }
  }
  
  mouseIsClicked=false;
};
