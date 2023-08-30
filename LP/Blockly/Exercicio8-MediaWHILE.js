var op, media, i, nota;


op = 'Sim';
media = 0;
i = 0;
while (op == 'Sim') {
  i = i + 1;
  nota = Number(window.prompt(['Informe a ',i,'ª nota: '].join('')));
  media = media + nota;
  op = window.prompt('Você deseja inserir uma próxima nota? (Sim | Não)');
}
media = media / i;
window.alert('Média = ' + String(media));