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
    loginLink.className = 'mdc-menu-anchor user-menu-link mdc-toolbar__icon mdc-typography--button no-link'
   loginLink.innerText = 'USER'
}

var section = document.createElement('section')
section.className = 'mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit'
section.appendChild(loginLink)

document.querySelector('div.mdc-toolbar__row').appendChild(section)

var listitem = document.createElement('li')
listitem.className = 'mdc-list-item'
listitem.setAttribute('role', 'menuitem')
listitem.setAttribute('tabindex', '0')

var linkPermissao = document.createElement('a')
linkPermissao.className = 'mdc-typography--button no-link'
linkPermissao.innerText = 'Reserva avulsa'
//linkPermissao.setAttribute('href', '#')

var settinha = document.createElement('i')
settinha.className = 'material-icons big-arrow-icon mdc-button__icon'
settinha.innerText = 'keyboard_arrow_right'

if(document.cookie.split(' ')[0].split('=')[0] === 'Permissao') {
    var permissao = document.cookie.split(' ')[0].split('=')[1]

    listitem.appendChild(linkPermissao)
    listitem.appendChild(settinha.cloneNode(true))
    
    document.querySelector("ul.mdc-menu__items.mdc-list").appendChild(listitem)
    
    if(sha256('adminjulianalinda') === permissao.slice(0, permissao.length-1)) {
        var linkFixa =  document.createElement('a')
        linkFixa.className = 'mdc-typography--button no-link'
        linkFixa.innerText = 'Reserva fixa'
        //linkFixa.setAttribute('href', '#')
        
        var listFixa = document.createElement('li')
        listFixa.className = 'mdc-list-item'
        listFixa.setAttribute('role', 'menuitem')
        listFixa.setAttribute('tabindex', '0')

        listFixa.appendChild(linkFixa)
        listFixa.appendChild(settinha.cloneNode(true))
        document.querySelector("ul.mdc-menu__items.mdc-list").appendChild(listFixa)
    }
}

document.querySelector('li.mdc-list-item').addEventListener('click', logout)

document.querySelectorAll('li.mdc-list-item')[1].addEventListener('click', function() {
    window.location.href = '/reserva'
})

document.querySelectorAll('li.mdc-list-item')[2].addEventListener('click', function() {
    window.location.href = '/historico'
})