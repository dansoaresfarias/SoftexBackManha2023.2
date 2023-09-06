var notas = [9, 8.5, 7.5, 9];

console.log(notas);

notas.push(10.0);

console.log(notas);

notas.unshift(6);

console.log(notas);

console.log(notas[4]);

var notasTurma = [[9, 8.5, 7.5], [5, 6, 7], [8, 9, 10], [10, 10, 10]];

console.log(notasTurma);

console.log(notasTurma[2][1]);

var notasTurmaOjAluno = [{nome : "Alex Lopes", notas : [9, 8.5, 7.5], mat : 17873},
{nome : "Vincius Sobreira", notas : [7, 8.5, 9.5], mat : 17871}];

console.log(notasTurmaOjAluno);

console.log(notasTurmaOjAluno[1].notas[1]);

notas[5] = 4;

console.log(notas);

notas[5] = 8;

console.log(notas);

notas[8] = 8;

console.log(notas);

console.log(notas.length);

console.log(notas[7]);

notas[7] = NaN;

console.log(notas[7]);

console.log(typeof(notas[7]));

notas.pop(); 

console.log(notas.pop());

console.log(notas.pop());

console.log(notas.pop());

console.log(notas);

notas.shift();

console.log(notas.shift());

console.log(notas);

var notasExtra = [9.0, 8.0, 8.5];

var novasNotas = notas.concat(notasExtra);

console.log(novasNotas);

console.log(novasNotas.indexOf(8.5));

console.log(novasNotas);

var media = 0.0;
novasNotas.forEach(element => {
    media += element;
});
media /= novasNotas.length;
console.log(media);

var med = novasNotas/novasNotas.length;

console.log(med);

novasNotas.sort();

console.log(novasNotas);

novasNotas = novasNotas.slice(2);

console.log(novasNotas);

novasNotas.splice(1, 1, 6);

console.log(novasNotas);

novasNotas.splice(2, 0, 7);

console.log(novasNotas);