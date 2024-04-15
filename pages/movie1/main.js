var estrelas = document.querySelectorAll('.estrela-icon');
                  
document.addEventListener('click', function(e){
  var class_Estrela = e.target.classList;
  if(!class_Estrela.contains('ativo')){
    estrelas.forEach(function(estrela){
    estrela.classList.remove('ativo');});
    class_Estrela.add('ativo');}
});

const botaoCurtir = document.getElementById('botaoCurtir');
let curtido = false;

botaoCurtir.addEventListener('click', function() {
    if (curtido) {
        botaoCurtir.classList.remove('curtido');
        botaoCurtir.textContent = '👍';
        curtido = false;
    } else {
        botaoCurtir.classList.add('curtido');
        botaoCurtir.textContent = '👎';
        curtido = true;
    }
});

