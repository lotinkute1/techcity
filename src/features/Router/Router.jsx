import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/Main/Main";
import Payment from "../Payment";
import ProductInfo from "../ProductInfo/ProductInfo";
export default function Router() {
  return (
      <Routes>
        <Route path="/product_info-:id" element={<ProductInfo />} />

        <Route path="*" element={<Main to="/Main" />} />
      </Routes>
  );
}
