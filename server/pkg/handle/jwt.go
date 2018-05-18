package handle

import (
	"../model"
	"net/http"
	"encoding/json"
)

func sendToken(w http.ResponseWriter, login model.Login) {
	if tokenStr, err := login.Encode(); err == nil {
		jsonToken := map[string]string{"token": tokenStr, "redirect": "/", "status": "302"}
		if json, err := json.Marshal(jsonToken); err == nil {
			w.Write(json)
		} else {
			w.WriteHeader(500)
		}
	} else {
		w.WriteHeader(500)
	}
}