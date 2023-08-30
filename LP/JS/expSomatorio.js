var num, res = 0;

num = parseInt(prompt('Informe um inteiro positivo: '));

if (num > 0) {
    for (let i = 0; i < num; i++) {
        res += 2 * i + 1;
    }
    console.log(`${num}² = ${res}`);
} else {
    console.log('Número inválido!');
}