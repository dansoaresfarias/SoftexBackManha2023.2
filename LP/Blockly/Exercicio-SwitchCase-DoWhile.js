var valorProd, estado;

do{
    valorProd = parseFloat(prompt("Informe o valor do produto: "));
    estado = prompt("Informe um dos estados (SP, MG, RJ, MS): ").toUpperCase();
    
    switch(estado){
        case "SP":
            valorProd *= 1.12;
            console.log(`O valor do produto em ${estado} é ${valorProd.toFixed(2)}`);
            break;
        case "MG":
            valorProd *= 1.07;
            console.log(`O valor do produto em ${estado} é ${valorProd.toFixed(2)}`);
            break;
        case "RJ":
            valorProd *= 1.15;
            console.log(`O valor do produto em ${estado} é ${valorProd.toFixed(2)}`);
            break;
        case "MS":
            valorProd *= 1.08;
            console.log(`O valor do produto em ${estado} é ${valorProd.toFixed(2)}`);
            break;
        default:
            console.log("Estado inválido!");
    }
    var op = prompt("Deseja repetir o programa? (Sim | Não) ").toUpperCase();
}while( op === "SIM");
