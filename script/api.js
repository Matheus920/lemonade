function login() {
	var user = {prontuario: document.querySelectorAll('input')[0].value, senha: document.querySelectorAll('input')[1].value}
	if(user.prontuario != "" && user.senha !=""){
    	fetch("http://localhost:8080/login", {
			method: "POST",
			body: JSON.stringify(user)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            sessionStorage.setItem("token", data.token)
            window.location.href = data.redirect; 
        })
	}
}

function logout() {
    if (sessionStorage.token) {
        var token = {token: sessionStorage.token}
        fetch("http://localhost:8080/logout", {
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