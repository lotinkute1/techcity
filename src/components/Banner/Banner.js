import React from "react";
import slide1 from "../../assets/images/slides/slide1.webp";
import slide2 from "../../assets/images/slides/slide2.webp";
import slide3 from "../../assets/images/slides/slide3.webp";
import slide4 from "../../assets/images/slides/slide4.webp";
import GetDiscountsData from "../../api/GetDiscountsData";
import Slider from "react-slick";
import {sliderBannerSetting} from "../settings/slickSetting"
export default function Banner() {
  //  console.log(GetDiscountsData())
  const discountsData = GetDiscountsData();
  //  console.log(discountsData[0].discount_img);
  const renderBannerImg = () =>
    discountsData.map((item) => {
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
		<Slider {...sliderBannerSetting}>
			{renderBannerImg()}
		</Slider>

    </section>
  );
}
