// from thingmaker old ka account https://www.khanacademy.org/profile/kaid_1192481548237719607966796
// A port of Notch's program, found here:
// http://jsfiddle.net/uzMPU/
(function() {

angleMode = "radians";

var ctx;
var pixels;
var canvas;
var pimg;
var initDone = false;

var w = 200;
var h = 200;

var dataMap = [];
dataMap.length = 64 * 64 * 64;
var texmap = [];
texmap.length = 16 * 16 * 3 * 16;

var renderMinecraft = function() {
    var xRot = sin(millis() % 10000 / 10000 * PI * 2) * 0.4 + PI / 2;
    var yRot = cos(millis() % 10000 / 10000 * PI * 2) * 0.4;
    var yCos = cos(yRot);
    var ySin = sin(yRot);
    var xCos = cos(xRot);
    var xSin = sin(xRot);

    var ox = 32.5 + millis() % 10000 / 10000 * 64;
    var oy = 32.5;
    var oz = 32.5;

    for ( var x = 0; x < w; x++) {
        var ___xd = (x - w / 2) / h;
        for ( var y = 0; y < h; y++) {
            var __yd = (y - h / 2) / h;
            var __zd = 1;

            var ___zd = __zd * yCos + __yd * ySin;
            var _yd = __yd * yCos - __zd * ySin;

            var _xd = ___xd * xCos + ___zd * xSin;
            var _zd = ___zd * xCos - ___xd * xSin;

            var col = 0;
            var br = 255;
            var ddist = 0;

            var closest = 32;
            for ( var d = 0; d < 3; d++) {
                var dimLength = _xd;
                if (d === 1) {
                    dimLength = _yd;
                }
                if (d === 2) {
                    dimLength = _zd;
                }

                var ll = 1 / (dimLength < 0 ? -dimLength : dimLength);
                var xd = (_xd) * ll;
                var yd = (_yd) * ll;
                var zd = (_zd) * ll;

                var initial = ox - (ox | 0);
                if (d === 1) {
                    initial = oy - (oy | 0);
                }
                if (d === 2) {
                    initial = oz - (oz | 0);
                }
                if (dimLength > 0) {
                    initial = 1 - initial;
                }

                var dist = ll * initial;

                var xp = ox + xd * initial;
                var yp = oy + yd * initial;
                var zp = oz + zd * initial;

                if (dimLength < 0) {
                    if (d === 0) {
                        xp--;
                    }
                    if (d === 1) {
                        yp--;
                    }
                    if (d === 2) {
                        zp--;
                    }
                }

                while (dist < closest) {
                    var tex = dataMap[(zp & 63) << 12 | (yp & 63) << 6 | (xp & 63)];

                    if (tex > 0) {
                        var u = ((xp + zp) * 16) & 15;
                        var v = ((yp * 16) & 15) + 16;
                        if (d === 1) {
                            u = (xp * 16) & 15;
                            v = ((zp * 16) & 15);
                            if (yd < 0) {
                                v += 32;
                            }
                        }

                        var cc = texmap[u + v * 16 + tex * 256 * 3];
                        if (cc > 0) {
                            col = cc;
                            ddist = 255 - ((dist / 32 * 255) | 0);
                            br = 255 * (255 - ((d + 2) % 3) * 50) / 255;
                            closest = dist;
                        }
                    }
                    xp += xd;
                    yp += yd;
                    zp += zd;
                    dist += ll;
                }
            }

            var r = ((col >> 16) & 0xff) * br * ddist / (255 * 255);
            var g = ((col >> 8) & 0xff) * br * ddist / (255 * 255);
            var b = ((col) & 0xff) * br * ddist / (255 * 255);// + (255 -

            pixels.data[(x + y * w) * 4 + 0] = r;
            pixels.data[(x + y * w) * 4 + 1] = g;
            pixels.data[(x + y * w) * 4 + 2] = b;
        }
    }
};

var init = function() {
    var i, x, y, z, xd, yd, zd;

    for (i = 1; i < 16; i++) {
        var br = 255 - ((random(1) * 96) | 0);
        for (y = 0; y < 16 * 3; y++) {
            for (x = 0; x < 16; x++) {
                var color = 0x966C4A;
                if (i === 4) {
                    color = 0x7F7F7F;
                }
                if (i !== 4 || ((random(1) * 3) | 0) === 0) {
                    br = 255 - ((random(1) * 96) | 0);
                }
                if ((i === 1 && y < (((x * x * 3 + x * 81) >> 2) & 3) + 18)) {
                    color = 0x6AAA40;
                } else if ((i === 1 && y < (((x * x * 3 + x * 81) >> 2) & 3) + 19)) {
                    br = br * 2 / 3;
                }
                if (i === 7) {
                    color = 0x675231;
                    if (x > 0 && x < 15 && ((y > 0 && y < 15) || (y > 32 && y < 47))) {
                        color = 0xBC9862;
                        xd = (x - 7);
                        yd = ((y & 15) - 7);
                        if (xd < 0) { 
                            xd = 1 - xd;
                        }
                        if (yd < 0) {
                            yd = 1 - yd;
                        }
                        if (yd > xd){
                            xd = yd;
                        }

                        br = 196 - ((random(1) * 32) | 0) + xd % 3 * 32;
                    } else if (((random(1) * 2) | 0) === 0) {
                        br = br * (150 - (x & 1) * 100) / 100;
                    }
                }

                if (i === 5) {
                    color = 0xB53A15;
                    if ((x + (y >> 2) * 4) % 8 === 0 || y % 4 === 0) {
                        color = 0xBCAFA5;
                    }
                }
                if (i === 9) {
                    color = 0x4040ff;
                }
                var brr = br;
                if (y >= 32) {
                    brr /= 2;
                }

                if (i === 8) {
                    color = 0x50D937;
                    if (((random(1) * 2) | 0) === 0) {
                        color = 0;
                        brr = 255;
                    }
                }

                var col = (((color >> 16) & 0xff) * brr / 255) << 16 | (((color >> 8) & 0xff) * brr / 255) << 8 | (((color) & 0xff) * brr / 255);
                texmap[x + y * 16 + i * 256 * 3] = col;
            }
        }
    }

    for (x = 0; x < 64; x++) {
        for (y = 0; y < 64; y++) {
            for (z = 0; z < 64; z++) {
                i = z << 12 | y << 6 | x;
                yd = (y - 32.5) * 0.4;
                zd = (z - 32.5) * 0.4;
                dataMap[i] = (random(1) * 16) | 0;
                if (random(1) > sqrt(sqrt(yd * yd + zd * zd)) - 0.8) {
                    dataMap[i] = 0;
                }
            }
        }
    }

    pimg = createImage(w, h, 1);
    canvas = pimg.sourceImg;
    ctx = canvas.getContext("2d");
    pixels = ctx.createImageData(w, h);

    for (i = 0; i < w * h; i++) {
        pixels.data[i * 4 + 3] = 255;
    }
    initDone = true;
};

draw = function() {
    if (initDone) {
        renderMinecraft();
        ctx.putImageData(pixels, 0, 0);
        image(pimg, 0, 0, 400, 400);
    } else {
        init();
    }
};

})();