package model;

import (
	"time"
)

type Reserva struct {
	Id uint64
	Tipo string `json:"tipo"`
	Lab string `json:"lab"`
	Justificativa string `json:"justificativa"`
	Status string
	Periodos []string `json:"periodos"`
	Data time.Time `json:"data"`
	Login Login
}

func (reserva Reserva) ToMap() map[string]interface{} {
	temp :=  map[string]interface{}{
		"id": reserva.Id, 
		"tipo": reserva.Tipo,
		"lab": reserva.Lab,
		"id_login": reserva.Login.Id,
	}
	if reserva.Status != "" {
		temp["status"] = reserva.Status
	}
	if reserva.Justificativa != "" {
		temp["justificativa"] = reserva.Justificativa
	}
	return temp
}