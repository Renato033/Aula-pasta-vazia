let entrada=prompt("Digite um numero");
let numero = parseInt(entrada);
if (!isNaN(numero)){ 
let proximoNumero = numero +1;

alert ("O numero depois de " + numero + "é" + proximoNumero);
} else {
    alert ("Por favor, digite um numero valido.");
}
