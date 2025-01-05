package models

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func ConnectDatabase() {
    connStr := "user=postgres dbname=pizza_shop password=SahanPG sslmode=disable"
    var err error
    DB, err = sql.Open("postgres", connStr)
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }

    if err = DB.Ping(); err != nil {
        log.Fatal("Database is unreachable:", err)
    }

    log.Println("Database connected successfully!")
}
