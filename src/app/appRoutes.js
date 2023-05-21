import { Routes, Route } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import Calendar from "../components/pages/calendar";
import Settings from "../components/pages/settings/settings";
import Customers from "../components/pages/customers/customers";
import Dashboard from "../components/pages/dashboard/dashboard";
import Orders from "../components/pages/orders/orders";
import Users from "../components/pages/users/users";
import Cars from "../components/pages/cars/cars";
import Tests from "../components/pages/tests/tests";
import Pricing from "../components/pages/pricing/pricing";
import App from "../components/pages/cardUsers";
import AddForm from "../components/forms/addForm";

const AppRoutes = () => {

  const {user} = useStateContext();

  return (
    <div>
      <Routes>
        {user.role === "admin" && <Route path="/users" element={<Users />} /> }
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/cars/addCarForm" element={<AddForm />} />
        <Route path="select" element={<App />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
