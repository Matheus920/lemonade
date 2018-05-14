package main
import (
	"fmt"
	"net/http"
	"io/ioutil"
	"encoding/json"
	"github.com/gorilla/securecookie"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	Prontuario string `json:"prontuario"`
	Senha string `json:"senha"`
}

var cookieHandler = securecookie.New(
	securecookie.GenerateRandomKey(64),
	securecookie.GenerateRandomKey(32))

var db *sql.DB

func rowExists(query string, args ...interface{}) (bool, error){
	var exists bool
	if err := db.QueryRow(fmt.Sprintf("SELECT EXISTS (%s)", query), args...).Scan(&exists); err != nil {
		return false, err
	}
	return exists, nil
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(401)
		return
	}
	user := User{}
	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err := json.Unmarshal(body, &user); err != nil {
			w.WriteHeader(400)
			return
		}
	} else {
		w.WriteHeader(401)
		return
	}

	if exists, err := rowExists("SELECT * FROM user WHERE prontuario=? and senha=?", user.Prontuario, user.Senha); err != nil {
		w.WriteHeader(500)
		return
	} else {
		if exists {
			setSession(user, w)
			w.Write([]byte("Chegou"))
		}
	}
	
}

func setSession(user User, w http.ResponseWriter) {
	value := map[string]string{"prontuario": user.Prontuario, "senha": user.Senha}
	if encoded, err := cookieHandler.Encode("session", value); err == nil {
		cookie := &http.Cookie {
			Name: "session",
			Value: encoded,
		}
		http.SetCookie(w, cookie)
	}
}

func logoutHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(501)
}

func main() {
	if db1, err := sql.Open("mysql", "root@tcp(localhost:3306)/teste"); err == nil {
		db = db1
	} else {
		fmt.Println(err)
		return
	}

	http.Handle("/", http.FileServer(http.Dir("./public")))
	http.HandleFunc("/login", loginHandler)
	http.HandleFunc("/logout", logoutHandler)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
