package services

import (
	"database/sql"
	// "errors"
	"pizza-shop-backend/models"
)

func CreateInvoice(db *sql.DB, invoice models.Invoice) error {
	tx, err := db.Begin()
	if err != nil {
		return err
	}

	// Calculate subtotal, tax, and total
	var subtotal float64
	for _, item := range invoice.Items {
		item.TotalPrice = float64(item.Quantity) * item.ItemPrice
		subtotal += item.TotalPrice
	}

	tax := subtotal * invoice.TaxRate / 100
	total := subtotal + tax

	// Insert invoice into invoices table
	query := `INSERT INTO invoices (customer_name, tax_rate, subtotal, tax, total, created_at) 
              VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING id`
	err = tx.QueryRow(query, invoice.CustomerName, invoice.TaxRate, subtotal, tax, total).Scan(&invoice.ID)
	if err != nil {
		tx.Rollback()
		return err
	}

	// Insert items into invoice_items table
	for _, item := range invoice.Items {
		query := `INSERT INTO invoice_items (invoice_id, item_name, quantity, item_price, total_price) 
                  VALUES ($1, $2, $3, $4, $5)`
		_, err := tx.Exec(query, invoice.ID, item.ItemName, item.Quantity, item.ItemPrice, item.TotalPrice)
		if err != nil {
			tx.Rollback()
			return err
		}
	}

	return tx.Commit()
}

func DeleteInvoice(db *sql.DB, id int) error {
	query := `DELETE FROM invoices WHERE id = $1`
	_, err := db.Exec(query, id)
	return err
}
