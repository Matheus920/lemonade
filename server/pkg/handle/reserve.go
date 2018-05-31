package handle

import (
	"../model"
	"net/http"
	"io/ioutil"
	"fmt"
	"crypto/sha256"
	"encoding/json"
	"../db"
)

func reserveGet(w http.ResponseWriter, r *http.Request) {
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
	data, err := ioutil.ReadFile("./private/reserva.html")
	if err != nil {
		w.WriteHeader(500)
		return
	}
	w.Write(data)
}

func reservePost(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("token")
	if err != nil {
		w.WriteHeader(401)
		return
	}
	reserva := model.Reserva{}
	if err = reserva.Login.Decode(cookie.Value); err != nil {
		w.WriteHeader(500)
		return
	}
	
	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err = json.Unmarshal(body, &reserva); err != nil {
			fmt.Println("reserve 46", err)
			w.WriteHeader(400)
			return
		}
	} else {
		w.WriteHeader(400)
		return
	}
	if err = db.Select("SELECT id FROM login WHERE active=1 and prontuario=? and senha=?", 
			reserva.Login.Prontuario, reserva.Login.Senha).Scan(&reserva.Login.Id); err != nil {
		fmt.Println("reserve 46", err)
		w.WriteHeader(500)
		return
	}
	
	if reserva.Id, err = db.Insert("reserva", reserva.ToMap()); err != nil {
		fmt.Println("reserve 62",err)
		return
	}
	if reserva.Tipo == "Avulsa" {
		horario_reserva := make(map[string]interface{})
		for _, v := range reserva.Periodos {
			var id_horario int
			if err = db.Select("SELECT id FROM horario WHERE sigla=?", v).Scan(&id_horario); err != nil {
				fmt.Println("reserve 70", err)
				return
			}
			horario_reserva["id_horario"] = id_horario
			horario_reserva["id_reserva"] = reserva.Id
			horario_reserva["dia"] = reserva.Data
			if _, err = db.Insert("horario_reserva", horario_reserva); err != nil {
				fmt.Println("reserva 77", err)
				return
			}
		}
	}
}

func Reserve(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		reserveGet(w, r)
	} else if r.Method == "POST" {
		reservePost(w, r)
	}
}

func SingleBook(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		singleBookGet(w, r)
	} else if r.Method == "POST" {
		singleBookPost(w, r)
	}
}

func singleBookGet(w http.ResponseWriter, r *http.Request) {
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

	cookie, err = r.Cookie("Permissao")
	if err != nil {
		w.WriteHeader(401)
		return
	}
	
	if cookie.Value == fmt.Sprintf("%x", sha256.Sum256([]byte("funcionario" + secret))) || 
		cookie.Value == fmt.Sprintf("%x", sha256.Sum256([]byte("admin" + secret))) {
		data, err := ioutil.ReadFile("./private/reserva-avulsa.html")
		if err != nil {
			w.WriteHeader(500)
			return
		}
		w.Write(data)
		return
	}
	w.WriteHeader(401)
}

func singleBookPost(w http.ResponseWriter, r *http.Request) {
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

	cookie, err = r.Cookie("Permissao")
	if err != nil {
		w.WriteHeader(401)
		return
	}
	
	if cookie.Value != fmt.Sprintf("%x", sha256.Sum256([]byte("funcionario" + secret))) && 
		cookie.Value != fmt.Sprintf("%x", sha256.Sum256([]byte("admin" + secret))) {
		w.WriteHeader(401)
		return
	}

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(400)
		return
	}
	jsonB := make(map[string]interface{})
	if err = json.Unmarshal(body, &jsonB); err != nil {
		w.WriteHeader(400)
		return
	}
	stmt, err := db.Prepare("UPDATE reserva SET status=? WHERE id=?")
	if err != nil {
		fmt.Println("reserve 167", err)
		return
	}
	_, err = stmt.Exec(jsonB["status"], jsonB["rsv"])
	if err != nil {
		fmt.Println("reserve 171", err)
		return
	}

	if err != nil {
		fmt.Println("reserve 176", err)
		return
	}
	
}

func FixedBook(w http.ResponseWriter, r *http.Request) {
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

	cookie, err = r.Cookie("Permissao")
	if err != nil {
		w.WriteHeader(401)
		return
	}
	
	if  cookie.Value == fmt.Sprintf("%x", sha256.Sum256([]byte("admin" + secret))) {
		data, err := ioutil.ReadFile("./private/reserva-fixa.html")
		if err != nil {
			w.WriteHeader(500)
			return
		}
		w.Write(data)
		return
	}
	w.WriteHeader(401)
}