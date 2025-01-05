import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const item = {
        name: formData.name,
        type: formData.type,
        price: parseFloat(formData.price),
      };
      await axios.post("http://localhost:8080/items", item);
      alert("Item added successfully!");
      navigate("/items");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white md:shadow-md shadow-none rounded-lg my-20 md:my-24">
      <h2 className="text-2xl font-bold mb-6">Add New Item</h2>
      <form onSubmit={handleSubmit}>
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
          Add Item
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
