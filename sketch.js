// noise field -

var contador = 0;
var dato = 1;

var ruido_inc = 0.004;
var density = 30;
var znoise = 0.0;

var tzontli = [];

function preload() {

    tzontli[1] = loadImage("img/tzontli_1.svg");
    tzontli[2] = loadImage("img/tzontli_2.svg");
    tzontli[3] = loadImage("img/tzontli_3.svg");
    tzontli[4] = loadImage("img/tzontli_4.svg");
    tzontli[5] = loadImage("img/tzontli_5.svg");
    tzontli[6] = loadImage("img/tzontli_6.svg");
    tzontli[7] = loadImage("img/tzontli_7.svg");

}


function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    //background(0);

    contador = contador + dato;

    if (contador <= 0) {
        dato = 0.5;
        contador += 0.5;
    }


    if (contador >= 100) {
        dato = -0.5;
        contador -= 0.5;
    }


    noiseField();



    imageMode(CENTER);

    var ruidoC = 0.0004;
    var posC = 100 + noise(millis() * ruidoC) * 70;

    var ruidoC1 = 0.00001;
    var posC1 = 100 + noise(millis() * ruidoC) * 100;


    let jump = 120;



    //scale(posC);

    image(tzontli[1], 100, 700, posC, posC);
    image(tzontli[2], 100 + jump, 700, posC1, posC1);
    image(tzontli[3], 100 + jump * 2, 700, posC, posC);
    image(tzontli[4], 100 + jump * 3, 700, posC1, posC1);
    image(tzontli[5], 100 + jump * 4, 700, posC, posC);
    image(tzontli[6], 100 + jump * 5, 700, posC1, posC1);
    image(tzontli[7], 100 + jump * 6, 700, posC, posC);
    image(tzontli[1], 100 + jump * 7, 700, posC1, posC1);
    image(tzontli[2], 100 + jump * 8, 700, posC, posC);
    image(tzontli[3], 100 + jump * 9, 700, posC1, posC1);

    image(tzontli[7], 100, 600, posC, posC);
    image(tzontli[1], 100 + jump, 600, posC1, posC1);
    image(tzontli[2], 100 + jump * 2, 600, posC, posC);
    image(tzontli[3], 100 + jump * 3, 600, posC1, posC1);
    image(tzontli[4], 100 + jump * 4, 600, posC, posC);
    image(tzontli[5], 100 + jump * 5, 600, posC1, posC1);
    image(tzontli[6], 100 + jump * 6, 600, posC, posC);
    image(tzontli[7], 100 + jump * 7, 600, posC1, posC1);
    image(tzontli[1], 100 + jump * 8, 600, posC, posC);
    image(tzontli[2], 100 + jump * 9, 600, posC1, posC1);

    image(tzontli[6], 100, 500, posC, posC);
    image(tzontli[7], 100 + jump, 500, posC1, posC1);
    image(tzontli[1], 100 + jump * 2, 500, posC, posC);
    image(tzontli[2], 100 + jump * 3, 500, posC1, posC1);
    image(tzontli[3], 100 + jump * 4, 500, posC, posC);
    image(tzontli[4], 100 + jump * 5, 500, posC1, posC1);
    image(tzontli[5], 100 + jump * 6, 500, posC, posC);
    image(tzontli[6], 100 + jump * 7, 500, posC1, posC1);
    image(tzontli[7], 100 + jump * 8, 500, posC, posC);
    image(tzontli[1], 100 + jump * 9, 500, posC1, posC1);

    image(tzontli[5], 100, 400, posC, posC);
    image(tzontli[6], 100 + jump, 400, posC1, posC1);
    image(tzontli[7], 100 + jump * 2, 400, posC, posC);
    image(tzontli[1], 100 + jump * 3, 400, posC1, posC1);
    image(tzontli[2], 100 + jump * 4, 400, posC, posC);
    image(tzontli[3], 100 + jump * 5, 400, posC1, posC1);
    image(tzontli[4], 100 + jump * 6, 400, posC, posC);
    image(tzontli[5], 100 + jump * 7, 400, posC1, posC1);
    image(tzontli[6], 100 + jump * 8, 400, posC, posC);
    image(tzontli[7], 100 + jump * 9, 400, posC1, posC1);

    image(tzontli[4], 100, 300, posC, posC);
    image(tzontli[5], 100 + jump, 300, posC1, posC1);
    image(tzontli[6], 100 + jump * 2, 300, posC, posC);
    image(tzontli[7], 100 + jump * 3, 300, posC1, posC1);
    image(tzontli[1], 100 + jump * 4, 300, posC, posC);
    image(tzontli[2], 100 + jump * 5, 300, posC1, posC1);
    image(tzontli[3], 100 + jump * 6, 300, posC, posC);
    image(tzontli[4], 100 + jump * 7, 300, posC1, posC1);
    image(tzontli[5], 100 + jump * 8, 300, posC, posC);
    image(tzontli[6], 100 + jump * 9, 300, posC1, posC1);

    image(tzontli[3], 100, 200, posC, posC);
    image(tzontli[4], 100 + jump, 200, posC1, posC1);
    image(tzontli[5], 100 + jump * 2, 200, posC, posC);
    image(tzontli[6], 100 + jump * 3, 200, posC1, posC1);
    image(tzontli[7], 100 + jump * 4, 200, posC, posC);
    image(tzontli[1], 100 + jump * 5, 200, posC1, posC1);
    image(tzontli[2], 100 + jump * 6, 200, posC, posC);
    image(tzontli[3], 100 + jump * 7, 200, posC1, posC1);
    image(tzontli[4], 100 + jump * 8, 200, posC, posC);
    image(tzontli[5], 100 + jump * 9, 200, posC1, posC1);

    image(tzontli[2], 100, 100, posC, posC);
    image(tzontli[3], 100 + jump, 100, posC1, posC1);
    image(tzontli[4], 100 + jump * 2, 100, posC, posC);
    image(tzontli[5], 100 + jump * 3, 100, posC1, posC1);
    image(tzontli[6], 100 + jump * 4, 100, posC, posC);
    image(tzontli[7], 100 + jump * 5, 100, posC1, posC1);
    image(tzontli[1], 100 + jump * 6, 100, posC, posC);
    image(tzontli[2], 100 + jump * 7, 100, posC1, posC1);
    image(tzontli[3], 100 + jump * 8, 100, posC, posC);
    image(tzontli[4], 100 + jump * 9, 100, posC1, posC1);



    // image(tzontli[0], x * jump1 + 10, y * jump + 17, 140, 140);


}


function noiseField() {
    // noise field _
    push();

    var xnoise = 200;
    var ynoise = 200;

    for (var y = 0; y < height; y += density) {
        for (var x = 0; x < width; x += density) {
            var n = noise(xnoise, ynoise, znoise) * 255;
            noStroke();
            //fill(contador, n, contador);
            //fill(50, n, 200);
            fill(n-100, n-100, n-100);
            //fill(255, 178, n);

            rect(x, y, density, density);
            xnoise += ruido_inc;
        }
        xnoise += ruido_inc;
        ynoise += ruido_inc;
    }
    znoise += ruido_inc;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}