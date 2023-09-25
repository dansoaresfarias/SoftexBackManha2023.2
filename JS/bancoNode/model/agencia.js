export class Agencia {
    #nome;
    #numero;
    #telefone;
    #email;
    #endereco;

    constructor(nome, numero, telefone, email, endereco) {
        this.#nome = nome;
        this.#numero = numero;
        this.#telefone = telefone;
        this.#email = email;
        this.#endereco = endereco;
    }

    get nome() {
        return this.#nome;
    }

    get numero() {
        return this.#numero;
    }
    
    get telefone() {
        return this.#telefone;
    }

    set telefone(telefone) {
        this.#telefone = telefone;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get endereco() {
        return this.#endereco;
    }

    set endereco(endereco) {
        this.#endereco = endereco;
    }
}