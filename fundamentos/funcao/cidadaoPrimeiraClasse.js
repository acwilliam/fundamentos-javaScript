//função de alta ordem - High orden function
//função de alta ordem - High orden function


//forma literal
function fun1() {

}

//voce pode armezenar a função em uma variavel
const fun2 = function () {}


//armazena dentro do array
const array = [function (a,b) {return a+b}, fun1, fun2]
console.log(array[0](5,6));

//armazena em um atrubuto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())


//passar a função como parametro
function run(fn){ 
    fn();
}

run(function () {console.log('Executando..')})

//funcao pode retonrar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(2,3)(4);
const cincoMais = soma(2,3)
cincoMais(4)