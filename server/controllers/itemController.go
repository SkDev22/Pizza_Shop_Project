package controllers

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"pizza-shop-backend/models"
	"pizza-shop-backend/services"
	"strconv"
)

func CreateItem(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var item models.Item
		if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
			http.Error(w, "Invalid input", http.StatusBadRequest)
			return
		}

		if err := services.CreateItem(db, item); err != nil {
			http.Error(w, "Failed to create item", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusCreated)
	}
}

func GetAllItems(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		items, err := services.GetAllItems(db)
		if err != nil {
			http.Error(w, "Failed to retrieve items", http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(items)
	}
}

func GetItemByID(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		idStr := r.URL.Query().Get("id")
		id, err := strconv.Atoi(idStr)
		if err != nil {
			http.Error(w, "Invalid ID", http.StatusBadRequest)
			return
		}

		item, err := services.GetItemByID(db, id)
		if err != nil {
			http.Error(w, err.Error(), http.StatusNotFound)
			return
		}
		json.NewEncoder(w).Encode(item)
	}
}

func UpdateItem(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var item models.Item
		if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
			http.Error(w, "Invalid input", http.StatusBadRequest)
			return
		}

		if err := services.UpdateItem(db, item); err != nil {
			http.Error(w, "Failed to update item", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
	}
}

func DeleteItem(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		idStr := r.URL.Query().Get("id")
		id, err := strconv.Atoi(idStr)
		if err != nil {
			http.Error(w, "Invalid ID", http.StatusBadRequest)
			return
		}

		if err := services.DeleteItem(db, id); err != nil {
			http.Error(w, "Failed to delete item", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
	}
}
