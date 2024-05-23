
const numeros = [1,2,3,4,5,6,7,8,9]

function parOImpar(array){
    for (let i = 0; i < numeros.length; i++){
        let resultat = numeros[i] % 2 == 0 ? `${numeros[i]} parell` : `${numeros[i]} imparell`
        console.log(resultat)
    }
}

parOImpar(numeros)
