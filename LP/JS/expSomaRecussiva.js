function ola(nome) {
    window.alert("Oi " + nome);
}

function expSomaRec(n) {
    if(n === 1){
        return 1;
    }else {
        return expSomaRec(n-1) + (2*n - 1);
    }
}

var num, res;

var pessoa = prompt('Informe seu nome: ');

ola(pessoa);

num = parseInt(prompt('Informe um inteiro positivo: '));

if (num > 0) {
    res = expSomaRec(num);
    alert(`${num}² = ${res}`);
} else {
    alert('Número inválido!');
}

