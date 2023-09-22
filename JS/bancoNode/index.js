import { Agencia } from "./model/agencia.js";
import { Cliente } from "./model/cliente.js";
import { Conta } from "./model/conta.js";
import { Endereco } from "./model/endereco.js";

let endAg = new Endereco('PE', "Recife", "São José", "Rua da Guia", 1000, 305, "40050-030");
let agencia = new Agencia("Softex", 1234, "8132227777", "agsoftex@banconode.com", endAg);
let endCli = new Endereco('PE', "Recife", "Cordeiro", "Rua Rio Jiquia", 88, null, "50721-030");
let cliEgito = new Cliente("José Egito", "111.222.333-00", new Date("2014-10-10").toLocaleDateString(), "4455668", "egito@softex.com", "8199999999", endCli);
let contaEgito = new Conta(cliEgito, 765432, agencia, 1378.50);

contaEgito.depositar(300);
contaEgito.sacar(500);

//alert(JSON.stringify(contaEgito));
//console.log(contaEgito);
console.log(contaEgito.mostrarExtrato());