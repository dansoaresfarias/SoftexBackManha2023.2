var aluno, media, nota, conceito, qtdNotas;

media = 0.0;

aluno = prompt("Informe o nome do Aluno: ");
qtdNotas = parseInt(prompt("Informe a quantidade de notas do Aluno: "));

for(var i = 1 ; i <= qtdNotas ; i++){
    nota = parseFloat(prompt(`Informe a ${i}º nota do Aluno: `));
    media += nota;
}

media /= qtdNotas;

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