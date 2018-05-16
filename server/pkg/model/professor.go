package model

type Professor struct {
	User User `json:"user"`
	Telefone string `json:"telefone"`
	Siape string `json:"siape"`
	Departamento string `json:"departamento"`
}
