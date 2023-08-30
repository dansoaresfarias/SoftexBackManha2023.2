function ola(nome) {
    window.alert("Oi " + nome);
}

function expSomatorio(n) {
    let r = 0;
    for (let i = 0; i < n; i++) {
        r += 2 * i + 1;
    }
    return r;
}

var num, res;

var pessoa = prompt('Informe seu nome: ');

ola(pessoa);

num = parseInt(prompt('Informe um inteiro positivo: '));

if (num > 0) {
    res = expSomatorio(num);
    console.log(`${num}² = ${res}`);
} else {
    console.log('Número inválido!');
}

