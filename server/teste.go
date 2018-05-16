package main
import (
	"fmt"
	"encoding/json"
	"./src/model"
)

func main() {
	professor := model.Professor{}
	json.Unmarshal([]byte(`{"user":{"nome":"Glayson","prontuario":"1651153","email":"glayson@email.com","senha":"123456"},"telefone":"11963734856","siape":"21654","departamento":"ROLA"}`), &professor)
	fmt.Println(professor)
}