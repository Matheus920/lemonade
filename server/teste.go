package main
import (
	"fmt"
	"./pkg/db"
	"time"
)

func main() {
	db.Open()
	rows, err := db.Query("select reserva.lab, reserva.status, login.nome, login.prontuario, horario.sigla, horario_reserva.dia from horario_reserva inner join reserva on reserva.id = horario_reserva.id_reserva inner join login on login.id = reserva.id_login inner join horario on horario.id = horario_reserva.id_horario where login.id=3");
	if err != nil {
		fmt.Println(err)
		return
	}
	defer rows.Close()
	for rows.Next() {
		var (
			lab uint
			status string
			nome string
			prontuario string
			sigla string
			dia []byte
		)
		if err = rows.Scan(&lab, &status, &nome, &prontuario, &sigla, &dia); err != nil {
			fmt.Println(err)
			return
		}
		parse := "2006-01-02 15:04:05"
		v, _ := time.Parse(parse, string(dia));
		fmt.Println(lab, status, nome, prontuario, sigla, v)
	}
}