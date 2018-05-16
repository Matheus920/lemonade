var datelabel = $('#date-label');
var curDate = new Date();

var weekday = new Array(7);

weekday[0] = "Domingo";
weekday[1] = "Segunda";
weekday[2] = "Terça";
weekday[3] = "Quarta";
weekday[4] = "Quinta";
weekday[5] = "Sexta";
weekday[6] = "Sábado";

setDateLabel(new Date());

function setDateLabel(date) {
    curDate = date;


    if (curDate.getDate() < 10) {
        var dateString = "0" + date.getDate();
    } else {
        var dateString = date.getDate();
    }

    if ((curDate.getMonth() + 1) < 10) {
        var monthString = "0" + (date.getMonth() + 1);
    } else {
        var monthString = (date.getMonth() + 1).toString();
    }

    console.log(date.getDate() + " " + date.getMonth());
    datelabel.text(weekday[date.getDay()] + ', ' + dateString + '/' +
        monthString);
}

$('#minus-day').click(function () {
    var temp = curDate;
    temp.setDate((curDate.getDate() - 1));
    setDateLabel(temp);

    if ($('#plus-day').is(':disabled'))
        $('#plus-day').attr('disabled', false);
});

$('#plus-day').click(function () {
    var temp = curDate;
    temp.setDate((curDate.getDate() + 1));
    setDateLabel(temp);

    var oneDay = 1000*60*60*24;

    var calc = ((curDate.getTime()) - (new Date().getTime()));
    calc = Math.round(calc/oneDay);

    if (calc == 7) {
        $('#plus-day').attr('disabled', true);
    }
});

let a = $('label.checkbox-label');
a[0].innerText = 'M';
a[1].innerText = 'V';
a[2].innerText = 'N';

if (window.screen.width >= 408) {
    a[0].innerText = "Matutino";
    a[1].innerText = "Vespertino";
    a[2].innerText = "Noturno";

}

window.onresize = function () {
    if (window.screen.width >= 408) {
        a[0].innerText = "Matutino";
        a[1].innerText = "Vespertino";
        a[2].innerText = "Noturno";
    } else {
        a[0].innerText = 'M';
        a[1].innerText = 'V';
        a[2].innerText = 'N';
    }
}