import React from "react";
import { Routes, Route } from "react-router-dom";
import Permissions from "./pages/permissions";
import Calendar from "./pages/calendar";
import Settings from "./pages/settings";
import Customers from "./pages/customers";
import ECommerce from "./pages/eCommerce";
import Orders from "./pages/orders";
import Users from "./pages/users/users";
import Cars from "./pages/cars/cars";
import AddCarForm from "./pages/cars/addCarForm";
import { useStateContext } from "../contexts/contextProvider";
import CarsTable from "./pages/cars/carsTable";

const AppRoutes = () => {

  const {user} = useStateContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={<ECommerce />} />
        <Route path="/*" element={<ECommerce />} />
        {/* <Route path="/ecommerce" element={<ECommerce />} /> */}
        <Route path="/orders" element={<CarsTable />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/calendar" element={<Calendar />} />
        {user.role === "admin" && <Route path="/users" element={<Users />} /> }
        {user.role === "admin" && <Route path="/permissions" element={<Permissions />} />}
        <Route path="/settings" element={<Settings />} />
        <Route path="/cars/addCarForm" element={<AddCarForm />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
