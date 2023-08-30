var media, i, nota;


media = 0;
for (i = 1; i <= 3; i++) {
  nota = Number(window.prompt(['Informe a ',i,'ª nota: '].join('')));
  media = media + nota;
}
media = media / 3;
window.alert('Média = ' + String(media));