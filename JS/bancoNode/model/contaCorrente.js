import { Conta } from "./conta.js";

export class ContaCorrente extends Conta{
    #taxaManutencao

    constructor(cliente, numero, agencia, saldo, taxaManutencao){
        super(cliente, numero, agencia, saldo);
        this.#taxaManutencao = taxaManutencao;
    }

    get taxaManutencao(){
        return this.#taxaManutencao;
    }

    set taxaManutencao(taxaManutencao){
        this.#taxaManutencao = taxaManutencao;
    }

    cobrarTaxaManutencao(){
        super.cobrarTaxa(this.#taxaManutencao);
    }

}