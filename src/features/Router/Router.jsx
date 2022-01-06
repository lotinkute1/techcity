import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/Main/Main";
import Cart from "../Cart/Cart";
import Payment from "../Payment/Payment";
import ProductInfo from "../ProductInfo/ProductInfo";
import ShowAllProduct from "../ShowAllProduct";
import Profile from "../Profiles/Profile";
export default function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/product_info-:id" element={<ProductInfo />} />

      <Route path="/show-all-product/:id" element={<ShowAllProduct />} />

      <Route path="/show-all-product" element={<ShowAllProduct />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<Main to="/Main" />} />
    </Routes>
  );
}
