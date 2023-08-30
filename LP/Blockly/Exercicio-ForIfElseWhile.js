var num, result, op = "SIM";
while(op === "SIM") { 
    result = 0;
    num = parseInt(prompt("Informe um número inteiro positivo: "));
    if( num > 0){
        for(let i = 0 ; i < num ; i++){
            result += (2*i + 1);
        }
        console.log(`${num}² = ${result}`);
    }else {
        console.log("Número invalido!");
    }
    op = prompt("Deseja repetir o programa? (Sim | Não) ").toUpperCase();
}
