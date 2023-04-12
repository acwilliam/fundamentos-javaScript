const imprimirResult = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Aprovado com honras')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
            console.log('Recuperação')
            break
        case 4:
        case 3:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
            break
    }
}

imprimirResult(10);
imprimirResult(7);
imprimirResult(6);
imprimirResult(4);
imprimirResult(-1);