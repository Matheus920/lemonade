package handle

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"encoding/json"
	"../model"
	"../db"
	"time"
	"crypto/sha256"
)

const secret = "julianalinda"

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
		w.WriteHeader(400)
		return
	}
	var wr string
	if err := db.Select("SELECT permissao FROM login WHERE prontuario=? and senha=? and active=1", login.Prontuario, login.Senha).Scan(&wr); err != nil {
		w.WriteHeader(400)
		return
	} else {
		if wr != "professor" {
			cookie := http.Cookie{
				Name: "Permissao",
				Value: fmt.Sprintf("%x", sha256.Sum256([]byte(wr+secret))),
				Expires: time.Now().Add(30*time.Minute),
			}
			http.SetCookie(w, &cookie)
		}
		login.Iat = time.Now().Add(30*time.Minute)
		sendToken(w, login)
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
	cookie, err := r.Cookie("token"); 
	if err != nil {
		w.WriteHeader(400)
		return
	}

	login := model.Login{}
	if err = login.Decode(cookie.Value); err != nil {
		w.WriteHeader(401)
		return
	}
	login.Iat = time.Now().Add(-1)
	
	sendToken(w, login)

	cookie, err = r.Cookie("Permissao"); 
	if err != nil {
		return
	}

	cookie = &http.Cookie{
		Name: "Permissao",
		Expires: login.Iat,
	}
	http.SetCookie(w, cookie)
	
	http.Redirect(w, r, "/", 302)

	fmt.Println(login)
}