import { Endereco } from "./endereco";

export class Cliente {

    // Fields
    private cpf: string;
    private nome: string;
    private dataNasc: Date;
    private email: string;
    private telefones: Array<string>;
    private endereco: Endereco;

    // Constructor
    constructor(cpf: string, nome: string, dataNasc: Date, email: string, end: Endereco) {
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.email = email;
        this.telefones = new Array<string>();
        this.endereco = end;
    }

    // Getters
    getCpf(): string {
        return this.cpf;
    }

    getNome(): string {
        return this.nome;
    }

    getDataNasc(): Date {
        return this.dataNasc;
    }

    getEmail(): string {
        return this.email;
    }

    getTelefones(): Array<string> {
        return this.telefones;
    }

    getEndereco(): Endereco {
        return this.endereco;
    }

    // Setters
    setNome(nome: string): void {
        this.nome = nome;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }


    public addTel(numTel: string) {
        this.telefones.push(numTel);
    }

    public remevoTel(numTel: string) {
        this.telefones.splice(this.telefones.indexOf(numTel), 1);
    }
}