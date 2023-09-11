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

    removerPrimeiroNo(){
        if(this.cabeca === null){
            return null;
        }else{
            let aux = this.cabeca;
            this.cabeca = this.cabeca.proximo;
            aux.proximo = null;
            this.contador--;
            return aux.conteudo;
        }
    }

    removerNoIndice(indice){
        if(this.contador < indice){
            return null;
        }else{
            let noIndice = this.cabeca;
            let noAnterior = null;
            for (let i = 1; i < indice; i++) {
                noAnterior = noIndice;
                noIndice = this.noIndice.proximo;                
            }
            noAnterior.proximo = noIndice.proximo;
            noIndice.proximo = null;
            this.contador--;
            return noIndice.conteudo;
        }
    }

    removerNoFim(){
        if(this.cabeca === null){
            return null;
        }else{
            let aux = this.cabeca;
            while(aux.proximo !== null){
                noAnterior = aux;
                aux = aux.proximo;
            }
            noAnterior.proximo = null;
            this.contador--;
            return aux.conteudo;
        }
    }

    exibirNos(){
        if(this.cabeca === null){
            console.log(null);
        }else {
            let aux = this.cabeca;
            while(aux !== null){
                console.log(aux.conteudo);
                aux = aux.proximo;
            }
        }
    }

}