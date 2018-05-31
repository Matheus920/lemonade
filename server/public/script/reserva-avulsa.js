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
        document.querySelector('tbody').appendChild(tr)
    }
    var script = document.createElement('script')
    script.setAttribute('src', 'bundle.js')
    document.querySelector('body').appendChild(script)
})