package handle

import (
	"net/http"
	"io/ioutil"
	"encoding/json"
	"fmt"
	"../model"
	"../db"
	"time"
)

func signupGet(w http.ResponseWriter, r *http.Request) {
	if _, err := r.Cookie("token"); err == nil {
		http.Redirect(w, r, "/", 400)
		return
	}

	if data, err := ioutil.ReadFile("./private/cadastro.html"); err == nil {
		w.Write(data)
	}

}

func signupPost(w http.ResponseWriter, r *http.Request) {
	professor := model.Professor{}
	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err := json.Unmarshal(body, &professor); err == nil {
			if professor.Login.Id, err = db.Insert("login", professor.Login.ToMap()); err != nil {
				fmt.Println(err)
				return
			} else {
				if professor.Id, err = db.Insert("professor", professor.ToMap()); err != nil {
					fmt.Println("signup 25", err)
					return
				} else {
					professor.Login.Iat = time.Now().Add(30*time.Minute)
					sendToken(w, r, professor.Login)
				}
			}
		}
	}
}

func SignupHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		signupPost(w, r)
		return
	}
	if r.Method == "GET" {
		signupGet(w, r)
		return
	}

	w.WriteHeader(400)
}