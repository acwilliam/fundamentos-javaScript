Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResult = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Aprovado com honras')
    } else if (7, 8.99) {
        console.log('aprovado')
    } else if (4, 6.99) {
        console.log('Recuperacao')
    } else if (0, 3.99) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResult(5.9);
