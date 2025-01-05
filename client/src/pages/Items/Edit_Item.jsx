import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
  });

  useEffect(() => {
    fetchItemDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItemDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/items/id?id=${id}`
      );
      const item = response.data;
      setFormData({ name: item.name, type: item.type, price: item.price });
    } catch (error) {
      console.error("Failed to fetch item details:", error);
      alert("Error fetching item details.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedItem = {
        id: parseInt(id),
        name: formData.name,
        type: formData.type,
        price: parseFloat(formData.price),
      };
      await axios.put("http://localhost:8080/items/update", updatedItem);
      alert("Item updated successfully!");
      navigate("/items");
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white md:shadow-md shadow-none rounded-lg my-10 md:my-12">
      <h2 className="text-2xl font-bold mb-6">Edit Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter item name"
            required
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter item type (e.g., Pizza, Drink)"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter item price"
            min="0.01"
            step="0.01"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-pink-600 text-white-high rounded-lg font-semibold hover:bg-red-700"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default EditItem;
