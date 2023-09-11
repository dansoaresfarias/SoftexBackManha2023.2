import { ListaEncadeada } from "./listaEncadeadaSimples.js";

export class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.filhos = new ListaEncadeada();
    }
}

var listaPessoas = new ListaEncadeada();

var Caio = new Pessoa("Caio Souza", 35);
var Danilo = new Pessoa("Danilo Farias", 37);
var Rodrigo = new Pessoa("Rodrigo Duarte", 31);

listaPessoas.addNoFim(Caio);
listaPessoas.addNoFim(Danilo);
listaPessoas.addNoFim(Rodrigo);

//Filhos
var Arianna = new Pessoa("Arianna Grande", 5);
Danilo.filhos.addNoFim(Arianna);
var Joao = new Pessoa("João Grande", 1);
Danilo.filhos.addNoFim(Joao);
var Jose = new Pessoa("José Souza", 2);
Caio.filhos.addNoFim(Jose);

Danilo.filhos.exibirNos();