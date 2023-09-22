export class Cliente{
    constructor(nome, cpf, dataNasc, rg, email, telefone, endereco){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.rg = rg;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    toString(){
        return "\tCliente: " + this.nome + " | CPF: " + this.cpf + "\n";
    }
}