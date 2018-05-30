package db

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"fmt"
)

var Db *sql.DB

func Open() error {
	if Db != nil {
		return nil
	}
	if db, err := sql.Open("mysql", "root@tcp(localhost:3306)/koalla"); err != nil {
		return err
	} else {
		if err = db.Ping(); err != nil {
			return err
		}
		Db = db
	}
	return nil
}

func Close() {
	if Db != nil {
		Db.Close()
	}
}

func RowExists(query string, args ...interface{}) (bool, error){
	var exists bool
	if err := Db.QueryRow(fmt.Sprintf("SELECT EXISTS (%s)", query), args...).Scan(&exists); err != nil {
		return false, err
	}
	return exists, nil
}

func Insert(table string, campos map[string]interface{}) (uint64, error){
	query := fmt.Sprintf("INSERT INTO %v(", table)
	cam := ""
	var values []interface{}
	for key, value := range campos {
		query = query + key + ","
		cam = cam + "?,"
		values = append(values, value)
	}
	query = query[:len(query)-1] + ") VALUES(" + cam[:len(cam)-1] + ")"

	if stmt, err := Db.Prepare(query); err != nil {
		return 0, err
	} else {
		if res, err := stmt.Exec(values...); err != nil {
			return 0, err
		} else {
			if id, err := res.LastInsertId(); err != nil {
				return 0, err
			}else {
				return uint64(id), nil
			}
		}
	}
}

func Select(query string, values ...interface{}) *sql.Row{
	return Db.QueryRow(query, values...)
}

func Query(query string, values ...interface{}) (*sql.Rows, error) {
	return Db.Query(query, values...)
}