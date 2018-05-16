package model

import (
	"github.com/dgrijalva/jwt-go"
	"fmt"
	"time"
)

var secret = []byte("thamiresehshow")

type User struct {
	Id uint64 `json:"id"`
    Email string `json:"email"`
	Nome string `json:"nome"`
	Prontuario string `json:"prontuario"`
	Senha string `json:"senha"`
	Iat int64 `json:"iat"`
}

func (user User) Encode() (string, error){
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"prontuario": user.Prontuario,
		"senha": user.Senha,
		"iat": time.Now().Unix(),
	})
	if tokenStr, err := token.SignedString(secret); err == nil {
		return tokenStr, nil
	} else {
		return "", err
	}
}

func (user *User) Decode(token string) error {
	tokenObj, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error){
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return secret, nil
	})
	if err == nil {
		if claims, ok := tokenObj.Claims.(jwt.MapClaims); ok && tokenObj.Valid {
			if claims["prontuario"] != "" && claims["senha"] != "" {
				user.Prontuario = claims["prontuario"].(string)
				user.Senha = claims["senha"].(string)
				user.Iat = int64(claims["iat"].(float64))
				return nil
			}
		}
	}
	return err
}

func NewUser() *User {
	return &User{}
}