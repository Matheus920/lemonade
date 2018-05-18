package model

import (
	"github.com/dgrijalva/jwt-go"
	"fmt"
	"time"
)

var secret = []byte("thamiresehshow")

type Login struct {
	Id uint64
    Email string `json:"email"`
	Nome string `json:"nome"`
	Prontuario string `json:"prontuario"`
	Senha string `json:"senha"`
	Iat int64 `json:"iat"`
}

func (login Login) Encode() (string, error){
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"prontuario": login.Prontuario,
		"senha": login.Senha,
		"iat": time.Now().Unix(),
	})
	if tokenStr, err := token.SignedString(secret); err == nil {
		return tokenStr, nil
	} else {
		return "", err
	}
}

func (login *Login) Decode(token string) error {
	tokenObj, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error){
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return secret, nil
	})
	if err == nil {
		if claims, ok := tokenObj.Claims.(jwt.MapClaims); ok && tokenObj.Valid {
			if claims["prontuario"] != "" && claims["senha"] != "" {
				login.Prontuario = claims["prontuario"].(string)
				login.Senha = claims["senha"].(string)
				login.Iat = int64(claims["iat"].(float64))
				return nil
			}
		}
	}
	return err
}

func (login Login) ToMap() map[string]interface{} {
	return map[string]interface{}{
		"id": login.Id, 
		"prontuario": login.Prontuario,
		"senha": login.Senha,
		"email": login.Email,
		"nome": login.Nome,
	}
}

func NewLogin() Login {
	return Login{}
}