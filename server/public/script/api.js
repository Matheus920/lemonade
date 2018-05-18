function login() {
	var login = {prontuario: document.querySelectorAll('input')[0].value, senha: document.querySelectorAll('input')[1].value}
	if(login.prontuario != "" && login.senha !=""){
    	fetch("/login", {
			method: "POST",
			body: JSON.stringify(login)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            localStorage.setItem("token", data.token)
            window.location.href = data.redirect; 
        })
	}
}

function logout() {
    if (sessionStorage.token) {
        var token = {token: sessionStorage.token}
        fetch("/logout", {
            method: "POST",
            body: JSON.stringify(token)
        }).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data)
        }).catch(function(err){
            
        }).finally(function(){
            sessionStorage.clear()
            window.location.href = "http://localhost:8080/"
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
		body: JSON.stringify(professor)    
	}).then(function(res){
		return res.json()
	}).then(function(data){
        sessionStorage.token = data.token
		window.location.href = data.redirect
    })
}