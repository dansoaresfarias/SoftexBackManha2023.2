export class Transacao{
    #tipo;
    #data;
    #valor;
    #cliTransferencia;
    #tipoValor;
    
    constructor(tipo, data, valor, cliTransferencia, tipoValor){       
        this.#tipo = tipo;
        this.#data = data;
        this.#valor = valor;
        this.#cliTransferencia = cliTransferencia;
        this.#tipoValor = tipoValor;
    }

    toString() {
        return "\t" + this.#data + "\t" + this.#tipo + "\t" + this.#tipoValor + " " + this.#valor + "\n";
    }
}