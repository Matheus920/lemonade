package handle

import (
	"../model"
	"net/http"
)

func sendToken(w http.ResponseWriter, login model.Login) {
	if tokenStr, err := login.Encode(); err == nil {
		cookie := http.Cookie {
			Name: "token",
			Value: tokenStr,
			Expires: login.Iat,
		}
		http.SetCookie(w, &cookie)
	} else {
		w.WriteHeader(500)
	}
}

