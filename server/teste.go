package main
import (
	"fmt"
)

func Insert(table string, campos map[string]interface{}) {
	query := fmt.Sprintf("INSERT INTO %v(", table)
	cam := ""
	var values []interface{}
	for key, value := range campos {
		query = query + key + ","
		cam = cam + "?,"
		values = append(values, value)
	}
	
	fmt.Println(query, values)
}

func main() {
	glayson := map[string]interface{}{"prontuario": "1651153", "senha": 123}
	Insert("login", glayson)
}