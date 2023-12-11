import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Cliente {

    // Fields
    private cpf: string;
    private nome: string;
    private dataNasc: Date;
    private email: string;
    private telefones: Array<Telefone>;
    private endereco: Endereco;

    // Constructor
    constructor(cpf: string, nome: string, dataNasc: Date, email: string, end: Endereco) {
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.email = email;
        this.telefones = new Array<Telefone>();
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

    getTelefones(): Array<Telefone> {
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


    public addTel(numTel: Telefone) {
        this.telefones.push(numTel);
    }

    public remevoTel(numTel: Telefone) {
        this.telefones.splice(this.telefones.indexOf(numTel), 1);
    }
}