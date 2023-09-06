import { Cliente } from "./cliente.js";
import { Produto } from "./produto.js";
import { Pedido } from "./pedido.js";

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

console.log(listaPedidos);

console.log(listaPedidos.shift());

console.log(listaPedidos);
