import { Conta } from "./conta.js";

export class Poupanca extends Conta {
    #taxaRendimento;

    /* // Polimorfismo de sobrecarga de construtor, não funciona em JS 
    constructor(cliente, numero, agencia, saldo, taxaRendimento){
        super(cliente, numero, agencia, saldo);
        this.#taxaRendimento = taxaRendimento;
    }*/

    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0.0);
        this.#taxaRendimento = 0.03;
    }

    get taxaRendimento() {
        return this.#taxaRendimento;
    }

    set taxaRendimento(taxaRendimento) {
        this.#taxaRendimento = taxaRendimento;
    }

    // Polimoorfismo sobrecarga de método, não fuciona no JS, ele é sobrescrito pelo próximo.
    /*renderMes() {
        console.log("Oi Luciano... renderMes()");
        let saldoAtual = super.saldo;
        saldoAtual += saldoAtual * this.taxaRendimento;
        let rendimento = saldoAtual - super.saldo;
        super.render(rendimento);
    }*/

    renderMes(qtdMeses) {
        let saldoAtual = super.saldo;
        for (let i = 0; i < qtdMeses; i++) {
            saldoAtual += saldoAtual * this.taxaRendimento;
        }
        let rendimento = saldoAtual - super.saldo;
        super.render(rendimento);
    }

    // depositar da conta
    depositar(valor){
        console.log("Oi João!");
        valor = valor * 1.02;
        //super.depositar(valor);
        super.render(valor)
    }

    // sobescrita do método abstract
    mostrarCliente(){
        super.cobrarTaxa
        return super.cliente.toString();        
    }
}