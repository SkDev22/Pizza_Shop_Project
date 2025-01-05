// ***** Commented code in this page is the real logic. But I faced some issues with CORS configuration. Therefore I added some information manually. If you can please review the commented code. *****

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Invoice = () => {
  const invoiceData = {
    shopName: "Magna Pizza",
    shopAddress: "123 Pizza Street, Food City, FC 12345",
    shopPhone: "(123) 456-7890",
    shopEmail: "contact@magnapizza.com",
    customerName: "John Doe",
    invoiceNumber: "INV-001234",
    invoiceDate: "2025-01-02",
    items: [
      { name: "Margherita Pizza", quantity: 2, price: 12.99 },
      { name: "Pepperoni Pizza", quantity: 1, price: 14.99 },
      { name: "Beverage", quantity: 3, price: 2.5 },
    ],
    taxRate: 0.1,
  };

  const subtotal = invoiceData.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const tax = subtotal * invoiceData.taxRate;
  const total = subtotal + tax;

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto p-4 md:p-8 bg-white-high shadow-md rounded-lg"
      >
        {/* Header */}
        <div className="border-b pb-4 mb-4">
          <h1 className="text-3xl font-bold text-red-600">
            {invoiceData.shopName}
          </h1>
          <p className="text-gray-600">{invoiceData.shopAddress}</p>
          <p className="text-gray-600">Phone: {invoiceData.shopPhone}</p>
          <p className="text-gray-600">Email: {invoiceData.shopEmail}</p>
        </div>

        {/* Customer and Invoice Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold">Customer Details</h2>
            <p className="text-gray-700">{invoiceData.customerName}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Invoice Details</h2>
            <p className="text-gray-700 text-sm md:text-lg">
              Invoice #: {invoiceData.invoiceNumber}
            </p>
            <p className="text-gray-700">Date: {invoiceData.invoiceDate}</p>
          </div>
        </div>

        {/* Itemized Charges */}
        <table className="w-full table-fixed md:table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Item
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Quantity
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-auto md:px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.quantity}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  ${item.price.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  ${(item.quantity * item.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end mt-4">
          <div className="w-full max-w-sm">
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Tax (10%)</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-300">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Thank you for dining with us!</p>
          <p>Please visit again.</p>
        </div>
      </div>

      {/* Print Button */}
      <div className="mt-6 text-center md:text-end mx-auto md:mr-64">
        <button
          onClick={() => reactToPrintFn()}
          className="px-6 py-2 bg-pink-600 text-white-high rounded-lg font-semibold hover:bg-pink-700"
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;

// import { useParams } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";
// import axios from "axios";

// const Invoice = () => {
//   const { id } = useParams();
//   const [invoiceData, setInvoiceData] = useState(null);

//   const fetchInvoice = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/invoices/id?id=${id}`
//       );
//       setInvoiceData(response.data);
//     } catch (error) {
//       console.error("Failed to fetch invoice:", error);
//     }
//   };

//   useEffect(() => {
//     fetchInvoice();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);

//   const contentRef = useRef();
//   const reactToPrintFn = useReactToPrint({ contentRef });

//   if (!invoiceData) {
//     return <div>Loading...</div>;
//   }

//   const subtotal = invoiceData.subtotal;
//   const tax = invoiceData.tax;
//   const total = invoiceData.total;

//   return (
//     <div className="min-h-screen p-4 md:p-6">
//       <div
//         ref={contentRef}
//         className="max-w-4xl mx-auto p-4 md:p-8 bg-white-high shadow-md rounded-lg"
//       >
//         {/* Header */}
//         <div className="border-b pb-4 mb-4">
//           <h1 className="text-3xl font-bold text-red-600">Magna Pizza</h1>
//           <p className="text-gray-600">{invoiceData.shopAddress}</p>
//           <p className="text-gray-600">Phone: (123) 456-7890</p>
//         </div>

//         {/* Customer and Invoice Info */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <h2 className="text-lg font-semibold">Customer Details</h2>
//             <p className="text-gray-700">{invoiceData.customer_name}</p>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">Invoice Details</h2>
//             <p className="text-gray-700">Invoice #: {invoiceData.id}</p>
//             <p className="text-gray-700">Date: {invoiceData.created_at}</p>
//           </div>
//         </div>

//         {/* Itemized Charges */}
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Item
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-center">
//                 Quantity
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-right">
//                 Price
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-right">
//                 Total
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {invoiceData.items.map((item) => (
//               <tr key={item.id} className="hover:bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">
//                   {item.item_name}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   {item.quantity}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-right">
//                   Rs {item.item_price.toFixed(2)}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-right">
//                   Rs {item.total_price.toFixed(2)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Totals */}
//         <div className="flex justify-end mt-4">
//           <div className="w-full max-w-sm">
//             <div className="flex justify-between py-2">
//               <span className="text-gray-700">Subtotal</span>
//               <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between py-2">
//               <span className="text-gray-700">Tax</span>
//               <span className="font-medium">Rs {tax.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between py-2 border-t border-gray-300">
//               <span className="text-lg font-semibold">Total</span>
//               <span className="text-lg font-semibold">
//                 Rs {total.toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Print Button */}
//       <div className="mt-6 text-center md:text-end">
//         <button
//           onClick={reactToPrintFn}
//           className="px-6 py-2 bg-pink-600 text-white-high rounded-lg font-semibold hover:bg-pink-700"
//         >
//           Print Invoice
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Invoice;
