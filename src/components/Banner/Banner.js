import React, { useEffect, useState } from 'react';
// import slide1 from "../../assets/images/slides/slide1.webp";
// import slide2 from "../../assets/images/slides/slide2.webp";
// import slide3 from "../../assets/images/slides/slide3.webp";
// import slide4 from "../../assets/images/slides/slide4.webp";
import GetDiscountsData from '../../api/GetDiscountsData';
import Slider from 'react-slick';
import { sliderBannerSetting } from '../settings/slickSetting';
import loadingImage from '../../assets/images/loading/Spinner-1s-200px.gif';
import discountApi from '../../api/discountApi';
import { async } from '@firebase/util';
export default function Banner() {
  //  console.log(GetDiscountsData())

  // const discountsData = GetDiscountsData();
  const [discounts, setDiscounts] = useState([]);
  const getDiscountData =async ()=>{
    try {
      let result =await discountApi.getAll();
      var {data,message} = result;
      console.log(result);
      setDiscounts(data);
    } catch (e) {
      console.log(message);
    }
  }
  useEffect(() => {
    getDiscountData();
  },[])
  //  console.log(discountsData[0].discount_img);
  const renderBannerImg = () =>
     discounts?.map((item) => {
      return (
        <div key={item.id} className="carousel-cell">
          <a href="/#">
            <img src={item.discount_img} alt=""></img>
          </a>
        </div>
      );
    });
  return (
    <section className="section banner">
      {/* <div className="carousel" data-flickity='{"autoPlay": 5000}'>
    	{renderBannerImg()}
        
      </div> */}
      <Slider {...sliderBannerSetting}>{renderBannerImg()}</Slider>
    </section>
  );
}
