var fireworks = [];
var letras = [];
var gravedad;
var fuente;
var bg;
var mensaje = "Feliz Año Nuevo!\nQue este año nuevo que inicia este\nlleno de salud, metas logradas y\nque tengas mucho exito y prosperidad\nen cualquier cosa que te propongas!";
var px = 240;
var py = 75;
var fuente;
var cont;
var tam = 24;
var aux = false;
var colour = '#b2ffd8';

function preload(){
    bg = loadImage("./img/fondo.jpg");
    fuente = loadFont("./fonts/Courgette-Regular.ttf");
}

function setup() {
    createCanvas(800, 500);
    //**************
    for (var k = 0; k < mensaje.length; k++) {
        letras.push(new Letra(mensaje.charAt(k), px, py, colour));
        if(mensaje.charAt(k) === '\n' && aux === false){
            aux = true;
            py += 75;
            px = 80;
        }else{
            if(mensaje.charAt(k) === '\n'){
                py += tam+6;
                px = 80;
            }else{
                px += tam-5;
            }
        }
    }
    cont = 0;

    gravedad = createVector(0, 0.2);
    textFont(fuente);
    textSize(tam);
}

function mousePressed(){
    if(mensaje.length === cont+1){
        fireworks.push(new Firework(mouseX, height));
        fireworks.push(new Firework(mouseX - 100, height));
        fireworks.push(new Firework(mouseX + 100, height));
    }
    return false;
}

function draw() {
    background(bg);
    noStroke();
    for(var j= 0; j <= cont; j++){
        letras[j].update();
        letras[j].show();
    }
    if(letras[cont].getAlpha() >= 50 && cont != letras.length-1){
        cont++;
    }
    if(mensaje.length === cont+1){

        //random contiene la probabilidad de que salga un cohete
        if (random(1) < 0.03) {
            fireworks.push(new Firework(random(width-50, width-750), random(height - 75, height - 130)));
        }
        for (var i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();
            if (fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
        }
        
    }
}

/*********************************************************************************************
 *Fireworks base thanks to Daniel Shiffman Tutorial - https://youtu.be/CKeyIbT3vXI 
 *********************************************************************************************/