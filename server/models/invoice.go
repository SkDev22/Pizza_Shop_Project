package models

import "time"

type Invoice struct {
	ID           int           `json:"id"`
	CustomerName string        `json:"customer_name"`
	TaxRate      float64       `json:"tax_rate"`
	Subtotal     float64       `json:"subtotal"`
	Tax          float64       `json:"tax"`
	Total        float64       `json:"total"`
	Items        []InvoiceItem `json:"items"`
	CreatedAt    time.Time     `json:"created_at"`
}

type InvoiceItem struct {
	ID         int     `json:"id"`
	InvoiceID  int     `json:"invoice_id"`
	ItemName   string  `json:"item_name"`
	Quantity   int     `json:"quantity"`
	ItemPrice  float64 `json:"item_price"`
	TotalPrice float64 `json:"total_price"`
}
