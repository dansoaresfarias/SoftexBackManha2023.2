import { Conta } from "./conta.js";

export class Poupanca extends Conta{
    #taxaRendimento;

    /* // Sobrecarga de construtor
    constructor(cliente, numero, agencia, saldo, taxaRendimento){
        super(cliente, numero, agencia, saldo);
        this.#taxaRendimento = taxaRendimento;
    }*/

    constructor(cliente, numero, agencia){
        super(cliente, numero, agencia, 0.0);
        this.#taxaRendimento = 0.03;
    }

    get taxaRendimento(){
        return this.#taxaRendimento;
    }

    set taxaRendimento(taxaRendimento){
        this.#taxaRendimento = taxaRendimento;
    }

    renderMesQ(qtdMeses){
        let saldoAtual = super.saldo;
        for(let i = 0; i < qtdMeses; i++){
            saldoAtual += saldoAtual * this.taxaRendimento;
        }
        let rendimento = saldoAtual - super.saldo;
        super.render(rendimento);
    }
    // polimoorfismo sobrecarga
    renderMes(){
        let saldoAtual = super.saldo;
        saldoAtual += saldoAtual * this.taxaRendimento;
        let rendimento = saldoAtual - super.saldo;
        super.render(rendimento);
    }
}