function login() {
	var login = {prontuario: document.querySelectorAll('input')[0].value, senha: document.querySelectorAll('input')[1].value}
	if(login.prontuario != "" && login.senha !=""){
    	fetch("/login", {
            method: "POST",
            credentials: "same-origin",
			body: JSON.stringify(login)
        })
        .then(function(res){
            if(res.status == 200)
                return '/'
            return null
        })
        .then(function(data){
            if(data != null)
                window.location.href = data
        })
        .catch(function(erro) {
            console.log(erro)
        })
	}
}

function logout() {
    if (document.cookie) {
        fetch("/logout", {
            method: "POST",
            credentials: 'same-origin'
        }).then(function(res){
            return res.text()
        }).then(function(data){
		    window.location.href = '/'
        }).catch(function(err){
            
        })
    }
}

function cadastrar() {
	var inputs = $('input')
	var login = {
		nome: inputs[0].value,
		prontuario: inputs[1].value,
		email: inputs[2].value,
		senha: inputs[3].value
    }
	var professor = {
		login: login,
		telefone: inputs[4].value,
		siape: inputs[5].value,
		departamento: inputs[6].value
    }
	fetch("/cadastrar", {
        method: "POST",
        credentials: 'same-origin',
		body: JSON.stringify(professor)    
	}).then(function(res){
		return res.text()
	}).then(function(data){
        window.location.href = '/'
    })
}

var loginLink = document.createElement('a')

if(!document.cookie) {
   loginLink.className = 'mdc-toolbar__icon mdc-typography--button no-link'
   loginLink.setAttribute('href', 'login')
   loginLink.innerText = 'LOGIN'
} else {
    loginLink.className = 'mdc-toolbar__icon mdc-typography--button no-link btn-user'
   loginLink.innerText = 'USER'
}

var section = document.createElement('section')
section.className = 'mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit'
section.appendChild(loginLink)

document.querySelector('div.mdc-toolbar__row').appendChild(section)

document.querySelector('html').addEventListener('click', function(e) {
    if(e.target ==  document.querySelector('.btn-user')){
        if(document.querySelector('.glc-menu').style.display === 'block')
        {
            document.querySelector('.glc-menu').style.display = 'none'
            return
        }
        document.querySelector('.glc-menu').style.display = 'block';
        return
    }
    if(e.target != document.querySelector('.glc-menu'))
        if(document.querySelector('.glc-menu').style.display == 'block'){
            document.querySelector('.glc-menu').style.display = 'none'
        }
})

if(document.cookie.split(' ')[0].split('=')[0] === 'Permissao') {
    var permissao = document.cookie.split(' ')[0].split('=')[1]

    var reservaAvulsa = document.createElement('a')
    reservaAvulsa.innerText = "Reserva avulsa"
    reservaAvulsa.setAttribute('href', '/reserva-avulsa')
    var rsvAvitm = document.createElement('li')
    rsvAvitm.appendChild(reservaAvulsa)

    document.querySelector('.glc-menu ul').appendChild(rsvAvitm)

    if(document.querySelector('#special-radio-label-id')){
        document.querySelector('#special-radio-label-id').style.display = 'block'
    }

    if(sha256('adminjulianalinda') === permissao.slice(0, permissao.length-1)) {
        var reservaFixa = document.createElement('a')
        reservaFixa.innerText = "Reserva fixa"
        reservaFixa.setAttribute('href', '/reserva-fixa')
        var rsvFixaitm = document.createElement('li')
        rsvFixaitm.appendChild(reservaFixa)

        document.querySelector('.glc-menu ul').appendChild(rsvFixaitm)
    }
}