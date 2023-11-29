import { Cliente } from "./model/Cliente";
import { Loja } from "./model/Loja";
import { Observer } from "./model/Observer";

var joao = new Cliente("João Victor", "jvm@softex.com.br");
var rodrigo = new Cliente("Rodrigo Duarte", "rds@softex.com.br");
var thiago = new Cliente("Thiago Jomar", "tjf@softex.com.br");


var nadjaImports = new Loja("Nadja Imports", "Muamba");

Observer.addCliente(joao);
Observer.addCliente(rodrigo);
Observer.addCliente(thiago);

nadjaImports.publicarNovoProduto("Iphone 15 Pro Max 512gb - R$ 15.000,00");
nadjaImports.publicarNovoProduto("Iphone 15 512gb - R$ 10.000,00");