var imagemPrincipal = $('#img-principal img');
var imagensMiniatura = $('#carousel img');

imagensMiniatura.on('click', trocaImagemPrincipal);

function trocaImagemPrincipal() {
  var srcDaImagemClicada = $(this).attr('src');
  imagemPrincipal.attr('src', srcDaImagemClicada);
}


/*
Jeito nub

$('#imagem2').on('click', function(){
	$('#img-principal img')
	  .attr('src', 'img/foto-cidade-02.jpg');

});

$('#imagem5').on('click', function(){
	$('#img-principal img')
	  .attr('src', 'img/foto-cidade-05.jpg');

});
*/