// ***** Commented code in this page is the real logic. But I faced some issues with CORS configuration. Therefore I added some information manually. If you can please review the commented code. *****

import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { icons } from "../../assets/assets";
import { MdOutlineDelete } from "react-icons/md";

const InvoiceList = () => {
  return (
    <div className="min-h-screen px-4 md:px-40 mt-5 md:mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Invoice List
        </h1>
        <Link
          to="/addInvoice"
          className="bg-pink-600 text-white-high px-2 md:px-4 py-1 md:py-2 rounded-lg flex items-center gap-2 shadow hover:bg-pink-500 hover:font-semibold"
        >
          <FaPlusCircle />
          Add Invoice
        </Link>
      </div>
      <div className="overflow-x-auto shadow rounded-lg bg-white-high">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
                Invoice #
              </th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
                Subtotal
              </th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">01</td>
              <td className="px-6 py-4 text-gray-700">Sahan Kalhara</td>
              <td className="px-6 py-4 text-gray-700">1200</td>
              <td className="px-6 py-4 text-gray-700">1500</td>
              <td className="px-6 py-4 ">
                <div className="flex justify-start items-center gap-8">
                  <Link to="/invoice">
                    <icons.IoMdListBox className="text-2xl text-yellow-500 hover:text-yellow-600" />
                  </Link>
                  <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-600" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceList;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { MdOutlineDelete } from "react-icons/md";
// import { FaPlusCircle } from "react-icons/fa";
// import { AiOutlineEdit } from "react-icons/ai";
// import { FaEye } from "react-icons/fa";
// import axios from "axios";
// import { icons } from "../../assets/assets";
// import { MdOutlineDelete } from "react-icons/md";

// const InvoiceList = () => {
//   const [invoices, setInvoices] = useState([]);

//   useEffect(() => {
//     fetchInvoices();
//   }, []);

//   const fetchInvoices = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/invoices/all");
//       setInvoices(response.data);
//     } catch (error) {
//       console.error("Failed to fetch invoices:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this invoice?")) {
//       try {
//         await axios.delete(`http://localhost:8080/invoices/delete?id=${id}`);
//         alert("Invoice deleted successfully!");
//         fetchInvoices(); // Refresh the list
//       } catch (error) {
//         console.error("Failed to delete invoice:", error);
//         alert("Error deleting invoice.");
//       }
//     }
//   };

//     return (
//       <div className="min-h-screen px-4 md:px-40 mt-5 md:mt-10">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Invoice List
//           </h1>
//           <Link
//             to="/addInvoice"
//             className="bg-pink-600 text-white-high px-2 md:px-4 py-1 md:py-2 rounded-lg flex items-center gap-2 shadow hover:bg-pink-500 hover:font-semibold"
//           >
//             <FaPlusCircle />
//             Add Invoice
//           </Link>
//         </div>
//         <div className="overflow-x-auto shadow rounded-lg bg-white-high">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
//                   Invoice #
//                 </th>
//                 <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
//                   Customer Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
//                   Subtotal
//                 </th>
//                 <th className="px-6 py-3 text-left text-gray-600 uppercase tracking-wider">
//                   Total
//                 </th>
//                 <th className="px-6 py-3 text-center text-gray-600 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {invoices.map((invoice) => (
//                 <tr key={invoice.id} className="hover:bg-gray-100">
//                   <td className="px-6 py-4 text-gray-700">{invoice.id}</td>
//                   <td className="px-6 py-4 text-gray-700">
//                     {invoice.customer_name}
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Rs {invoice.subtotal.toFixed(2)}
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Rs {invoice.total.toFixed(2)}
//                   </td>
//                   <td className="px-6 py-4 text-center">
//                     <div className="flex justify-center gap-4">
//                       <Link
//                         to={`/invoice/${invoice.id}`}
//                         className="text-yellow-500 hover:text-yellow-600"
//                       >
//                         View
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(invoice.id)}
//                         className="text-red-500 hover:text-red-600"
//                       >
//                         <MdOutlineDelete className="text-2xl" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };
//   export default InvoiceList;
