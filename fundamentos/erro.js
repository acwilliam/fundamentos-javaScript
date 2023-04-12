function tratarErroElancar(error) {
    //throw new Error('Não foi possível se aceptar o objeto')
    //throw 10
    //throw 'message'
    //throw true
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date()
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!');
    }catch(e) {
        tratarErroElancar(e)
    } finally {
        console.log('Fim do try')
    }


}

const obj = { nome: 'William' }

imprimirNomeGritado(obj);