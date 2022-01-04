import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/Main/Main";
import Cart from "../Cart/Cart";
import Payment from "../Payment";
import ProductInfo from "../ProductInfo/ProductInfo";
import ShowAllProduct from "../ShowAllProduct";
export default function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/product_info-:id" element={<ProductInfo />} />

      <Route path="/show-all-product/:id" element={<ShowAllProduct />} />

      <Route path="/show-all-product" element={<ShowAllProduct />} />

      <Route path="*" element={<Main to="/Main" />} />
    </Routes>
  );
}
