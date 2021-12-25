import React from "react";
import slide1 from "../../assets/images/slides/slide1.webp";
import slide2 from "../../assets/images/slides/slide2.webp";
import slide3 from "../../assets/images/slides/slide3.webp";
import slide4 from "../../assets/images/slides/slide4.webp";
import GetDiscountsData from "../../api/GetDiscountsData";
export default function Banner() {
//  console.log(GetDiscountsData())
 const discountsData =GetDiscountsData();
//  console.log(discountsData[0].discount_img);
  return (
    <section className="section banner">
      <div className="carousel" data-flickity='{"autoPlay": 5000}'>
        <div className="carousel-cell">
          <a href="/#">
            <img src={slide2} alt=""></img>
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
  );
}
