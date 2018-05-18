package handle

import (
	"net/http"
	"io/ioutil"
	"encoding/json"
	"fmt"
	"../model"
	"../db"
)

func CadastrarHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(400)
		return
	}
	professor := model.Professor{}
	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err := json.Unmarshal(body, &professor); err == nil {
			if professor.Login.Id, err = db.Insert("login", professor.Login.ToMap()); err != nil {
				fmt.Println(err)
				return
			} else {
				if professor.Id, err = db.Insert("professor", professor.ToMap()); err != nil {
					fmt.Println(err)
					return
				} else {
					sendToken(w, professor.Login)
				}
			}
		}
	}
}