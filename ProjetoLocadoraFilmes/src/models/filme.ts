import { Genero } from "./genero";

export class Filme {

    //  Fields
    id: number;
    tituloOriginal: string;
    tituloPtBr: string;
    preco: number;
    duracao: number;
    ano: number;
    faixaEtaria: string;
    generos: Array<Genero>;

    // Constructor
    constructor(id: number, tituloOriginal: string, tituloPtBr: string, preco: number, duracao: number,
        ano: number, faixaEtaria: string, generos: Array<Genero>) {
        this.id = id;
        this.tituloOriginal = tituloOriginal;
        this.tituloPtBr = tituloPtBr;
        this.preco = preco;
        this.duracao = duracao;
        this.ano = ano;
        this.faixaEtaria = faixaEtaria;
        this.generos = generos;
    }
}