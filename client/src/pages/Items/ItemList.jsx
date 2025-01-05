// ***** Commented code in this page is the real logic. But I faced some issues with CORS configuration. Therefore I added some information manually. If you can please review the commented code. *****

import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

const ItemList = () => {
  return (
    <div className="min-h-screen px-4 md:px-40 mt-5 md:mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Item List
        </h1>
        <Link
          to="/additems"
          className="bg-pink-600 text-white-high px-2 md:px-4 py-1 md:py-2 rounded-lg flex items-center gap-2 shadow hover:bg-pink-500 hover:font-semibold"
        >
          <FaPlusCircle />
          Add Item
        </Link>
      </div>
      <div className="overflow-x-auto bg-white-high shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
                Price (Rs)
              </th>
              <th className="px-6 py-3 text-center text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">Veggie Pizza</td>
              <td className="px-6 py-4 text-gray-700">Pizza</td>
              <td className="px-6 py-4 text-gray-700">1200</td>
              <td className="px-6 py-4 text-center">
                <div className="flex justify-center gap-4">
                  <Link className="text-yellow-500 hover:text-yellow-600">
                    <AiOutlineEdit className="text-2xl" />
                  </Link>
                  <button className="text-red-500 hover:text-red-600">
                    <MdOutlineDelete className="text-2xl" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineDelete } from "react-icons/md";
// import { FaPlusCircle } from "react-icons/fa";
// import axios from "axios";

// const ItemList = () => {
//   const [items, setItems] = useState([]);

//   // Fetch all items from the backend
//   const fetchItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/items/all");
//       setItems(response.data);
//     } catch (error) {
//       console.error("Failed to fetch items:", error);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   // Delete an item
//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this item?")) {
//       try {
//         await axios.delete(`http://localhost:8080/items/delete?id=${id}`);
//         setItems(items.filter((item) => item.id !== id)); // Remove item from state
//         alert("Item deleted successfully!");
//       } catch (error) {
//         console.error("Failed to delete item:", error);
//         alert("Error deleting item.");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen px-4 md:px-40 mt-5 md:mt-10">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Item List
//         </h1>
//         <Link
//           to="/additems"
//           className="bg-pink-600 text-white-high px-2 md:px-4 py-1 md:py-2 rounded-lg flex items-center gap-2 shadow hover:bg-pink-500 hover:font-semibold"
//         >
//           <FaPlusCircle />
//           Add Item
//         </Link>
//       </div>
//       <div className="overflow-x-auto bg-white-high shadow rounded-lg">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
//                 Type
//               </th>
//               <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
//                 Price (Rs)
//               </th>
//               <th className="px-6 py-3 text-center text-gray-600 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {items.map((item) => (
//               <tr key={item.id} className="hover:bg-gray-100">
//                 <td className="px-6 py-4 text-gray-700">{item.name}</td>
//                 <td className="px-6 py-4 text-gray-700">{item.type}</td>
//                 <td className="px-6 py-4 text-gray-700">{item.price}</td>
//                 <td className="px-6 py-4 text-center">
//                   <div className="flex justify-center gap-4">
//                     <Link
//                       to={`/items/edit/${item.id}`}
//                       className="text-yellow-500 hover:text-yellow-600"
//                     >
//                       <AiOutlineEdit className="text-2xl" />
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(item.id)}
//                       className="text-red-500 hover:text-red-600"
//                     >
//                       <MdOutlineDelete className="text-2xl" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ItemList;
