const prompt = require('prompt-sync')();

function ola(nome) {
    window.alert("Oi " + nome);
}

let arrowOla = (nome) => console.log("Oi " + nome);

function areaEsf(raio){
    return 4 * Math.PI * raio**2;
}

let arrowArraEsf = (raio) => (4 * Math.PI * raio * raio);

function volumeEsf(raio){
    return (4/3) * Math.PI * raio**3;
}

let arrowVolumeEsf = (raio) => (4/3) * Math.PI * raio**3;

function expSomatorio(n) {
    let r = 0;
    for (let i = 0; i < n; i++) {
        r += 2 * i + 1;
    }
    return r;
}

let arrowExpSomatorio = (n) => {
    let r = 0;
    for (let i = 0; i < n; i++) {
        r += 2 * i + 1;
    }
    return r;
}

// Bora testar as funções
var num, res, raio;

var pessoa = prompt('Informe seu nome: ');

arrowOla(pessoa);

num = parseInt(prompt('Informe um inteiro positivo: '));

if (num > 0) {
    res = arrowExpSomatorio(num);
    console.log(`${num}² = ${res}`);
} else {
    console.log('Número inválido!');
}

raio = parseInt(prompt('Informe o raio da esfera: '));

console.log(`Área Esf = ${arrowArraEsf(raio)} | Volume Esf = ${arrowVolumeEsf(raio)}`);
