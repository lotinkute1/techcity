import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import slide1 from "../../assets/images/slides/slide1.webp";
import slide2 from "../../assets/images/slides/slide2.webp";
import slide3 from "../../assets/images/slides/slide3.webp";
import slide4 from "../../assets/images/slides/slide4.webp";
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

        <section className="section banner">
          <div className="carousel" data-flickity='{"autoPlay": 5000}'>
            <div className="carousel-cell">
              <a href="/#">
                <img src={slide1} alt=""></img>
              </a>
            </div>
            <div className="carousel-cell">
              <a href="/#">
                <img src={slide2} alt=""></img>
              </a>
            </div>
            <div className="carousel-cell">
              <a href="/#">
                <img src={slide3} alt=""></img>
              </a>
            </div>
            <div className="carousel-cell">
              <a href="/#">
                <img src={slide4} alt=""></img>
              </a>
            </div>
          </div>
        </section>
        
        
        <ItemsCarousel categoryID="" itemData={data} title="Sản phẩm nổi bật"/>
        {/* <ItemsCarousel title="Điện thoại"/> */}
        <section className="section ad">
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
