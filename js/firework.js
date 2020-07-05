
function Firework(px, py){

    this.hu = random(255);
    this.forma;
    if(random(1) < 0.10){
        this.forma = 1;
    }
    this.firework = new Particle(px, py, this.hu, true, 0, this.forma);
    this.exploto = false;
    this.particles = [];

    this.done = function(){
        if(this.exploto && this.particles.length === 0){
            return true;
        }else{
            return false;
        }
    }

    this.update = function(){
        if(!this.exploto){
            this.firework.applyForce(gravedad);
            this.firework.update();
            if(this.firework.vel.y >= 0){
                this.exploto = true;
                this.explota();
            }
        }
        for (var i = this.particles.length-1; i >= 0 ; i--) {
            this.particles[i].applyForce(gravedad);
            this.particles[i].update();
            if(this.particles[i].done()){
                this.particles.splice(i,1);
            }
        }

    }

    this.explota = function(){
        for (var i = 0; i < 100; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false, i, this.forma);
            this.particles.push(p);
        }
    }

    this.show = function(){
        if(!this.exploto){ 
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
}