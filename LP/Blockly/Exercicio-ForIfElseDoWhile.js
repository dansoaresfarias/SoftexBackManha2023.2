var num, result;
do{ 
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
    var op = prompt("Deseja repetir o programa? (Sim | Não) ").toUpperCase();
}while(op === "SIM");
