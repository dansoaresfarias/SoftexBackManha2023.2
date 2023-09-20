import { Transacao } from "./transacao.js";
import { TIPOTRANS } from "./tipoTransacao.js";

export class Conta{
    constructor(cliente, numero, agencia, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = Date.now();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }
    // depositar da conta
    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANS.deposito, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans);
    }
    // sacar da conta
    sacar(valor){
        if (this.saldo>=valor) {
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANS.debito, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        } else {
            // Lançar um erro
            console.log('Erro: Saldo insuficiente ' + valor + 'maior do que o saldo' + this.saldo + '.');
        }
    }
    // transferir da conta

    // realizar pagamento da conta

    // mostrar saldo da conta

    // mostrar extrato da conta
}