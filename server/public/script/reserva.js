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

setTimeout(function() {
    document.querySelector('button.mdc-button.mdc-button--raised.dark-ripple.mdc-ripple-upgraded').addEventListener('click', function() {

        var reservar = {};
    
        reservar.tipo = document.querySelectorAll('input[type="radio"]:checked')[0]
                        .parentElement.parentElement.innerText.trim()
        reservar.periodos = [];
        for(var i = 0; i < document.querySelectorAll('input[type="checkbox"]:checked').length; i++){
            reservar.periodos.push(document.querySelectorAll('input[type="checkbox"]:checked')[i]
                            .getAttribute('id')
                            .slice(document.querySelectorAll('input[type="checkbox"]:checked')[i]
                            .getAttribute('id'), 
                                document.querySelectorAll('input[type="checkbox"]:checked')[i]
                                    .getAttribute('id').length-2).toUpperCase())
        }
        if(reservar.tipo === 'Fixa'){
            reservar.disciplina = document.querySelector('#discipline-field-id').value
            reservar.justificativa = document.querySelector('#justification-textarea-id').value
        }
        else if(reservar.tipo === 'Avulsa') {
            reservar.lab = document.querySelectorAll('select')[1].value
            var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
            reservar.data = new Date(document.querySelectorAll('input[type="text"]#date-id')[0].value.replace(pattern, "$3-$2-$1")).toISOString();
        }
        console.log(reservar)
        fetch("/reserva", {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(reservar)
        }).then(function(res) {
            if(res.status == 200) {
                window.location.href = '/'
            }
        })
    })
}, 60);