import { Genero } from "./genero";

export class Filme {

    //  Fields
    private id: number;
    private tituloOriginal: string;
    private tituloPtBr: string;
    private preco: number;
    private duracao: number;
    private ano: number;
    private faixaEtaria: string;
    private generos: Array<Genero>;

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

    // Getters
    getId(): number {
        return this.id;
    }

    getTituloOriginal(): string {
        return this.tituloOriginal;
    }

    getTituloPtBr(): string {
        return this.tituloPtBr;
    }

    getPreco(): number {
        return this.preco;
    }

    getDuracao(): number {
        return this.duracao;
    }

    getAno(): number {
        return this.ano;
    }

    getFaixaEtaria(): string {
        return this.faixaEtaria;
    }

    getGeneros(): Array<Genero> {
        return this.generos;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }

    setTituloOriginal(tituloOriginal: string): void {
        this.tituloOriginal = tituloOriginal;
    }

    setTituloPtBr(tituloPtBr: string): void {
        this.tituloPtBr = tituloPtBr;
    }

    setPreco(preco: number): void {
        this.preco = preco;
    }

    setDuracao(duracao: number): void {
        this.duracao = duracao;
    }

    setAno(ano: number): void {
        this.ano = ano;
    }

    setFaixaEtaria(faixaEtaria: string): void {
        this.faixaEtaria = faixaEtaria;
    }

    setGeneros(generos: Array<Genero>): void {
        this.generos = generos;
    }

}