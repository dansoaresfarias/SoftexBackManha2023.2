import { Cliente } from "./cafeteria/cliente.js";
import { Produto } from "./cafeteria/produto.js";
import { Pedido } from "./cafeteria/pedido.js";

var listaPedidos = [];

// Criando o pedido de Danilo
var cliDanilo = new Cliente("Danilo", "981905671", 301);
var pedidoDanilo = new Pedido(Date.now, cliDanilo);
var tapiocaDanilo = new Produto("tapioca queijo", 7.5, 1);
var cafeDanilo = new Produto("café expresso", 5, 2);
pedidoDanilo.addProduto(tapiocaDanilo);
pedidoDanilo.addProduto(cafeDanilo);

listaPedidos.push(pedidoDanilo);

// Criando o pedido de Livia
var cliLivia = new Cliente("Livia", "981909999", 301);
var pedidoLivia = new Pedido(Date.now, cliLivia);
var tapiocaFrango = new Produto("tapioca frango", 8.5, 1);
var sucoVerde = new Produto("suco verde", 9, 1);
pedidoLivia.addProduto(tapiocaFrango);
pedidoLivia.addProduto(sucoVerde);

listaPedidos.push(pedidoLivia);

// Criando o pedido de Luciano
var cliLuciano = new Cliente("Luciano", "981908888", 301);
var pedidoLuciano = new Pedido(Date.now, cliLuciano);
var sucoAcai = new Produto("suco guarana do amazonas", 12, 1);
pedidoLuciano.addProduto(sucoAcai);

listaPedidos.push(pedidoLuciano);

// Pedido de Danilo pra preparo
// console.log(`Cliente => ${listaPedidos[0].cliente.nome}`);
// console.log(`Telefone => ${listaPedidos[0].cliente.telefone}`);
// console.log(`Sala => ${listaPedidos[0].cliente.sala}`);

for (let p of listaPedidos) {
    console.log("Pedido de: ")
    for (const key in p.cliente) {
        console.log(`\t${key} => ${p.cliente[key]}`);
    }
    console.log("\tItens: ")
    for (let item of p.itens) {
        for (const key in item) {
            console.log(`\t\t${key} => ${item[key]}`);
        }
    }
}
