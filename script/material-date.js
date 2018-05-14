var day = 1000*60*60*24;

var options = {
    format: 'dd/mm/yyyy',
    defaultDate: new Date(),
    setDefaultDate: true,
    i18n: {
        cancel: 'Cancelar',
        clear: 'Limpar',
        done: 'OK',
        previousMonth: '<',
        nextMonth: '>',
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    },
    minDate: new Date(),
    maxDate: new Date(new Date().setTime(new Date().getTime() + 7 * day))
}


var elem = document.querySelector('.datepicker');
var instance = M.Datepicker.init(elem, options);


var day = 1000*60*60*24;

var options2 = {
    format: 'dd/mm/yyyy',
    defaultDate: new Date(),
    setDefaultDate: true,
    i18n: {
        cancel: 'Cancelar',
        clear: 'Limpar',
        done: 'OK',
        previousMonth: '<',
        nextMonth: '>',
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    },
    minDate: new Date(),
}


var elem2 = document.querySelector('#date-reitoria-id');
var instance2 = M.Datepicker.init(elem2, options2);


