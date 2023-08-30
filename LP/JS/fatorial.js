var num = parseInt(prompt("Informe um número inteiro positivo: "));

if (num > 0) {
    alert(`${num}! = ${fatorial(num)}`);
} else {
    alert("Número inválido");
}

function fatorial(num) {
    if (num == 1) {
        return 1;
    } else {
        return fatorial(num - 1) * num;
    }
}