package handle

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"encoding/json"
	"../model"
	"../db"
	"time"
)

func loginGet(w http.ResponseWriter, r *http.Request) {
	if _, err := r.Cookie("token"); err == nil {
		http.Redirect(w, r, "/", 400)
		return
	}

	if data, err := ioutil.ReadFile("./private/login.html"); err == nil {
		w.Write(data)
	}
}

func loginPost(w http.ResponseWriter, r *http.Request) {
	login := model.Login{}
	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err := json.Unmarshal(body, &login); err != nil {
			w.WriteHeader(400)
			return
		}
	} else {
		w.WriteHeader(401)
		return
	}
	if exists, err := db.RowExists("SELECT * FROM login WHERE prontuario=? and senha=? and active=1", login.Prontuario, login.Senha); err != nil {
		w.WriteHeader(500)
		return
	} else {
		if exists {
			login.Iat = time.Now().Add(30*time.Minute)
			sendToken(w, r, login)
		} else {
			w.WriteHeader(400)
		}
	}
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		loginPost(w, r)
		return
	}
	if r.Method == "GET" {
		loginGet(w, r)
		return
	}
	w.WriteHeader(401)
}

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(401)
		return
	}

	cookie, _ := r.Cookie("token")

	login := model.Login{}
	login.Decode(cookie.Value)
	login.Iat = time.Now().Add(-1)
	sendToken(w, r, login)
	http.Redirect(w, r, "/", 302)

	fmt.Println(login)
}