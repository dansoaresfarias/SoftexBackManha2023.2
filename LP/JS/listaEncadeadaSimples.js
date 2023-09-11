import { No } from "./no.js";

export class ListaEncadeada{
    constructor(){
        this.cabeca = null;
        this.contador = 0;
    }

    addNoComeco(conteudo) {
        let novoNo = new No(conteudo, null);
        if(this.cabeca != null){
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
        }else {
            this.cabeca = novoNo;
        }        
        this.contador ++;
        return this.contador;
    }

    addNoFim(conteudo){
        let novoNo = new No(conteudo, null);
        if (this.cabeca === null) {
            this.cabeca = novoNo;
        } else {
            let aux = this.cabeca;
            while(aux.proximo !== null){
                aux = aux.proximo;
            }
            aux.proximo = novoNo;
        }
        this.contador ++;
        return this.contador;
    }

    addNoEm(conteudo, indice){
        let novoNo = new No(conteudo, null);
        if(this.contador < indice){
            return this.addNoFim(conteudo);
        }else{
            let noIndice = this.cabeca;
            let noAnterior = null;
            for (let i = 1; i < indice; i++) {
                noAnterior = noIndice;
                noIndice = this.noIndice.proximo;                
            }
            noAnterior.proximo = novoNo;
            novoNo.proximo = noIndice;
        }
        this.contador++;
        return this.contador;
    }

    
}