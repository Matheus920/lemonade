package handle

import (
	"net/http"
	"io/ioutil"
	"encoding/json"
	"fmt"
	"../model"
)

func CadastrarHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(400)
		return
	}
	professor := model.Professor{}
	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err := json.Unmarshal(body, &professor); err == nil {
			fmt.Println(professor)
		}
	}
}