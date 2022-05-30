const potencia = function (base,exponente){
    let resultado = 1
    for ( let i = 0 ; i < exponente ; i++ ){
        resultado *= base
    }
    return resultado
}

module.exports = potencia