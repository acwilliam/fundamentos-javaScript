function Carro (velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0;

    //this torna o metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }

        //this torna o metodo publico
    this.acelerar = function() {
        if(velocidadeAtual <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }
}

const uno = new Carro(100,5);
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());
const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());