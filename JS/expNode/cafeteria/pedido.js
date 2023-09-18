export class Pedido{
    constructor(data, cliente){
        this.data = data;
        this.itens = [];
        this.cliente = cliente;
        this.valor = 0.0;
    }

    addProduto(produto) {
        this.itens.push(produto);
        this.valor += produto.preco * produto.qtd;
    } 
}