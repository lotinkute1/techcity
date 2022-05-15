import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import userApi from "../../api/userApi";
import adsImage from "../../assets/images/ads/ad1.jpg";
import AdsBanner from "../AdsBanner/AdsBanner";
import Banner from "../Banner/Banner";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import SupplierList from "../SupplierList/SupplierList";

export default function Main() {
  const [products, setProducts] = useState([]);
  // const [suppliers, setSupliers] = useState([]);

  const getAllProduct = async () => {
    try {
      const response = await productApi.getAll();
      var {data,message} = response;
      setProducts(data);
    } catch (error) {
      console.error(message);
    }
  };
  // const getSupliers = async () => {
  //   try{
  //     const response = await userApi.getPopularSuppliers();
  //     var {data,message} = response;
  //     setSupliers(data);
  //   }catch(error){
  //     console.error(message);
  //   }
  // }
  useEffect(()=>{
    getAllProduct();
    // getSupliers();
  },[])
  
  
  return (
    <>
        {/* banner comp */}
        <Banner/>
        
        {/* carousel Items */}
        <ItemsCarousel itemData={products} title="Sản phẩm nổi bật"/>
        {/* <SupplierList suppliers = {suppliers}/> */}
        <AdsBanner adsImg={adsImage} adsHref="https://www.lg.com/vn/tro-giup/bao-hanh?fbclid=IwAR2d9nPyurT1Q3bhTler2Ln7ONkmkqVHR-_k6tNPTrBP23tynFJGqm4iIMU"/>
        {/* carousel Items */}
        <ItemsCarousel categoryID="2" itemData={products} title="Laptop"/>
        <ItemsCarousel categoryID="3" itemData={products} title="Máy tính bảng"/>
        <ItemsCarousel categoryID="6" itemData={products} title="Đồng hồ thông minh"/>
    </>
  );
}
