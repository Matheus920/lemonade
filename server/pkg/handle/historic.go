package handle

import (
	"../model"
	"net/http"
	"io/ioutil"
)

func Historic(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("token")
	if err != nil {
		w.WriteHeader(401)
		return
	}
	login := model.Login{}
	if err = login.Decode(cookie.Value); err != nil {
		w.WriteHeader(401)
		return
	}
	
	data, err := ioutil.ReadFile("./private/historico.html")
	if err != nil {
		w.WriteHeader(500)
		return
	}
	w.Write(data)
}