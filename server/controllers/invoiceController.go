package controllers

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"pizza-shop-backend/models"
	"pizza-shop-backend/services"
	"strconv"
)

func CreateInvoice(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var invoice models.Invoice
		if err := json.NewDecoder(r.Body).Decode(&invoice); err != nil {
			http.Error(w, "Invalid input", http.StatusBadRequest)
			return
		}

		if err := services.CreateInvoice(db, invoice); err != nil {
			http.Error(w, "Failed to create invoice", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusCreated)
	}
}

func DeleteInvoice(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		idStr := r.URL.Query().Get("id")
		id, err := strconv.Atoi(idStr)
		if err != nil {
			http.Error(w, "Invalid ID", http.StatusBadRequest)
			return
		}

		if err := services.DeleteInvoice(db, id); err != nil {
			http.Error(w, "Failed to delete invoice", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
	}
}

func GetAllInvoices(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT id, customer_name, tax_rate, subtotal, tax, total, created_at FROM invoices")
		if err != nil {
			http.Error(w, "Failed to fetch invoices", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		var invoices []models.Invoice
		for rows.Next() {
			var invoice models.Invoice
			err := rows.Scan(&invoice.ID, &invoice.CustomerName, &invoice.TaxRate, &invoice.Subtotal, &invoice.Tax, &invoice.Total, &invoice.CreatedAt)
			if err != nil {
				http.Error(w, "Failed to parse invoice", http.StatusInternalServerError)
				return
			}
			invoices = append(invoices, invoice)
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(invoices)
	}
}

func GetInvoiceByID(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id := r.URL.Query().Get("id")
		if id == "" {
			http.Error(w, "Missing invoice ID", http.StatusBadRequest)
			return
		}

		var invoice models.Invoice
		err := db.QueryRow(
			"SELECT id, customer_name, tax_rate, subtotal, tax, total, created_at FROM invoices WHERE id = $1", id,
		).Scan(&invoice.ID, &invoice.CustomerName, &invoice.TaxRate, &invoice.Subtotal, &invoice.Tax, &invoice.Total, &invoice.CreatedAt)
		if err == sql.ErrNoRows {
			http.Error(w, "Invoice not found", http.StatusNotFound)
			return
		} else if err != nil {
			http.Error(w, "Failed to fetch invoice", http.StatusInternalServerError)
			return
		}

		rows, err := db.Query("SELECT item_name, quantity, item_price, total_price FROM invoice_items WHERE invoice_id = $1", id)
		if err != nil {
			http.Error(w, "Failed to fetch invoice items", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		for rows.Next() {
			var item models.InvoiceItem
			if err := rows.Scan(&item.ItemName, &item.Quantity, &item.ItemPrice, &item.TotalPrice); err != nil {
				http.Error(w, "Failed to parse invoice item", http.StatusInternalServerError)
				return
			}
			invoice.Items = append(invoice.Items, item)
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(invoice)
	}
}

