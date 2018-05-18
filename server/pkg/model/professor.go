package model

type Professor struct {
	Id uint64 
	Login Login `json:"login"`
	Telefone string `json:"telefone"`
	Siape string `json:"siape"`
	Departamento string `json:"departamento"`
}

func (professor Professor) ToMap() map[string]interface{} {
	return map[string]interface{}{
		"id": professor.Id,
		"id_departamento": 1,
		"id_login": professor.Login.Id,
		"telefone": professor.Telefone,
		"siape": professor.Siape,
	}
}