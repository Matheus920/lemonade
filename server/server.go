package main
import (
	"fmt"
	"net/http"
	"io/ioutil"
	"encoding/json"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"github.com/dgrijalva/jwt-go"
	"time"
)

type User struct {
	Prontuario string `json:"prontuario"`
	Senha string `json:"senha"`
}

var db *sql.DB
var secret = []byte("thamiresehshow")

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

	if exists, err := rowExists("SELECT * FROM user WHERE prontuario=? and senha=? and active=1", user.Prontuario, user.Senha); err != nil {
		w.WriteHeader(500)
		return
	} else {
		if exists {
			token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
				"prontuario": user.Prontuario,
				"senha": user.Senha,
				"iat": time.Now().Unix(),
			})
			if tokenStr, err := token.SignedString(secret); err == nil {
				jsonToken := map[string]string{"token": tokenStr, "redirect": "http://localhost:8080/", "status": "302"}
				if json, err := json.Marshal(jsonToken); err == nil {
					w.Write(json)
				} else {
					w.WriteHeader(500)
				}
			} else {
				w.WriteHeader(500)
			}
		}
	}
	
}

func logoutHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(401)
		return
	}

	jsonToken := make(map[string]string)

	if body, _ := ioutil.ReadAll(r.Body); len(body) > 0 {
		if err := json.Unmarshal(body, &jsonToken); err != nil {
			w.WriteHeader(400)
			return
		}
	} else {
		w.WriteHeader(401)
		return
	}

	token, err := jwt.Parse(jsonToken["token"], func(token *jwt.Token) (interface{}, error){
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return secret, nil
	})
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		if claims["prontuario"] != "" && claims["senha"] != "" && claims["iat"] != -1 {
			if exists, err := rowExists("SELECT * FROM user WHERE prontuario=? and senha=? and active=1", claims["prontuario"], claims["senha"]); err != nil {
				w.WriteHeader(500)
				return
			} else {
				if exists {
					token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
						"prontuario": "",
						"senha": "",
						"iat": -1,
					})
					if tokenStr, err := token.SignedString(secret); err == nil {
						jsonToken := map[string]string{"token": tokenStr, "redirect": "http://localhost:8080/", "status": "302"}
						if json, err := json.Marshal(jsonToken); err == nil {
							w.Write(json)
						} else {
							w.WriteHeader(500)
						}
					} else {
						w.WriteHeader(500)
					}
				}
			}
		}
	} else {
		fmt.Println(err)
	}
	
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