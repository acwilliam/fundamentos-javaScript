const notas = [6.1, 7.8, 9.5, 8.9, 10]

for ( i in notas) {
    console.log(`O indice ${i} de notas ${notas[i]}`);
}

const pessoa = {
    nome: 'Ana',
    idade: 25,
    peso: 90,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}



for (let i in pessoa) {
    if (typeof pessoa[i] === 'object') { // Verifica se a propriedade é um objeto
        for (let j in pessoa[i]) {
            console.log(`${i}.${j} = ${pessoa[i][j]}`);
        }
    } else {
        console.log(`${i} = ${pessoa[i]}`);
    }
}


