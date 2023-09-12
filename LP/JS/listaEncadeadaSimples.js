import { No } from "./no.js";

export class ListaEncadeada{
    constructor(){
        this.contador = 0;
        this.cabeca = null;
    }
    // unshift()
    addNoInicio(conteudo){
        let novoNo = new No(conteudo, null);
        if(this.cabeca === null){
            this.cabeca = novoNo;
            this.contador++;
            return this.contador;
        }else {
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
            this.contador++;
            return this.contador;
        }
    }
    // push()
    addNoFim(conteudo){
        let novoNo = new No(conteudo, null);
        if(this.cabeca === null){
            this.cabeca = novoNo;
            this.contador++;
            return this.contador;
        }else {
            let aux = this.cabeca;
            while(aux.proximo !== null){
                aux = aux.proximo;
            }
            aux.proximo = novoNo;
            this.contador++;
            return this.contador;
        }
    }
    // "splice()"
    addNoIndice(conteudo, indice){
        if(indice === 0){
            return this.addNoInicio(conteudo);
        }else if(indice >= this.contador){
            return this.addNoFim(conteudo);
        }else{
            let novoNo = new No(conteudo, null);
            let aux = this.cabeca;
            let anterior = null;
            for (let i = 0; i < indice ; i++) {
                anterior = aux;
                aux = aux.proximo;
            }
            anterior.proximo = novoNo;
            novoNo = aux;
            this.contador++;
            return this.contador;
        }
    }
    // shift()
    removerNoInicio(){
        if(this.cabeca === null){
            return null;
        }else{
            aux = this.cabeca;
            this.cabeca = this.cabeca.proximo;
            aux.proximo = null;
            this.contador--;
            return aux.conteudo;
        }
    }
    // pop()
    removerNoFim(){
        if(this.cabeca === null){
            return null;
        }else{
            let aux = this.cabeca;
            let anterior;
            while(aux.proximo !== null){
                anterior = aux;
                aux = aux.proximo;
            }
            anterior.proximo = null;
            this.contador--;
            return aux.conteudo;
        }
    }
    // splice()
    removerNoIndice(indice){
        if(indice === 0){
            return this.removerNoInicio();
        }else if(indice >= this.contador){
            return null;
        }else{
            let aux = this.cabeca;
            let anterior = null;
            for (let i = 0; i < indice ; i++) {
                anterior = aux;
                aux = aux.proximo;
            }
            anterior.proximo = aux.proximo;
            aux.proximo = null;
            this.contador--;
            return aux.conteudo;
        }
    }

    pegarConteudoIndice(indice){
        if(this.cabeca === null){
            return null;
        }else if(indice === 0){
            return this.cabeca.conteudo;
        }else{
            let aux = this.cabeca;
            for (let i = 0; i < indice ; i++) {
                aux = aux.proximo;
            }
            return aux.conteudo;
        }
    }

    listarConteudos(){
        if(this.cabeca === null){
            console.log(null);
        }else{
            let aux = this.cabeca;
            while(aux.proximo !== null){
                console.log(aux.conteudo);
                aux = aux.proximo;
            }
            console.log(aux.conteudo);
        }
    }
}