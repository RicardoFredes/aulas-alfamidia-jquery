// alert('Fui importado com sucesso');
var modalControl = $('#modal-control');
fechaModal();


$('#btn-open').on('click', function(){
	modalControl.addClass('show');
});

$('#btn-close').on('click', fechaModal);

$('.lightBox').on('click', fechaModal);

function fechaModal() {
	modalControl.removeClass('show');
}
