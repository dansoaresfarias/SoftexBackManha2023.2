export class notificacao{
    constructor(nomeApp, assunto){
        this.nomeApp = nomeApp;
        this.assunto = assunto;
        this.data = Date.now;
    }
}
//Pilha de notificações
var listaNotificacoes = [];

var notificacaoGmail = new notificacao("Gmail", "Novo email");
listaNotificacoes.push(notificacaoGmail);
// console.log(listaNotificacoes);
var notificacaoInsta = new notificacao("Instagram", "Curtida nova");
listaNotificacoes.push(notificacaoInsta);
// console.log(listaNotificacoes)
var notificacaoGmailRep = new notificacao("Gmail", "Resposta do email tal");
listaNotificacoes.push(notificacaoGmailRep);
// console.log(listaNotificacoes);
var notificacaoFace = new notificacao("Facebook", "Nova sugestão de amizade");
listaNotificacoes.push(notificacaoFace);
// console.log(listaNotificacoes);


for (let index = listaNotificacoes.length - 1; index >= 0; index--) {
    console.log(listaNotificacoes[index]);    
}