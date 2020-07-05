

function Particle(x, y, hu, cohete, num, forma) {

    this.pos = createVector(x, y);
    this.cohete = cohete;
    this.lifespan = 255;
    this.hu = hu;
    this.forma = random(8, 5);
    this.countI = num;
    this.f = forma;

    if (this.cohete) {
        this.vel = createVector(0, random(-12, -7)); //-11 y -7
    } else {
        if(this.f === 1){
            var x1 = 16 * pow(sin(this.countI), 3);
            var y1 = 13 * cos(this.countI) - 5 * cos(2 * this.countI) - 2 * cos(3 * this.countI) - cos(4 * this.countI);
            this.vel = createVector(x1, -y1);
        }else{
            this.vel = p5.Vector.random2D();//Modificar para crear formas
            this.vel.mult(random(2, 12)); //Cambia la dispercion 
        }
    }
    this.acc = createVector(0, 0);

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.update = function () {
        if (!this.cohete) {
            this.vel.mult(0.9);
            this.lifespan -= 10;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.done = function () {
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function () {
        //colorMode(HSB);
        if (!this.cohete) {
            strokeWeight(2);
            fill(255); //this.lifespan no funciona 
            stroke(this.hu, 255, 255);
        } else {
            strokeWeight(4);
            stroke(this.hu, 255, 255);
        }
        if(this.cohete){
            point(this.pos.x, this.pos.y);
        }else{
            //noFill();
            //  point(this.pos.x, this.pos.y);
            star(this.pos.x, this.pos.y, 2, 4, this.forma);  //Forma Cambiante random(8, 5)
        }
    }

    function star(x, y, radius1, radius2, npoints) {
        var angle = TWO_PI / npoints;
        var halfAngle = angle / 2.0;
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = x + cos(a) * radius2;
            var sy = y + sin(a) * radius2;
            vertex(sx, sy);
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}