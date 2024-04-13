var estrelas = document.querySelectorAll('.estrela-icon');
                  
document.addEventListener('click', function(e){
  var class_Estrela = e.target.classList;
  if(!class_Estrela.contains('ativo')){
    estrelas.forEach(function(estrela){
    estrela.classList.remove('ativo');});
    class_Estrela.add('ativo');}
});