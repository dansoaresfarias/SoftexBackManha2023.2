export class Cliente {
  nome : string;
  cpf : string;
  idade : number;
  telefone : string;

  constructor(nome : string, cpf : string, idade :number, telefone :string){
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
    this.telefone = telefone;
  }

  getGenericCliente(property: keyof Cliente){
    return this[property];
  }

}