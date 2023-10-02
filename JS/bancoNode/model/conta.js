import { Transacao } from "./transacao.js";
import { TIPOTRANS } from "./tipoTransacao.js";

export class Conta {
    #cliente;
    #numero;
    #agencia;
    #dataCriacao;
    #saldo;
    #status;
    #transacoes;

    static #contador = 0;

    constructor(cliente, numero, agencia, saldo) {
        if (this.constructor == Conta) {
            throw new Error('Não é possível instanciar a classe Conta');
        } else {
            this.#cliente = cliente;
            this.#numero = numero;
            this.#agencia = agencia;
            this.#dataCriacao = Date.now();
            this.#saldo = saldo;
            this.#status = true;
            this.#transacoes = [];
            Conta.#contador++;
        }
    }
    // método static da classe Conta
    static qtdContas() {
        return `Número de contas já criadas: ${Conta.#contador}`;
    }

    // depositar da conta
    depositar(valor) {
        this.#saldo += valor;
        let trans = new Transacao(TIPOTRANS.deposito, new Date().toLocaleDateString(), valor, null, '+');
        this.#transacoes.push(trans);
    }
    // sacar da conta
    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            let trans = new Transacao(TIPOTRANS.debito, new Date().toLocaleDateString(), valor, null, '-');
            this.#transacoes.push(trans);
        } else {
            // Lançar um erro
            console.error('Erro: Saldo insuficiente ' + valor + ' é maior do que o saldo ' + this.#saldo + '.');
        }
    }
    // transferir da conta
    tranferir(valor, contaFav) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            contaFav.#saldo += valor;
            let transFav = new Transacao(TIPOTRANS.transferencia, new Date().toLocaleDateString(), valor, this.#cliente.nome, '+');
            contaFav.#transacoes.push(transFav);
            let trans = new Transacao(TIPOTRANS.transferencia, new Date().toLocaleDateString(), valor, contaFav.cliente.nome, '-');
            this.#transacoes.push(trans);
        } else {
            // Lançar um erro
            console.error('Erro: Saldo insuficiente' + valor + ' para transferir, seu saldo é ' + this.#saldo + '.');
        }
    }

    // realizar pagamento da conta
    pagar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            let trans = new Transacao(TIPOTRANS.pagamento, new Date().toLocaleDateString(), valor, null, '-');
            this.#transacoes.push(trans);
        } else {
            // Lançar um erro
            console.error('Erro: Saldo insuficiente ' + valor + ' é maior do que o saldo ' + this.#saldo + ' para realizar o pagamento.');
        }
    }
    // mostrar saldo da conta
    mostrarSaldo() {
        return this.#saldo;
    }

    toString() {
        return "\tAgência: " + this.#agencia.numero + " | Conta: " + this.#numero + "\n";
    }

    // mostrar extrato da conta
    mostrarExtrato() {
        let extrato = "\t\tEXTRATO DE CONTA BANCÁRIA\n";
        extrato += "\t-------------------------------------------\n";
        extrato += this.toString();
        extrato += this.#cliente.toString();
        extrato += "\t-------------------------------------------\n";
        extrato += "\tDATA\t\tHISTÓRICO\t VALOR(R$)\n";
        for (const trans of this.#transacoes) {
            extrato += trans.toString();
        }
        extrato += "\t-------------------------------------------\n";
        extrato += "\t\t\tSaldo\t\t" + this.#saldo + "\n";
        return extrato;
    }
    // gabiarras do JS, por não ter protected
    render(rendimento) {
        this.#saldo += rendimento;
        let trans = new Transacao(TIPOTRANS.render, new Date().toLocaleDateString(), rendimento, null, '+');
        this.#transacoes.push(trans);
    }
    // gabiarras do JS, por não ter protected
    cobrarTaxa(taxa) {
        this.#saldo -= taxa;
        let trans = new Transacao(TIPOTRANS.cobrarTaxa, new Date().toLocaleDateString(), taxa, null, '-');
        this.#transacoes.push(trans);
    }

    // Método abstract para ser implementado pelo filho da classe conta.
    // abstract mostrarCliente();
    mostrarCliente() {
        throw new Error('Método abstract');
    }

    get cliente() {
        return this.#cliente;
    }

    get numero() {
        return this.#numero;
    }

    set numero(numero) {
        this.#numero = numero;
    }

    get agencia() {
        return this.#agencia;
    }

    set agencia(agencia) {
        this.#agencia = agencia;
    }

    get dataCriacao() {
        return this.#dataCriacao;
    }

    get status() {
        return this.#status;
    }

    set status(status) {
        this.#status = status;
    }

    get saldo() {
        return this.#saldo;
    }

    get transacoes() {
        return this.#transacoes;
    }

    static get contador() {
        return Conta.#contador;
    }
}