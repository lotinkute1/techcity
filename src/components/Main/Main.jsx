import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import adsImage from "../../assets/images/ads/ad1.jpg";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel"
import GetProductsData from "../../api/GetProductsData";


import Flickity from "flickity";
import {getData} from "./mainSlice";
export default function Main() {
  const data=GetProductsData();
  // console.log(data[]);
  // const data = useSelector(state => state.main.data);
  const dispatch = useDispatch();
  
  return (
    <div id="main">
      <div className="scroll-top">
        <a href="#main">
          <i className="fas fa-chevron-circle-up" />
        </a>
      </div>
      <div className="scroll-call">
        <span>
          Tổng Đài CSKH
          <br />
          0784508270
        </span>
      </div>
      <div className="content">
        {/* banner comp */}
        
        
        <ItemsCarousel categoryID="" itemData={data} title="Sản phẩm nổi bật"/>

        <section className="section ads">
          <div>
            <a
              title="ads"
              href="https://www.lg.com/vn/tro-giup/bao-hanh?fbclid=IwAR2d9nPyurT1Q3bhTler2Ln7ONkmkqVHR-_k6tNPTrBP23tynFJGqm4iIMU"
            >
              <img src={adsImage} alt="" />
            </a>
          </div>
        </section>

        <ItemsCarousel categoryID="ctgr02" itemData={data} title="máy tính sách tay"/>
        <ItemsCarousel categoryID="ctgr03" itemData={data} title="máy tính bảng"/>
        <ItemsCarousel categoryID="ctgr06" itemData={data} title="Đồng hồ thông minh"/>
        
        
      </div>
    </div>
  );
}
