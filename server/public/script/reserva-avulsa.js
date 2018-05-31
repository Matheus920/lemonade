(function(){
    fetch('/api/reserva-avulsa/', {
    credentials: 'same-origin'
}).then(function(res){
    return res.json()
}).then(function(data) {
    for(var k in data) {
        var texts = [
            data[k]['lab'],
            data[k]['professor'],
            data[k]['departamento'],
            data[k]['periodos'].join(', '),
            data[k]['tipo'].charAt(0).toUpperCase() + data[k]['tipo'].slice(1),
            data[k]['data'].replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1").slice(0, data[k]['data'].length-8),
            data[k]['status']
        ]
        var tr = document.createElement('tr')
        for(var i = 0; i < texts.length-1; i++) {
            var td = document.createElement('td')
            td.innerText = texts[i]
            tr.appendChild(td)
        }
        td = document.createElement('td')
        var button = document.createElement('button')
        button.className = "mdc-button button-confirm mdc-button--raised dark-ripple"
        button.innerText = 'Avaliar'
        td.appendChild(button)
        tr.appendChild(td)
        td = document.createElement('td')
        td.style.display = 'none'
        td.innerText = data[k]['rsv']
        tr.appendChild(td)
        document.querySelector('tbody').appendChild(tr)
    }
    var script = document.createElement('script')
    script.setAttribute('src', 'bundle.js')
    document.querySelector('body').appendChild(script)
})
})()



document.querySelector('html').addEventListener('click', function(e) {
    var buttons = document.querySelectorAll('.button-confirm')
    for(var i = 0; i < buttons.length; i++) {
        if(e.target == buttons[i]){
            buttons[i].parentElement.parentElement.setAttribute('active', '1')
            console.log(buttons[i].parentElement.parentElement)
            return
        }
    }
    var oks = document.querySelectorAll('.mdc-button.white-button.mdc-dialog__footer__button.mdc-dialog__footer__button--accept.mdc-ripple-upgraded')
    for(var i = 0; i < oks.length; i++) {
        if(e.target == oks[i]) {
            console.log('ok')
            var tds = document.querySelector('tr[active="1"]').children;
            var rsv = {
                'lab': parseInt(tds[0].innerText),
                'professor': tds[1].innerText,
                'departamento': tds[2].innerText,
                'periodos': tds[3].innerText.split(', '),
                'tipo': tds[4].innerText,
                'dia': tds[5].innerText.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1'),
                'status': 'APROVADO',
                'rsv': parseInt(tds[7].innerText)
            }
            console.log(rsv)
            fetch('/reserva-avulsa', {
                method: 'POST', 
                credentials: 'same-origin',
                body: JSON.stringify(rsv)
            }).then(function(res) {
                if(res.status == 200) {
                    window.location.reload()
                }
            })
            break
        }
    }

    var reprs = document.querySelectorAll('.mdc-button.white-button.mdc-dialog__footer__button.mdc-dialog__footer__button--cancel.mdc-ripple-upgraded')
    for(var i = 0; i < reprs.length; i++) {
        if(e.target == reprs[i]) {
            console.log('reprovado')
            var tds = document.querySelector('tr[active="1"]').children;
            var rsv = {
                'lab': parseInt(tds[0].innerText),
                'professor': tds[1].innerText,
                'departamento': tds[2].innerText,
                'periodos': tds[3].innerText.split(', '),
                'tipo': tds[4].innerText,
                'dia': tds[5].innerText.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1'),
                'status': 'REPROVADO',
                'rsv': parseInt(tds[7].innerText)
            }
            console.log(rsv)
            fetch('/reserva-avulsa', {
                method: 'POST', 
                credentials: 'same-origin',
                body: JSON.stringify(rsv)
            }).then(function(res) {
                if(res.status == 200) {
                    window.location.reload()
                }
            })
            break
        }
    }

    if(document.querySelector('tr[active="1"]') != null) {
        document.querySelector('tr[active="1"]').removeAttribute('active')
    }
})