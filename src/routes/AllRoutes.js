import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsList, ProductDetail, DashboardPage } from "../pages";
import { Login } from "../pages/index";
import { Register } from "../pages/index";
import { CartPage } from "../pages/Cart/CartPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { OrderPage } from "../pages/Order/OrderPage";

export const AllRoutes = () => {
  // const token=true;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products" element={<ProductsList />} />
      <Route path="products/:id" element={<ProductDetail />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/cart"
        element={
          <ProtectedRoutes>
            <CartPage />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/order-summary"
        element={
          <ProtectedRoutes>
            <OrderPage />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <DashboardPage />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};
