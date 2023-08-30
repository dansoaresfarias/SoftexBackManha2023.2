var aluno, media, nota1, nota2, nota3, conceito;

aluno = prompt("Informe o nome do Aluno: ");
nota1 = parseFloat(prompt("Informe a primeira nota do Aluno: "));
nota2 = parseFloat(prompt("Informe a segunda nota do Aluno: "));
nota3 = parseFloat(prompt("Informe a terceira nota do Aluno: "));

media = (nota1 + nota2 + nota3)/3.0;

if(media < 5.0 && media >= 0.0){
    conceito = "Insuficiente";
}else if(media >= 5.0 && media < 7.0){
    conceito = "Ainda Não Suficiente";
}else if(media >= 7.0 && media < 8.5){
    conceito = "Bom";
}else if(media >= 8.5 && media < 9.5){
    conceito = "Ótimo";
}else if(media >= 9.5 && media <= 10.0){
    conceito = "Excelente";
}else {
    conceito = "Média Inválida!";
}

console.log(`${aluno} sua média é ${media.toFixed(2)} e seu conceito é ${conceito}!`);