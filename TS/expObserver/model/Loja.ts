import { Observer } from "./Observer";

export class Loja{
    private nome: string;
    private categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria;
    }

    publicarNovoProduto(text : string){
        Observer.publicarSpam(text);
    }

}