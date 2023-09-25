export class Cliente {
    #nome;
    #cpf;
    #dataNasc;
    #rg;
    #email;
    #telefone;
    #endereco;

    constructor(nome, cpf, dataNasc, rg, email, telefone, endereco) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#dataNasc = dataNasc;
        this.#rg = rg;
        this.#email = email;
        this.#telefone = telefone;
        this.#endereco = endereco;
    }

    get nome(){
        return this.#nome;
    }

    get cpf(){
        return this.#cpf;
    }
    
    get dataNasc(){
        return this.#dataNasc;
    }
    
    get rg(){
        return this.#rg;
    }

    get email(){
        return this.#email;
    }

    get telefone(){
        return this.#telefone;
    }

    get endereco(){
        return this.#endereco;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    set email(email) {
        this.#email = email;
    }

    set telefone(telefone) {
        this.#telefone = telefone;
    }

    set endereco(endereco) {
        this.#endereco = endereco;
    }    

    toString() {
        return "\tCliente: " + this.#nome + " | CPF: " + this.#cpf + "\n";
    }   
}