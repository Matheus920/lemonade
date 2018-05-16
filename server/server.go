package main
import (
	"fmt"
	"net/http"
	"./pkg/db"
	"./pkg/handle"
)

func main() {
	if err := db.Open(); err != nil {
		fmt.Println(err)
		return
	}
	defer db.Close()
	http.Handle("/", http.FileServer(http.Dir("./public")))
	http.HandleFunc("/login", handle.LoginHandler)
	http.HandleFunc("/logout", handle.LogoutHandler)
	http.HandleFunc("/cadastrar", handle.CadastrarHandler)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}