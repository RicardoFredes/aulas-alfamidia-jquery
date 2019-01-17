var titulo = $('#titulo_1');
var menu = $('#menu');
var submenu = $('.Submenu');

$('button').on('click', function(){
	menu.toggleClass('Closed');

	if (menu.hasClass('Closed')) {
		titulo.text('Menu fechado');		
	} else {
		titulo.text('Menu aberto');
	}
});

submenu.hide();

$('.MenuHover').hover(mouseSobre, mouseFora);

function mouseSobre(){
	$('.Submenu', this).show();
	// O `this` é o contexto de seleção
	// do elemento que tem a class .Submenu
}

function mouseFora(){
	$('.Submenu', this).hide();
}

var lampada = $('#lamp');
var listaDeClasses = ['Off', 'On'];

var lampadaEstaLigada = false;
lampada.on('click', function(){
  // lampada.toggleClass('On').toggleClass('Off');
	lampada.toggleClass(['On', 'Off']);
});



