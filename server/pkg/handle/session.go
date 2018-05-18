package handle

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"encoding/json"
	"../model"
	"../db"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(401)
		return
	}
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
			sendToken(w, login)
		} else {
			w.WriteHeader(400)
		}
	}
	
}

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(401)
		return
	}

	jsonToken := make(map[string]string)

	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err := json.Unmarshal(body, &jsonToken); err != nil {
			w.WriteHeader(400)
			return
		}
	} else {
		w.WriteHeader(401)
		return
	}
	
	login := model.Login{}
	if err := login.Decode(jsonToken["token"]); err == nil {
		if exists, err := db.RowExists("SELECT * FROM login WHERE prontuario=? and senha=? and active=1", login.Prontuario, login.Senha); err != nil {
			w.WriteHeader(500)
			return
		} else {
			if exists {
				sendToken(w, model.NewLogin())
			} else {
				w.WriteHeader(500)
			}
		}
	} else {
		fmt.Println("session.go 80 - ",err)
	}
}