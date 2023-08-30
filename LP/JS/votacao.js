// Enumerados dos Candidatos
const CANDIDATOS = {
    daniloNome: "Danilo Farias",
    daniloNum: 889,
    egitoNome: "Marcos Egito",
    egitoNum: 847,
    cleidianeNome: "Cleidiane Nunes",
    cleidianeNum: 515,
    brancoNum: 0,
    brancoNome: "Branco"
}

// Zerando os votos
var qtdVotosDan = 0;
var qtdVotosEgito = 0;
var qtdVotosAne = 0;
var qtdVotosBranco = 0;
var qtdVotosNulos = 0;

do {
    
    var voto;
    var op;
    
    // Imprmindo a Zeresima
    // zeresima(qtdVotosDan, qtdVotosEgito, qtdVotosAne, qtdVotosBranco, qtdVotosNulos);

    // Início da votação
    do {
        var testeLetra = false;
        voto = prompt(`Bem-vindo ao sistema de votação.
        Candidatos:
            ${CANDIDATOS.daniloNome} => ${CANDIDATOS.daniloNum}
            ${CANDIDATOS.egitoNome} => ${CANDIDATOS.egitoNum}
            ${CANDIDATOS.cleidianeNome} => ${CANDIDATOS.cleidianeNum}
            ${CANDIDATOS.brancoNome} => ${CANDIDATOS.brancoNum}
        Vote: `);
        
        for (let i in voto) {            
            if(isNaN(Number(voto[i]))){
                testeLetra = true;
            }
        }
        alert(testeLetra);
    } while(testeLetra);
    
    // Computando o voto.
    voto = Number(voto);
    
    if(voto === CANDIDATOS.daniloNum){
        qtdVotosDan++;
    } else if(voto === CANDIDATOS.egitoNum){
        qtdVotosEgito++;
    } else if(voto === CANDIDATOS.cleidianeNum){
        qtdVotosAne++;
    } else if(voto === CANDIDATOS.brancoNum){
        qtdVotosBranco++;
    } else {
        qtdVotosNulos++;
    }
    
    op = prompt("Deseja finalizar a votação. (SIM | NÃO)").toUpperCase();
    // Fim com candidato eleito! Fazer...
} while(op === "NÃO");

// Mostrar resultado.
alert(`Votos:
    ${CANDIDATOS.daniloNome} = ${qtdVotosDan}
    ${CANDIDATOS.egitoNome} = ${qtdVotosEgito}
    ${CANDIDATOS.cleidianeNome} = ${qtdVotosAne}
    ${CANDIDATOS.brancoNome} = ${qtdVotosBranco}
    Nulos = ${qtdVotosNulos}`);

if(qtdVotosDan > qtdVotosEgito && qtdVotosDan > qtdVotosAne){
    alert(`${CANDIDATOS.daniloNome} eleito!`);
}else if(qtdVotosEgito > qtdVotosAne && qtdVotosEgito > qtdVotosDan){
    alert(`${CANDIDATOS.egitoNome} eleito!`);
}else if(qtdVotosAne > qtdVotosDan && qtdVotosAne > qtdVotosEgito){
    alert(`${CANDIDATOS.cleidianeNome} eleita!`);
}else {
    alert("Eleição indefinida!");
}