var div = $("#checkboxes"); // seleciona a div específica
var div1 = $('#multiSelectId')
var a = false;
$(function () {
    $("html").on("click", function (e) {
        if (a) {
            if (div.has(e.target).length || e.target == div[0])
                return;
            $('#multiSelectId div.mui-select__menu').remove()
            $('#checkboxes').css('display', 'none')
            a = !a;
        }
        else if (div1.has(e.target).length || e.target == div1[0]) {
            if (!a) {
                console.log($('#multiSelectId div.mui-select__menu').length)
                $('#multiSelectId').append("<div class='mui-select__menu'><div class='mui--is-selected'>Períodos</div></div>")
                $('#checkboxes').css('display', 'block')
                a = !a;
            }
        }
    });
})

$('#reserve-form-container-id').css('transition', 'all 0.2s');


$('#avulse-radio-id').change(function () {

    setTimeout(function () {
        $('#reserve-form-container-id').css('transform', 'scale(0)');
        setTimeout(function () {
            $('.especial').css('display', 'none');
            $('.nao-especial').css('display', 'block');
            $('.avulsa').css('display', 'block')
            $('.fixa').css('display', 'none');
            $('.especial').css('display', 'none');
            setTimeout(function () {
                $('#reserve-form-container-id').css('transform', 'scale(1)');
            }, 1);
        }, 200);
    }, 1);



});

$('#fixed-radio-id').change(function () {

    setTimeout(function () {
        $('#reserve-form-container-id').css('transform', 'scale(0)');
        setTimeout(function () {
            $('.especial').css('display', 'none');
            $('.nao-especial').css('display', 'block');
            $('.avulsa').css('display', 'none')
            $('.fixa').css('display', 'block');
            setTimeout(function () {
                $('#reserve-form-container-id').css('transform', 'scale(1)');
            }, 1);
        }, 200);
    }, 1);
});

$('#special-radio-id').change(function () {

    setTimeout(function () {
        $('#reserve-form-container-id').css('transform', 'scale(0)');
        setTimeout(function () {
            $('.fixa, .avulsa').css('display', 'block');
            $('#date-picker-id').css('display', 'none');
            $('.especial').css('display', 'block');
            $('.nao-especial').css('display', 'none');
            setTimeout(function () {
                $('#reserve-form-container-id').css('transform', 'scale(1)');
            }, 1);
        }, 200);
    }, 1);
});


$('#avulse-radio-id').change();


$(document).ready(function () {
    $('#discipline-field-id').autocomplete({
        data: {
            "Matemática": null,
            "Língua Portuguesa e Literatura": null,
            "Física": null
        },
    });
});

