var aluno, media, nota1, nota2, nota3;

aluno = prompt("Informe o nome do Aluno: ");
nota1 = parseFloat(prompt("Informe a primeira nota do Aluno: "));
nota2 = parseFloat(prompt("Informe a segunda nota do Aluno: "));
nota3 = parseFloat(prompt("Informe a terceira nota do Aluno: "));

media = (nota1 + nota2 + nota3)/3.0;

console.log(`${aluno} sua média é ${media.toFixed(2)}`);

console.log(aluno, "sua média é", media.toFixed(2));

console.log(aluno + " sua média é " + media.toFixed(2));