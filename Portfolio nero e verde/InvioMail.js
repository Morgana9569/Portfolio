function inviaMail() {
    var destinatario = 'andrea.fabbricatore9569@gmail.com';
    var email = document.getElementById('email').value;
    var oggetto = document.getElementById('oggetto').value;
    var corpo = document.getElementById('corpo').value;
    var nome = document.getElementById('nome').value;
  
    var url = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(oggetto) + '&body=' + 'Ciao, sono ' + encodeURIComponent(nome) + ' ' + encodeURIComponent(corpo);
    window.open(url);
  }
  