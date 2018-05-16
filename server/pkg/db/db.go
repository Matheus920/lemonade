package db

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"fmt"
)

var db *sql.DB

func Open() error {
	if db != nil {
		return nil
	}
	if db1, err := sql.Open("mysql", "root@tcp(localhost:3306)/koalla"); err != nil {
		return err
	} else {
		if err = db1.Ping(); err != nil {
			return err
		}
		db = db1
	}
	return nil
}

func Close() {
	if db != nil {
		db.Close()
	}
}

func RowExists(query string, args ...interface{}) (bool, error){
	var exists bool
	if err := db.QueryRow(fmt.Sprintf("SELECT EXISTS (%s)", query), args...).Scan(&exists); err != nil {
		return false, err
	}
	return exists, nil
}