function verificarPrimo() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (esPrimo(numero)) {
        resultado.innerText = `El número ${numero} es primo.`;
        console.log(`El número ${numero} es primo.`);
    } else {
        resultado.innerText = `El número ${numero} no es primo.`;
        console.log(`El número ${numero} no es primo.`);
    }
}
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 2; i * i <= numero; i ++) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
}