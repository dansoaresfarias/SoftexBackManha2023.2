const MES = {
    jan : "ENERO",
    fev : "FEBRERO",
    mar : "MARZO",
    abr : "ABRIL",
    mai : "MAYO",
    jun : "JUNIO"
}

var op = "SIM";

do {
    var num = parseInt(prompt("Informe um número inteiro positivo: "));
    //Tratando o erro que pode ocorrer com a execusão do fatorial(n)
    try {
        alert(`${num}! = ${fatorial(num)}`);
        alert(typeof(MES));
    } catch (e) {
        alert(e);
    }
    op = prompt("Deseja repetir o programa? (SIM | NÃO)").toUpperCase();
} while (op === "SIM");

function fatorial(num) {
    if (num >= 0) {
        if (num === 1 || num === 0) {
            return 1;
        } else {
            return fatorial(num - 1) * num;
        }
    } else {
        // (Criar)Lançamento do Erro 
        throw new Error("Número inválido para o fatorial!");
    }
}