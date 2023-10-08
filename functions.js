/*function somaNumeros(n1, n2){
    console.log(n1 + n2)
}

somaNumeros(4, 5)*/
function verificaMenorDez(num){
    return num <= 10
}
console.log(verificaMenorDez)
function verificaPar(num){
    if(verificaMenorDez(num)){
        if(num % 2 == 0){
            return 'Menor ou igual a dez e PAR'
        }
        else{
            return 'Menor ou igual a dez e IMPAR'
        }
    }
    else{
        return 'Maior que dez'
    }
}

console.log(verificaPar(9))