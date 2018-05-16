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
	user := model.User{}
	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err := json.Unmarshal(body, &user); err != nil {
			w.WriteHeader(400)
			return
		}
	} else {
		w.WriteHeader(401)
		return
	}

	if exists, err := db.RowExists("SELECT * FROM user WHERE prontuario=? and senha=? and active=1", user.Prontuario, user.Senha); err != nil {
		w.WriteHeader(500)
		return
	} else {
		if exists {
			if tokenStr, err := user.Encode(); err == nil {
				jsonToken := map[string]string{"token": tokenStr, "redirect": "http://localhost:8080/", "status": "302"}
				if json, err := json.Marshal(jsonToken); err == nil {
					w.Write(json)
				} else {
					w.WriteHeader(500)
				}
			} else {
				w.WriteHeader(500)
			}
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
	
	user := &model.User{}
	if err := user.Decode(jsonToken["token"]); err == nil {
		if exists, err := db.RowExists("SELECT * FROM user WHERE prontuario=? and senha=? and active=1", user.Prontuario, user.Senha); err != nil {
			w.WriteHeader(500)
			return
		} else {
			if exists {
				empty := &model.User{}
				if tokenStr, err := empty.Encode(); err == nil {
					jsonToken := map[string]string{"token": tokenStr, "redirect": "http://localhost:8080/", "status": "302"}
					if json, err := json.Marshal(jsonToken); err == nil {
						w.Write(json)
					} else {
						w.WriteHeader(500)
					}
				} else {
					w.WriteHeader(500)
				}
			}
		}
	} else {
		fmt.Println(err)
	}
}