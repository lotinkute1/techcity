import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import adsImage from "../../assets/images/ads/ad1.jpg";
import AdsBanner from "../AdsBanner/AdsBanner";
import Banner from "../Banner/Banner";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";

export default function Main() {
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      const response = await productApi.getAll();
      const {data} = response;
      setProducts(data);
    } catch (error) {}
  };

  useEffect(()=>{
    getAllProduct();
  },[])
  
  
  return (
    <>
        {/* banner comp */}
        <Banner/>
        
        {/* carousel Items */}
        <ItemsCarousel itemData={products} title="Sản phẩm nổi bật"/>

        <AdsBanner adsImg={adsImage} adsHref="https://www.lg.com/vn/tro-giup/bao-hanh?fbclid=IwAR2d9nPyurT1Q3bhTler2Ln7ONkmkqVHR-_k6tNPTrBP23tynFJGqm4iIMU"/>
        {/* carousel Items */}
        <ItemsCarousel categoryID="2" itemData={products} title="Laptop"/>
        <ItemsCarousel categoryID="3" itemData={products} title="Máy tính bảng"/>
        <ItemsCarousel categoryID="6" itemData={products} title="Đồng hồ thông minh"/>
    </>
  );
}
