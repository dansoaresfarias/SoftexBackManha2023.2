var raio, area, volume;
const PI = 3.1415;

raio = parseFloat(prompt("Informe o raio da esfera: "));

area = 4 * PI * raio**2;
volume = (4/3) * PI * raio**3;

console.log("Área da esfera = " + area + "\nVolume da esfera = " + volume);