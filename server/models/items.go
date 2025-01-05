package models

import "time"

type Item struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Type      string    `json:"type"`
	Price     float64   `json:"price"`
	CreatedAt time.Time `json:"created_at"`
}
