function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let valor = 0;

while (valor != -1) {
    valor = getInteiroAleatorio(-1, 100);
    console.log(`O numero sorteado foi ${valor}`);
}  
console.log('Até a Proxima!!');