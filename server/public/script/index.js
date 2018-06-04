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

function getDateLabel() {
    var date = curDate;

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

    return dateString + monthString
}

$('#minus-day').click(function () {
    var temp = curDate;
    temp.setDate((curDate.getDate() - 1));
    setDateLabel(temp);

    if ($('#plus-day').is(':disabled'))
        $('#plus-day').attr('disabled', false);
    reservas()
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
    reservas()
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

function reservas() {
    fetch('/api/index/' + getDateLabel())
    .then(function(res){
        return res.json()
    })
    .then(function(labs){
        var horarios = [ "M1", "M2", "M3", "M4", "M5", "M6" , "V1", "V2", "V3", "V4", "V5", "V6",  "N1", "N2", "N3", "N4", "N5" ]

        for(var i = 1; i <= 16; i++) {
            var tr
            document.querySelector('#lab' + i).innerHTML = ""
            var flag = false
            for(var k in horarios) {
                if(labs[i] != null) {
                    for(var l in labs[i]) {
                        if(labs[i][l]['horario'] == horarios[k]) {
                            
                            tr = document.createElement('tr')
                            tr.className = horarios[k]
                            tr.style.background = 'red';
                            
                            var td = document.createElement('td')
                            var td1 = document.createElement('td')
                            var td2 = document.createElement('td')

                            td.innerText = horarios[k]
                            td1.innerText = labs[i][l]['nome']
                            td2.innerText = labs[i][l]['departamento']

                            tr.appendChild(td)
                            tr.appendChild(td1)
                            tr.appendChild(td2)

                            document.querySelector('#lab' + i).appendChild(tr.cloneNode(true))
                            flag = true;
                            break;
                        }
                    }
                }
                if(flag) {
                    flag = !flag;
                    continue
                }
                tr = document.createElement('tr')
                tr.className = horarios[k]
                tr.style.background = 'green';
                
                var td = document.createElement('td')
                var td1 = document.createElement('td')
                var td2 = document.createElement('td')

                td.innerText = horarios[k]
                tr.appendChild(td)
                tr.appendChild(td1)
                tr.appendChild(td2)

                document.querySelector('#lab' + i).appendChild(tr.cloneNode(true))
            }
        }
    })
}