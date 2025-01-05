package main

import (
	"log"
	"net/http"
	"pizza-shop-backend/models"
	"pizza-shop-backend/routes"

	"github.com/rs/cors"
)

func main() {
	
	models.ConnectDatabase()
	defer models.DB.Close()

	router := routes.SetupRoutes(models.DB)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
		Debug:            true,
	})
	handler := c.Handler(router)

	log.Println("Server starting on http://localhost:8080...")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
