export class Endereco {
    // Garantindo o encapsulamento dos atributos do endereço.
    // Inseririndo o # no nome do atributo, forçando ele ser private.
    #uf;
    #cidade;
    #bairro;
    #rua;
    #numero;
    #complemento;
    #cep;

    constructor(uf, cidade, bairro, rua, numero, comp, cep) {
        this.#uf = uf;
        this.#cidade = cidade;
        this.#bairro = bairro;
        this.#rua = rua;
        this.#numero = numero;
        this.#complemento = comp;
        this.#cep = cep;
    }

    get uf() {
        return this.#uf;
    }

    get cidade() {
        return this.#cidade;
    }

    get bairro() {
        return this.#bairro;
    }

    get rua() {
        return this.#rua;
    }

    get numero() {
        return this.#numero;
    }

    get complemento() {
        return this.#complemento;
    }

    get cep() {
        return this.#cep;
    }

    set uf(uf) {
        this.#uf = uf;
    }

    set cidade(cidade) {
        this.#cidade = cidade;
    }

    set bairro(bairro) {
        this.#bairro = bairro;
    }

    set rua(rua) {
        this.#rua = rua;
    }

    set numero(numero) {
        this.#numero = numero;
    }

    set complemento(complemento) {
        this.#complemento = complemento;
    }

    set cep(cep) {
        this.#cep = cep;
    }

    toString() {
        return `Endereço: ${this.#rua}, ${this.#numero} - ${this.#complemento} - ${this.#bairro} - ${this.#cidade} - ${this.#uf} - ${this.#cep}`
    }

}