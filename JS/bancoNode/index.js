import { Agencia } from "./model/agencia.js";
import { Cliente } from "./model/cliente.js";
import { Conta } from "./model/conta.js";
import { Endereco } from "./model/endereco.js";

let endAg = new Endereco('PE', "Recife", "São José", "Rua da Guia", 1000, 305, "40050-030");
let agencia = new Agencia("Softex", 1234, "8132227777", "agsoftex@banconode.com", endAg);

let endCli = new Endereco('PE', "Recife", "Cordeiro", "Rua Rio Jiquia", 88, null, "50721-030");
let cliEgito = new Cliente("José Egito", "111.222.333-00", new Date("1985-10-10").toLocaleDateString(), "4455668", "egito@softex.com", "8199999999", endCli);
let contaEgito = new Conta(cliEgito, 765432, agencia, 1378.50);

let endOnelia = new Endereco('PE', "Recife", "Pina", "Av. Boa Viagem", 178, "Ap 2203", "50451-030");
let cliOnelia = new Cliente("Onélia Andrade", "111.555.333-00", new Date("2000-09-10").toLocaleDateString(), "7778889", "onelia@softex.com", "8199999900", endOnelia);
let contaOnelia = new Conta(cliOnelia, 765455, agencia, 14001.50);

endOnelia.rua = "Rua dos Navegantes";
console.log(endOnelia.rua);
cliOnelia.nome = "Onélia Andrade Cavalcanti";
console.log(cliOnelia.nome);
// cliOnelia.setNome("Onélia Andrade Cavalcanti"); // Não fazer o set desse jeito.
contaEgito.depositar(300.0);
contaEgito.sacar(500.0);
contaEgito.pagar(78.0);
contaEgito.tranferir(600.0, contaOnelia);
contaEgito.depositar(1000.0);
contaEgito.pagar(380.0);
contaEgito.pagar(2000.0);

contaOnelia.depositar(6000.0);
contaOnelia.pagar(380.0);
contaOnelia.pagar(600.0);
contaOnelia.pagar(50.0);
contaOnelia.pagar(1000.0);
contaOnelia.pagar(3780.0);
contaOnelia.sacar(800.0);
//console.log(contaOnelia.mostrarSaldo());
//contaOnelia._saldo = 400; // apenas indica ao programador que o atributo saldo é privado.
//contaOnelia.#saldo = 400; // trava o atributo saldo como privado.
//console.log(contaOnelia.mostrarSaldo());


//alert(JSON.stringify(contaEgito));
//console.log(contaEgito);
console.log(contaEgito.mostrarExtrato());
console.log("\n================================");
console.log(contaOnelia.mostrarExtrato());
//console.log(endOnelia.toString());
console.log("Número de contas já criadas: " + Conta.contador);
console.log(contaOnelia.contador);
//Conta.contador = 200;
console.log(Conta.contador);