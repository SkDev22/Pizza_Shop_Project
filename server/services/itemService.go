package services

import (
	"database/sql"
	"errors"
	"pizza-shop-backend/models"
)

func CreateItem(db *sql.DB, item models.Item) error {
	query := `INSERT INTO items (item_name, item_type, item_price, created_at) 
              VALUES ($1, $2, $3, NOW())`
	_, err := db.Exec(query, item.Name, item.Type, item.Price)
	return err
}

func GetAllItems(db *sql.DB) ([]models.Item, error) {
	query := `SELECT id, item_name, item_type, item_price, created_at FROM items`
	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var items []models.Item
	for rows.Next() {
		var item models.Item
		if err := rows.Scan(&item.ID, &item.Name, &item.Type, &item.Price, &item.CreatedAt); err != nil {
			return nil, err
		}
		items = append(items, item)
	}
	return items, nil
}

func GetItemByID(db *sql.DB, id int) (models.Item, error) {
	query := `SELECT id, item_name, item_type, item_price, created_at FROM items WHERE id = $1`
	var item models.Item
	err := db.QueryRow(query, id).Scan(&item.ID, &item.Name, &item.Type, &item.Price, &item.CreatedAt)
	if err == sql.ErrNoRows {
		return item, errors.New("item not found")
	}
	return item, err
}

func UpdateItem(db *sql.DB, item models.Item) error {
	query := `UPDATE items SET item_name = $1, item_type = $2, item_price = $3 WHERE id = $4`
	_, err := db.Exec(query, item.Name, item.Type, item.Price, item.ID)
	return err
}

func DeleteItem(db *sql.DB, id int) error {
	query := `DELETE FROM items WHERE id = $1`
	_, err := db.Exec(query, id)
	return err
}
