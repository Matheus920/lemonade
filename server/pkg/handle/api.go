package handle

import (
	"net/http"
	"../db"
	"fmt"
	"time"
	"encoding/json"
	"strings"
	"../model"
	"crypto/sha256"
)

func Api(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		w.WriteHeader(400)
		return
	}
	req := r.URL.Path[len("/api/"):]
	if len(req) == 0 {
		w.WriteHeader(400)
		return
	}
	req = strings.Split(req, "/")[0]
	
	if req == "index" {
		indexApi(w, r)
	}
	if req == "historico" {
		historicApi(w, r)
	}

	if req == "reserva-avulsa" {
		reservaAvulsaApi(w, r)
	}
}

func indexApi(w http.ResponseWriter, r *http.Request) {
	if len(r.URL.Path) != len("/api/index/")+4{
		w.WriteHeader(400)
		return
	}
	day := r.URL.Path[len("/api/index/"):len("/api/index/")+2]
	month := r.URL.Path[len("/api/index/")+2:len("/api/index/")+4]
	fmt.Println(day, month)
	parse := "2006-01-02 15:04:05"
	_, err := time.Parse(parse, fmt.Sprintf("%d-%s-%s 00:00:00", time.Now().Year(), month, day))
	if err != nil {
		fmt.Println("api 22", err)
		w.WriteHeader(400)
		return
	}
	rows, err := db.Query("select departamento.nome as departamento, login.nome, horario.sigla, reserva.lab from reserva inner join horario_reserva on reserva.id = horario_reserva.id_reserva inner join horario on horario.id = horario_reserva.id_horario inner join login on login.id = reserva.id_login inner join professor on login.id = professor.id_login inner join departamento on professor.id_departamento = departamento.id where reserva.lab > 0 and reserva.active=1 and dia = ? and reserva.status='aprovado'", 
		fmt.Sprintf("%d-%s-%s", time.Now().Year(), month, day))
	if err != nil {
		fmt.Println("api 29", err)
		w.WriteHeader(500)
		return
	}
	
	labs := make(map[uint][]map[string]string)
	for rows.Next() {
		var(
			departamento string
			nome string
			sigla string
			lab uint
		)
		rows.Scan(&departamento, &nome, &sigla, &lab)
		labs[lab] = append(labs[lab], map[string]string{
			"horario": sigla,
			"departamento": departamento,
			"nome": nome,
		})
	}

	if json, err := json.Marshal(labs); err == nil {
		w.Header().Set("content-type", "application/json")
		w.Write(json)
		return
	} else {
		w.WriteHeader(500)
		return
	}
}

func historicApi(w http.ResponseWriter, r *http.Request) {
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
	
	if err = db.Select("select id from login where prontuario=? and senha=? and active=1", login.Prontuario, login.Senha).Scan(&login.Id); err != nil {
		w.WriteHeader(400)
		return
	}

	rows, err := db.Query("select reserva.id, reserva.lab, horario_reserva.dia, reserva.status from reserva inner join horario_reserva on reserva.id = horario_reserva.id_reserva inner join login on login.id = reserva.id_login where login.id=? and login.active=1 group by reserva.id order by horario_reserva.dia", login.Id)
	if err != nil {
		fmt.Println("historic 31", err)
		w.WriteHeader(500)
		return	
	}
	reservas := make([]map[string]interface{}, 0)
	for rows.Next() {
		var (
			rsv uint
			lab uint
			dia []byte
			status string
		)
		if err = rows.Scan(&rsv, &lab, &dia, &status); err != nil {
			fmt.Println("historic 43", err)
			return
		}
		reserva := make(map[string]interface{})
		reserva["lab"] = lab
		reserva["dia"] = string(dia)
		reserva["status"] = status
		rows1, err := db.Query("select horario.sigla from horario_reserva inner join horario on horario_reserva.id_horario = horario.id inner join reserva on reserva.id = horario_reserva.id_reserva inner join login on login.id = reserva.id_login where login.id=? and reserva.id=? and login.active=1", login.Id, rsv)
		if err != nil {
			fmt.Println("historic 52", err)
			return
		}
		horarios := make([]string, 0)
		for rows1.Next() {
			var sigla string
			if err = rows1.Scan(&sigla); err != nil {
				fmt.Println("historic 62", err)
				return
			}
			horarios = append(horarios, sigla)
		}
		reserva["horarios"] = horarios
		reservas = append(reservas, reserva)
	}
	if json, err := json.Marshal(reservas); err != nil {
		fmt.Println("api 137", err)
		w.WriteHeader(500)
		return
	} else {
		w.Header().Set("content-type", "application/json")
		w.Write(json)
	}
}

func reservaAvulsaApi(w http.ResponseWriter, r *http.Request) {
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
	
	if err = db.Select("select id from login where prontuario=? and senha=? and active=1", login.Prontuario, login.Senha).Scan(&login.Id); err != nil {
		w.WriteHeader(400)
		return
	}

	rows, err := db.Query("select reserva.id, reserva.lab, login.nome, departamento.nome, reserva.tipo, horario_reserva.dia, reserva.status from reserva  inner join login on login.id = reserva.id_login inner join professor on professor.id_login = login.id  inner join departamento on departamento.id = professor.id_departamento  inner join horario_reserva on horario_reserva.id_reserva=reserva.id where reserva.active=1 and (reserva.status='andamento' or reserva.id in  (select reserva.id from reserva  inner join horario_reserva on horario_reserva.id_reserva = reserva.id  inner join horario on horario.id=horario_reserva.id_horario where reserva.status='aprovado' group by reserva.id having max(time(horario.dt_fim)) < time(now()))) group by reserva.id")
	
	if err != nil {
		w.WriteHeader(500)
		return
	}
	reservas := make([]map[string]interface{}, 0)
	for rows.Next() {
		var (
			rsv uint
			lab uint
			prof string
			dpt string
			tipo string
			dia []byte
			status string
		)
		if err = rows.Scan(&rsv, &lab, &prof, &dpt, &tipo, &dia, &status); err != nil {
			fmt.Println("api 200", err)
			return
		}

		rows1, err := db.Query("select sigla from horario inner join horario_reserva on horario_reserva.id_horario=horario.id inner join reserva on reserva.id=horario_reserva.id_reserva where reserva.active=1 and reserva.id=?", rsv)
		if err != nil {
			fmt.Println("api 206", err)
			return
		}
		horarios := make([]string, 0)
		for rows1.Next() {
			var sigla string
			if err = rows1.Scan(&sigla); err != nil {
				fmt.Println("api 211", err)
				return
			}
			horarios = append(horarios, sigla)
		}
		reservas = append(reservas, map[string]interface{}{
			"lab": lab,
			"professor": prof,
			"departamento": dpt,
			"periodos": horarios,
			"tipo": tipo,
			"data": string(dia),
			"status": status,
			"rsv": rsv,
			},
		)
	}
	if json, err := json.Marshal(reservas); err != nil {
		fmt.Println("api 227", err)
		w.WriteHeader(500)
		return
	} else {
		w.Header().Set("content-type", "application/json")
		w.Write(json)
	}
}