$('#cadastro-fieldset-id').css('transition', 'all 0.2s');


$('.pg2').css('display', 'none');

$('#botao-proximo-container-id button').click(function () {
    setTimeout(function () {
        $('#cadastro-fieldset-id').css('transform', 'scale(0)');
        setTimeout(function () {
            $('.pg1').css('display', 'none');
            $('.pg2').css('display', 'block');
            $('.pg2').css('opacity', '1');

            setTimeout(function () {
                $('#cadastro-fieldset-id').css('transform', 'scale(1)');
            }, 1);
        }, 200);
    }, 1);
});

$('#botao-anterior-container-id button').click(function () {
    setTimeout(function () {
        $('#cadastro-fieldset-id').css('transform', 'scale(0)');
        setTimeout(function () {
            $('.pg2').css('display', 'none');
            $('.pg1').css('display', 'block');

            setTimeout(function () {
                $('#cadastro-fieldset-id').css('transform', 'scale(1)');
            }, 1);
        }, 200);
    }, 1);
});

$('#cadastro-fieldset-id').css('transform', 'scale(1)');