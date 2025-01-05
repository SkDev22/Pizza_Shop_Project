package routes

import (
	"database/sql"
	"net/http"
	"pizza-shop-backend/controllers"
)

func SetupRoutes(db *sql.DB) http.Handler {
	mux := http.NewServeMux()

	// Invoice routes
	mux.HandleFunc("/invoices", controllers.CreateInvoice(db))
	mux.HandleFunc("/invoices/all", controllers.GetAllInvoices(db))
	mux.HandleFunc("/invoices/id", controllers.GetInvoiceByID(db))
	mux.HandleFunc("/invoices/delete", controllers.DeleteInvoice(db))

	// Item routes
	mux.HandleFunc("/items", controllers.CreateItem(db))
	mux.HandleFunc("/items/all", controllers.GetAllItems(db))
	mux.HandleFunc("/items/id", controllers.GetItemByID(db))
	mux.HandleFunc("/items/update", controllers.UpdateItem(db))
	mux.HandleFunc("/items/delete", controllers.DeleteItem(db))

	return mux
}
