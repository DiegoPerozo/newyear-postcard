//Objeto
function Letra(letra ,x ,y , colour){
    this.alpha = 0;
    this.letra = letra;
    this.colour = colour;
    this.px = x;
    this.py = y;

    this.update = function(){
        if(this.alpha < 200)
            this.alpha +=50;
    }

    this.show = function(){
        fill(this.colour);//, this.alpha);
        text(this.letra, this.px, this.py);
    }
    
    this.getAlpha = function(){
        return this.alpha;
    }

    this.getLetra = function(){
        return this.letra;
    }

    this.termino = function(letras, mensaje){
        if(mensaje.length === letas.length){
            return true;
        }else{
            return false;
        }
    }
}