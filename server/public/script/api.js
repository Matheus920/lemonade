function login() {
	var login = {prontuario: document.querySelectorAll('input')[0].value, senha: document.querySelectorAll('input')[1].value}
	if(login.prontuario != "" && login.senha !=""){
    	fetch("/login", {
            method: "POST",
            credentials: "same-origin",
			body: JSON.stringify(login)
        })
        .then(function(res){
            return res.text()
        })
        .then(function(data){
            console.log(data)
            window.location.href = '/'; 
        })
        .catch(function(erro) {
            
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