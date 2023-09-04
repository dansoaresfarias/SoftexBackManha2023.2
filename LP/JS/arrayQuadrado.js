var num = [];
var numQuadrado = [];

// Pegar os números
for (let index = 0; index < 5; index++) {
    num.push(Number(prompt(`Informe o ${index + 1}ª número: `)));    
}

// console.log(num);
num.forEach(element => {
    console.log(element);
});

// Quadrado dos números
for (let index = 0; index < num.length; index++) {
    numQuadrado.push(num[index]**2);    
}

// console.log(numQuadrado);
numQuadrado.forEach((elemento) => {
    console.log(elemento);
});

