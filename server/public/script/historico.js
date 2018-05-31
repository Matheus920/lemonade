var tableHeader = $('thead');
var tableBody = $('tbody');

if (window.screen.width >= 450) {
    tableHeader.addClass('mdc-typography--headline6');
    tableBody.addClass('mdc-typography--body1');
    
}

window.onresize = function () {
    if (window.screen.width >= 450) {
        tableHeader.addClass('mdc-typography--headline6');
        tableBody.addClass('mdc-typography--body1');

    } else {
        if(tableHeader.hasClass('mdc-typography--headline6')){
            tableHeader.removeClass('mdc-typography--headline6');
        }
        
        if(tableBody.hasClass('mdc-typography--body1')){
            tableBody.removeClass('mdc-typography--body1');
        }
    }
}

fetch('api/historico/',{credentials: 'same-origin'})
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
    for(var k in data) {
        console.log('lab ' + data[k]['lab']
        + ' horarios ' + data[k]['horarios'].toString() 
        + ' data ' + data[k]['dia']
        + ' status ' + data[k]['status'])
        var is = [document.createElement('i'),
        document.createElement('i'),
        document.createElement('i')]
        is[0].className = 'material-icons yellow500'
        is[0].innerText = 'hourglass_empty'
        is[1].className = 'material-icons lightgreenA700'
        is[1].innerText = 'done'
        is[2].className = 'material-icons redA700'
        is[2].innerText = 'clear'
        var texts = [data[k]['lab'],
            data[k]['horarios'].toString(), 
            data[k]['dia'].slice(0, data[k]['dia'].length-8)
            .replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1"),
            data[k]['status']]
        var tr = document.createElement('tr')
        var tds = []
        for(var i = 0; i < 3; i++) {
            tds.push(document.createElement('td'))
            tds[i].innerText = texts[i]
            tr.appendChild(tds[i])
        }
        tds.push(document.createElement('td'))
        if(texts[3] === 'andamento'){
            tds[3].appendChild(is[0])
        } else if (texts[3] === 'aprovado') {
            tds[3].appendChild(is[1])
        } else if(texts[3] === 'reprovado') {
            tds[3].appendChild(is[2])
        }
        tr.appendChild(tds[3])
        document.querySelector('tbody').appendChild(tr.cloneNode(true))
    }
})