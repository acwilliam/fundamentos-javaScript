function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let valor = 0;

do {
    valor = getInteiroAleatorio(-1, 100);
    console.log(`O numero sorteado foi ${valor}`);
}  while (valor != -1)  
 
console.log('Até a Proxima!!');