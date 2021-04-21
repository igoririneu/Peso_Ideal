// peso?


// Cálculo do IMC - (Peso / Altura)².
/* IMC - CLASSIFICAÇÃO:
Menor que 18.5 - Abaixo do peso ;
Entre 18.5 e 24.9 - Peso normal ;
Entre 25.0 e 29.9 - Pré-obesidade ;
Entre 30.0 e 34.9 - Obesidade Grau 1 ;
Entre 35.0 e 39.9 - Obesidade Grau 2 ;
Acima de 40 - Obesidade Grau 3. */

// Meta - Quantos kg deve-se ganhar ou perder para se chegar no peso ideal?


let inputPeso = document.getElementById("peso");
let inputAltura = document.getElementById("altura")

let resultado = document.getElementById("resultado")


function calcular() {

    let peso = inputPeso.value
    let altura = inputAltura.value

    let imc = peso / (altura ** 2)

    function classificacao() {

        if (imc <= 18.5) {
            return `Abaixo do peso`
        } else if (18.5 <= imc && imc <= 24.9) {
            return `Peso ideal`
        } else if (25.0 <= imc && imc <= 29.9) {
            return `Pré-obesidade`
        } else if (30.0 <= imc && imc <= 34.9) {
            return `Obesidade Grau 1`
        } else if (35.0 <= imc && imc <= 39.9) {
            return `Obesidade Grau 2`
        } else {
            return `Obesidade Grau 3`
        }
    }

    function pesoIdeal() {

        if (imc <= 18.5) {
            return `ganhar ${(18.5 * altura ** 2 - peso).toFixed(2)}Kg`
        } else if (imc >= 24.9) {
            return `perder ${-(24.9 * altura ** 2 - peso).toFixed(2)}Kg`
        }
    }


    resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)}</p>`

    resultado.innerHTML += `<p>${classificacao()}</p>`

    resultado.innerHTML += `<p>Você precisará ${pesoIdeal()} para atingir seu peso ideal.</p>`
}

// function classificacao(conceito){

//     let conceito = ""

//     if (imc <= 18.5){
//         return conceito = `Abaixo do peso`
//     } else if (18.5 <= imc < 24.9){
//         return conceito = `Peso ideal`
//     } else if (25.0 <= imc < 29.9){
//         return conceito = `Pré-obesidade`
//     } else if (30.0 <= imc < 34.9){
//         return conceito = `Obesidade Grau 1`
//     } else if (35.0 <= imc < 39.9){
//         return conceito = `Obesidade Grau 2`
//     } else {
//         return conceito = `Obesidade Grau 3`
//     }
// }

// function pesoIdeal(x){

//     let x = ""

//     if (imc <= 18.5 ) {
//         return (peso + x) / altura**2 >= 18,5;
//     } else if (imc >= 24.9){
//        return (peso - x) / altura**2 <= 24,9;
//     }  
// }

