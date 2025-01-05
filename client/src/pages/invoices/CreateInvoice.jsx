import { useState } from "react";
import { icons } from "../../assets/assets";
import axios from "axios";

const CreateInvoice = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    items: [{ name: "", quantity: 1, price: "" }],
    taxRate: 10,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] =
      field === "quantity" || field === "price" ? +value : value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: "", quantity: 1, price: "" }],
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const invoice = {
        customer_name: formData.customerName,
        tax_rate: formData.taxRate,
        items: formData.items.map((item) => ({
          item_name: item.name,
          quantity: item.quantity,
          item_price: parseFloat(item.price),
        })),
      };
      await axios.post("http://localhost:8080/invoices", invoice);
      alert("Invoice created successfully!");
      setFormData({
        customerName: "",
        items: [{ name: "", quantity: 1, price: "" }],
        taxRate: 10,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to create invoice.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white md:shadow-md shadow-none rounded-lg my-20 md:my-12 bg-white-high">
      <h2 className="text-2xl font-bold mb-6">Add New Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Customer Name
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter customer name"
            required
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Items</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 mb-2">
              <input
                type="text"
                placeholder="Item Name"
                value={item.name}
                onChange={(e) =>
                  handleItemChange(index, "name", e.target.value)
                }
                className="col-span-5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", e.target.value)
                }
                className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                min="1"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) =>
                  handleItemChange(index, "price", e.target.value)
                }
                className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                min="0.01"
                step="0.01"
                required
              />
              {formData.items.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="col-span-1 text-red-600 font-bold"
                >
                  X
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddItem}
            className="flex justify-start items-center gap-2"
          >
            <icons.GoPlusCircle className="text-pink-600" />
            Add Item
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Tax Rate (%)
          </label>
          <input
            type="number"
            name="taxRate"
            value={formData.taxRate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            min="0"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-pink-600 text-white-high rounded-lg font-semibold hover:bg-red-700"
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
};

export default CreateInvoice;
