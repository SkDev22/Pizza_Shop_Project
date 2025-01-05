import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemList from "./pages/Items/ItemList";
import InvoiceList from "./pages/invoices/InvoiceList";
import Invoice from "./pages/invoices/Invoice";
import CreateInvoice from "./pages/invoices/CreateInvoice";
import CreateItem from "./pages/Items/CreateItem";

const App = () => {
  return (
    <div className="bg-white-low">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/additems" element={<CreateItem />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/addInvoice" element={<CreateInvoice />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
