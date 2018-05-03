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


