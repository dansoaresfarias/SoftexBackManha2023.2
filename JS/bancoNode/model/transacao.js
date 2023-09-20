export class Transacao{
    constructor(tipo, data, valor, cliTransferencia, tipoValor){       
        this.tipo = tipo;
        this.data = data;
        this.valor = valor;
        this.cliTransferencia = cliTransferencia;
        this.tipoValor = tipoValor;
    }
}