import React from "react";
import { Routes, Route } from "react-router-dom";
import Permissions from '../pages/permissions'
import Calendar from '../pages/calendar'
import Settings from '../pages/settings'
import Customers from '../pages/customers'
import ECommerce from '../pages/eCommerce'
import Orders from '../pages/orders'
import Cars from '../pages/cars'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ECommerce />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
