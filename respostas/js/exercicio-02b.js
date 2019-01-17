alert('Fui importado');

/*
Quando clicar em uma imagem
em miniatura, ler o atributo src
e mostrar um alerta com o seu valor.

Passos:
  1. Adicionar um evento de clique
  para cada imagem.

  2. Colocar no retorno do evento
  uma função que lê o atributo src
  da imagem que recebeu o clique (this).

  3. Usar a função alert() para mostrar
  o atributo src.
*/

$('#carousel img').on('click', retornoDoEvento);

function retornoDoEvento() {
	console.log(this);
	var atributoSrc = $(this).attr('src');
	alert(atributoSrc);

  //alert('Cliquei em uma imagem');
}